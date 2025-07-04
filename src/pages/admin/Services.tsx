import React, { useState, useEffect, useRef } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { getCollection, addDocument, updateDocument, deleteDocument } from '@/lib/firebase';
import { PlusCircle, Edit, Trash2, ChevronUp, ChevronDown, Save, X, Upload, Image } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { uploadImage, generateUniqueFileName } from '@/lib/utils';

interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  longDescription?: string;
  icon?: string;
  imageUrl?: string;
  features?: string[];
  pricing?: string;
}

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [newService, setNewService] = useState<Omit<Service, 'id'>>({
    title: '',
    shortDescription: '',
    description: '',
    longDescription: '',
    icon: '',
    imageUrl: '',
    features: [''],
    pricing: ''
  });
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [openDialogId, setOpenDialogId] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  
  const newImageInputRef = useRef<HTMLInputElement>(null);
  const editImageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const servicesData = await getCollection('services');
      setServices(servicesData);
    } catch (error) {
      console.error('Error fetching services:', error);
      toast.error('Failed to load services');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateService = async () => {
    try {
      if (!newService.title || !newService.description) {
        toast.error('Title and description are required');
        return;
      }

      // Filter out empty features
      const features = newService.features?.filter(f => f.trim() !== '') || [];
      
      await addDocument('services', {
        ...newService,
        features,
        createdAt: new Date()
      });
      
      toast.success('Service created successfully');
      setNewService({
        title: '',
        shortDescription: '',
        description: '',
        longDescription: '',
        icon: '',
        imageUrl: '',
        features: [''],
        pricing: ''
      });
      fetchServices();
    } catch (error) {
      console.error('Error creating service:', error);
      toast.error('Failed to create service');
    }
  };

  const handleUpdateService = async () => {
    try {
      if (!editingService || !editingService.id) return;
      
      // Filter out empty features
      const features = editingService.features?.filter(f => f.trim() !== '') || [];
      
      await updateDocument('services', editingService.id, {
        title: editingService.title,
        shortDescription: editingService.shortDescription,
        description: editingService.description,
        longDescription: editingService.longDescription,
        icon: editingService.icon,
        imageUrl: editingService.imageUrl,
        features,
        pricing: editingService.pricing,
        updatedAt: new Date()
      });
      
      toast.success('Service updated successfully');
      setEditingService(null);
      fetchServices();
    } catch (error) {
      console.error('Error updating service:', error);
      toast.error('Failed to update service');
    }
  };

  const handleDeleteService = async (id: string) => {
    try {
      await deleteDocument('services', id);
      toast.success('Service deleted successfully');
      fetchServices();
    } catch (error) {
      console.error('Error deleting service:', error);
      toast.error('Failed to delete service');
    }
  };

  const handleImageUpload = async (file: File, isNew: boolean) => {
    try {
      setUploadingImage(true);
      const fileName = generateUniqueFileName(file);
      const path = `services/${fileName}`;
      const imageUrl = await uploadImage(file, path);
      
      if (isNew) {
        setNewService({
          ...newService,
          imageUrl
        });
      } else if (editingService) {
        setEditingService({
          ...editingService,
          imageUrl
        });
      }
      
      toast.success('Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Failed to upload image');
    } finally {
      setUploadingImage(false);
    }
  };

  const handleNewImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleImageUpload(file, true);
    }
  };

  const handleEditImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleImageUpload(file, false);
    }
  };

  const addFeature = (isNew: boolean) => {
    if (isNew) {
      setNewService({
        ...newService,
        features: [...(newService.features || []), '']
      });
    } else if (editingService) {
      setEditingService({
        ...editingService,
        features: [...(editingService.features || []), '']
      });
    }
  };

  const updateFeature = (index: number, value: string, isNew: boolean) => {
    if (isNew) {
      const features = [...(newService.features || [])];
      features[index] = value;
      setNewService({ ...newService, features });
    } else if (editingService) {
      const features = [...(editingService.features || [])];
      features[index] = value;
      setEditingService({ ...editingService, features });
    }
  };

  const removeFeature = (index: number, isNew: boolean) => {
    if (isNew) {
      const features = [...(newService.features || [])];
      features.splice(index, 1);
      setNewService({ ...newService, features });
    } else if (editingService) {
      const features = [...(editingService.features || [])];
      features.splice(index, 1);
      setEditingService({ ...editingService, features });
    }
  };

  const moveFeature = (index: number, direction: 'up' | 'down', isNew: boolean) => {
    if (isNew) {
      const features = [...(newService.features || [])];
      if (direction === 'up' && index > 0) {
        [features[index], features[index - 1]] = [features[index - 1], features[index]];
      } else if (direction === 'down' && index < features.length - 1) {
        [features[index], features[index + 1]] = [features[index + 1], features[index]];
      }
      setNewService({ ...newService, features });
    } else if (editingService) {
      const features = [...(editingService.features || [])];
      if (direction === 'up' && index > 0) {
        [features[index], features[index - 1]] = [features[index - 1], features[index]];
      } else if (direction === 'down' && index < features.length - 1) {
        [features[index], features[index + 1]] = [features[index + 1], features[index]];
      }
      setEditingService({ ...editingService, features });
    }
  };

  const renderFeatureInputs = (features: string[] = [''], isNew: boolean) => (
    <div className="space-y-3 mt-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">Service Features</h3>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => addFeature(isNew)}
        >
          <PlusCircle className="h-4 w-4 mr-1" />
          Add Feature
        </Button>
      </div>
      
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2">
          <Input
            value={feature}
            onChange={(e) => updateFeature(index, e.target.value, isNew)}
            placeholder={`Feature ${index + 1}`}
            className="flex-1"
          />
          <div className="flex items-center">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => moveFeature(index, 'up', isNew)}
              disabled={index === 0}
              className="h-8 w-8"
            >
              <ChevronUp className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => moveFeature(index, 'down', isNew)}
              disabled={index === features.length - 1}
              className="h-8 w-8"
            >
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => removeFeature(index, isNew)}
              className="h-8 w-8 text-destructive hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderServiceForm = (isNew: boolean) => {
    const service = isNew ? newService : editingService;
    if (!service) return null;

    return (
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Service Title *</label>
          <Input 
            value={service.title}
            onChange={(e) => isNew 
              ? setNewService({ ...newService, title: e.target.value })
              : setEditingService({ ...editingService!, title: e.target.value })
            }
            placeholder="Enter service title"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Short Description *</label>
          <Input 
            value={service.shortDescription || ''}
            onChange={(e) => isNew 
              ? setNewService({ ...newService, shortDescription: e.target.value })
              : setEditingService({ ...editingService!, shortDescription: e.target.value })
            }
            placeholder="Brief description (60-80 characters)"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Description *</label>
          <Textarea 
            value={service.description}
            onChange={(e) => isNew 
              ? setNewService({ ...newService, description: e.target.value }) 
              : setEditingService({ ...editingService!, description: e.target.value })
            }
            placeholder="Enter service description"
            rows={3}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Long Description</label>
          <Textarea 
            value={service.longDescription || ''}
            onChange={(e) => isNew 
              ? setNewService({ ...newService, longDescription: e.target.value }) 
              : setEditingService({ ...editingService!, longDescription: e.target.value })
            }
            placeholder="Detailed service description"
            rows={6}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Pricing</label>
          <Input 
            value={service.pricing || ''}
            onChange={(e) => isNew 
              ? setNewService({ ...newService, pricing: e.target.value })
              : setEditingService({ ...editingService!, pricing: e.target.value })
            }
            placeholder="e.g., Starting from ₹15,000"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Icon Class (optional)</label>
          <Input 
            value={service.icon || ''}
            onChange={(e) => isNew 
              ? setNewService({ ...newService, icon: e.target.value })
              : setEditingService({ ...editingService!, icon: e.target.value })
            }
            placeholder="e.g., lucide-briefcase"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Service Image</label>
          <div className="space-y-2">
            {service.imageUrl && (
              <div className="w-full aspect-video bg-muted relative rounded-md overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 h-8 w-8"
                  onClick={() => isNew
                    ? setNewService({ ...newService, imageUrl: '' })
                    : setEditingService({ ...editingService!, imageUrl: '' })
                  }
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
            
            <div className="flex items-center gap-2">
              <input
                type="file"
                ref={isNew ? newImageInputRef : editImageInputRef}
                accept="image/*"
                onChange={isNew ? handleNewImageChange : handleEditImageChange}
                className="hidden"
              />
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => isNew
                  ? newImageInputRef.current?.click()
                  : editImageInputRef.current?.click()
                }
                disabled={uploadingImage}
                className="w-full"
              >
                {uploadingImage ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Uploading...
                  </>
                ) : service.imageUrl ? (
                  <>
                    <Upload className="h-4 w-4 mr-2" />
                    Change Image
                  </>
                ) : (
                  <>
                    <Image className="h-4 w-4 mr-2" />
                    Upload Image
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
        
        {renderFeatureInputs(service.features, isNew)}
      </div>
    );
  };

  return (
    <AdminLayout title="Manage Services">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-muted-foreground">
          Create, edit, and manage the services that appear on your website.
        </p>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-orange-accent hover:bg-orange-accent/90 text-white w-full sm:w-auto">
              <PlusCircle className="h-4 w-4 mr-2" />
              Add New Service
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto mx-4 sm:mx-auto">
            <DialogHeader>
              <DialogTitle>Create New Service</DialogTitle>
            </DialogHeader>
            
            {renderServiceForm(true)}
            
            <DialogFooter className="mt-6 flex-col sm:flex-row gap-2">
              <Button type="button" variant="outline" onClick={() => {
                setNewService({
                  title: '',
                  shortDescription: '',
                  description: '',
                  longDescription: '',
                  icon: '',
                  imageUrl: '',
                  features: [''],
                  pricing: ''
                });
              }} className="w-full sm:w-auto">
                Reset
              </Button>
              <Button type="button" className="bg-primary w-full sm:w-auto" onClick={handleCreateService}>
                Create Service
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {loading ? (
          // Loading skeleton
          Array(3).fill(0).map((_, i) => (
            <Card key={i} className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="h-6 w-2/3 bg-muted animate-pulse rounded"></div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="h-4 bg-muted animate-pulse rounded"></div>
                  <div className="h-4 bg-muted animate-pulse rounded"></div>
                  <div className="h-4 w-2/3 bg-muted animate-pulse rounded"></div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="h-9 w-20 bg-muted animate-pulse rounded"></div>
                <div className="h-9 w-20 bg-muted animate-pulse rounded"></div>
              </CardFooter>
            </Card>
          ))
        ) : services.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <h3 className="text-lg font-medium mb-2">No services yet</h3>
            <p className="text-muted-foreground mb-4">
              Start by adding your first service
            </p>
          </div>
        ) : (
          services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border border-border/50 hover:border-primary/20 transition-colors h-full flex flex-col">
                {service.imageUrl && (
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={service.imageUrl} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://placehold.co/600x400/png?text=Image+Not+Found';
                      }}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {service.description}
                  </p>
                  
                  {service.features && service.features.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium mb-2">Features:</h4>
                      <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-primary cursor-pointer" onClick={() => setOpenDialogId(service.id)}>
                            +{service.features.length - 3} more...
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row sm:justify-between gap-2 border-t pt-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="text-primary w-full sm:w-auto" onClick={() => setEditingService(service)}>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto mx-4 sm:mx-auto">
                      <DialogHeader>
                        <DialogTitle>Edit Service</DialogTitle>
                      </DialogHeader>
                      
                      {renderServiceForm(false)}
                      
                      <DialogFooter className="mt-6 flex-col sm:flex-row gap-2">
                        <Button type="button" variant="outline" onClick={() => setEditingService(null)} className="w-full sm:w-auto">
                          Cancel
                        </Button>
                        <Button type="button" className="bg-primary w-full sm:w-auto" onClick={handleUpdateService}>
                          <Save className="h-4 w-4 mr-2" />
                          Save Changes
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" className="text-destructive border-destructive/30 hover:bg-destructive/10 w-full sm:w-auto">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="mx-4 sm:mx-auto">
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Service</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete "{service.title}"? This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter className="flex-col sm:flex-row gap-2">
                        <AlertDialogCancel className="w-full sm:w-auto">Cancel</AlertDialogCancel>
                        <AlertDialogAction 
                          className="bg-destructive hover:bg-destructive/90 w-full sm:w-auto"
                          onClick={() => handleDeleteService(service.id)}
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardFooter>
              </Card>
              
              {/* Dialog to show all features */}
              <Dialog open={openDialogId === service.id} onOpenChange={(open) => !open && setOpenDialogId(null)}>
                <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto mx-4 sm:mx-auto">
                  <DialogHeader>
                    <DialogTitle>{service.title} - All Features</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <ul className="space-y-2">
                      {service.features?.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="bg-primary/10 text-primary rounded-full p-1 mt-0.5">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <DialogFooter>
                    <Button type="button" variant="outline" onClick={() => setOpenDialogId(null)}>
                      Close
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))
        )}
      </div>
    </AdminLayout>
  );
};

export default Services; 