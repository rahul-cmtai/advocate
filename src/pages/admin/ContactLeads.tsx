import React, { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { db } from '@/lib/firebase';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trash2, Mail, Phone, Calendar, MessageSquare, ExternalLink, Eye } from 'lucide-react';
import { format } from 'date-fns';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface ContactLead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  createdAt: any; // Firebase timestamp
}

const ContactLeads: React.FC = () => {
  const [leads, setLeads] = useState<ContactLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<ContactLead | null>(null);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, 'contactLeads'));
      
      const leadsData = querySnapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      })) as ContactLead[];
      
      // Sort by creation date (newest first)
      const sortedLeads = leadsData.sort((a, b) => {
        const dateA = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt);
        const dateB = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt);
        return dateB - dateA;
      });
      
      setLeads(sortedLeads);
    } catch (error) {
      console.error("Error fetching contact leads:", error);
      toast.error("Failed to load contact leads");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'contactLeads', id));
      toast.success("Lead deleted successfully");
      fetchLeads();
    } catch (error) {
      console.error("Error deleting lead:", error);
      toast.error("Failed to delete lead");
    }
  };

  const formatDate = (date: any) => {
    if (!date) return 'N/A';
    try {
      const dateObj = date.toDate ? date.toDate() : new Date(date);
      return format(dateObj, 'MMM d, yyyy • h:mm a');
    } catch (error) {
      return 'Invalid date';
    }
  };

  // Message dialog component to be reused
  const MessageDialog = ({ lead }: { lead: ContactLead }) => (
    <DialogContent className="mx-4 sm:mx-auto max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Message from {lead.name}</DialogTitle>
        <DialogDescription className="flex items-center text-sm">
          <Calendar className="mr-2 h-4 w-4" />
          {formatDate(lead.createdAt)}
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-2 mt-2">
        {lead.subject && (
          <div className="font-medium">{lead.subject}</div>
        )}
        <div className="text-sm whitespace-pre-line">{lead.message}</div>
        <div className="pt-2 flex flex-col space-y-1">
          <a href={`mailto:${lead.email}`} className="text-primary hover:underline text-sm flex items-center">
            <Mail className="mr-2 h-4 w-4" />{lead.email}
          </a>
          {lead.phone && (
            <a href={`tel:${lead.phone}`} className="hover:underline text-sm flex items-center">
              <Phone className="mr-2 h-4 w-4" />{lead.phone}
            </a>
          )}
        </div>
      </div>
      <DialogFooter>
        <Button variant="outline" className="w-full sm:w-auto" onClick={() => setSelectedLead(null)}>Close</Button>
      </DialogFooter>
    </DialogContent>
  );

  // Mobile card view for each lead
  const LeadCard = ({ lead }: { lead: ContactLead }) => (
    <Card className="mb-4 border border-border/50 hover:border-primary/30 transition-all">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-base font-semibold">{lead.name}</CardTitle>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button 
                size="icon" 
                variant="ghost" 
                className="h-7 w-7 text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="mx-4 sm:mx-auto">
              <AlertDialogHeader>
                <AlertDialogTitle>Delete Lead</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to delete this lead? This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="flex-col sm:flex-row gap-2">
                <AlertDialogCancel className="w-full sm:w-auto">Cancel</AlertDialogCancel>
                <AlertDialogAction
                  className="bg-destructive hover:bg-destructive/90 w-full sm:w-auto"
                  onClick={() => handleDelete(lead.id)}
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 pt-0">
        <div className="flex items-center text-sm">
          <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
          <a href={`mailto:${lead.email}`} className="text-primary hover:underline">
            {lead.email}
          </a>
        </div>
        
        {lead.phone && (
          <div className="flex items-center text-sm">
            <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
            <a href={`tel:${lead.phone}`} className="hover:underline">
              {lead.phone}
            </a>
          </div>
        )}
        
        <div className="flex items-center text-sm">
          <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
          {formatDate(lead.createdAt)}
        </div>
        
        {lead.subject && (
          <div className="text-sm font-medium mt-2">
            {lead.subject}
          </div>
        )}
        
        <div className="text-sm line-clamp-2 mt-1">
          {lead.message}
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="ghost" 
              size="sm" 
              className="mt-2 h-8 text-xs w-full flex items-center justify-center"
              onClick={() => setSelectedLead(lead)}
            >
              <ExternalLink className="h-3 w-3 mr-1" />
              View Full Message
            </Button>
          </DialogTrigger>
          <MessageDialog lead={lead} />
        </Dialog>
      </CardContent>
    </Card>
  );

  return (
    <AdminLayout title="Contact Leads">
      <Card className="border border-border/50">
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            Contact Form Inquiries
            <span className="ml-2 text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
              {leads.length} {leads.length === 1 ? 'Lead' : 'Leads'}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-16 bg-muted animate-pulse rounded-md" />
              ))}
            </div>
          ) : leads.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No contact leads yet</h3>
              <p className="text-muted-foreground">
                When visitors fill out your contact form, they'll appear here
              </p>
            </div>
          ) : (
            <>
              {/* Desktop view - Table */}
              <div className="hidden md:block rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Contact Info</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="w-[120px] text-center">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leads.map((lead) => (
                      <TableRow key={lead.id}>
                        <TableCell className="font-medium">{lead.name}</TableCell>
                        <TableCell>
                          <div className="flex flex-col space-y-1">
                            <div className="flex items-center text-sm">
                              <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                              <a href={`mailto:${lead.email}`} className="text-primary hover:underline">
                                {lead.email}
                              </a>
                            </div>
                            {lead.phone && (
                              <div className="flex items-center text-sm">
                                <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                                <a href={`tel:${lead.phone}`} className="hover:underline">
                                  {lead.phone}
                                </a>
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          {lead.subject || <span className="text-muted-foreground text-sm">No subject</span>}
                        </TableCell>
                        <TableCell className="max-w-[200px]">
                          <div className="flex items-start gap-2">
                            <MessageSquare className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <div className="line-clamp-2 text-sm">{lead.message}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center text-sm">
                            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                            {formatDate(lead.createdAt)}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center justify-center space-x-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button 
                                  size="icon" 
                                  variant="ghost" 
                                  className="h-8 w-8 text-primary hover:text-primary"
                                  onClick={() => setSelectedLead(lead)}
                                >
                                  <Eye className="h-4 w-4" />
                                  <span className="sr-only">View</span>
                                </Button>
                              </DialogTrigger>
                              <MessageDialog lead={lead} />
                            </Dialog>
                            
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button 
                                  size="icon" 
                                  variant="ghost" 
                                  className="h-8 w-8 text-destructive hover:text-destructive"
                                >
                                  <Trash2 className="h-4 w-4" />
                                  <span className="sr-only">Delete</span>
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent className="mx-4 sm:mx-auto">
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Delete Lead</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to delete this lead? This action cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter className="flex-col sm:flex-row gap-2">
                                  <AlertDialogCancel className="w-full sm:w-auto">Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    className="bg-destructive hover:bg-destructive/90 w-full sm:w-auto"
                                    onClick={() => handleDelete(lead.id)}
                                  >
                                    Delete
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              {/* Mobile view - Cards */}
              <div className="md:hidden space-y-4">
                {leads.map(lead => (
                  <LeadCard key={lead.id} lead={lead} />
                ))}
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default ContactLeads; 