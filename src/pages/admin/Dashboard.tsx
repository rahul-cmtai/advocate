import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Inbox, FileText, BookOpen, Mails } from 'lucide-react';
import { getCollection } from '@/lib/firebase';

const Dashboard: React.FC = () => {
  const [counts, setCounts] = useState({
    services: 0,
    blogs: 0,
    contactLeads: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        setLoading(true);
        
        // Get data from all collections
        const servicesData = await getCollection('services');
        const blogsData = await getCollection('blogs');
        const contactLeadsData = await getCollection('contactLeads');
        
        setCounts({
          services: servicesData.length,
          blogs: blogsData.length,
          contactLeads: contactLeadsData.length,
        });
      } catch (error) {
        console.error('Error fetching counts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCounts();
  }, []);

  const stats = [
    {
      title: 'Total Services',
      value: counts.services,
      icon: <FileText className="h-6 w-6" />,
      color: 'bg-blue-50 text-blue-700',
      link: '/admin/services',
    },
    {
      title: 'Blog Posts',
      value: counts.blogs,
      icon: <BookOpen className="h-6 w-6" />,
      color: 'bg-purple-50 text-purple-700',
      link: '/admin/blogs',
    },
    {
      title: 'Contact Inquiries',
      value: counts.contactLeads,
      icon: <Mails className="h-6 w-6" />,
      color: 'bg-amber-50 text-amber-700',
      link: '/admin/contact-leads',
    },
  ];

  return (
    <AdminLayout title="Dashboard">
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat, i) => (
          <Card key={i} className="border-border/40 hover:border-primary/50 transition-colors cursor-pointer">
            <a href={stat.link}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <div className={`${stat.color} p-2 rounded-full`}>
                  {stat.icon}
                </div>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="h-7 w-16 bg-muted animate-pulse rounded"></div>
                ) : (
                  <div className="text-2xl font-bold">{stat.value}</div>
                )}
              </CardContent>
            </a>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid gap-4">
        <Card className="border-border/40">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Welcome to your admin dashboard. Use the cards above to navigate to different sections and manage your website content.
            </p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Dashboard; 