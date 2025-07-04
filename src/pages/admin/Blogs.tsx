import React, { useState, useEffect, useRef } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { getCollection, addDocument, updateDocument, deleteDocument } from '@/lib/firebase';
import { PlusCircle, Edit, Trash2, Calendar, Clock, Tag, Image, Save, Upload, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { uploadImage, generateUniqueFileName } from '@/lib/utils';

interface Blog {
  id: string;
  title: string;
  summary: string;
  shortDescription: string;
  content: string;
  imageUrl?: string;
  tags: string[];
  createdAt: any;
  updatedAt?: any;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [newBlog, setNewBlog] = useState<Omit<Blog, 'id' | 'createdAt'>>({
    title: '',
    shortDescription: '',
    summary: '',
    content: '',
    imageUrl: '',
    tags: ['']
  });
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [tagInput, setTagInput] = useState('');
  const [editTagInput, setEditTagInput] = useState('');
  const [uploadingImage, setUploadingImage] = useState(false);
  
  const newImageInputRef = useRef<HTMLInputElement>(null);
  const editImageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const blogsData = await getCollection('blogs');
      
      // Sort blogs by creation date (newest first)
      const sortedBlogs = blogsData.sort((a, b) => {
        const dateA = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt);
        const dateB = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt);
        return dateB - dateA;
      });
      
      setBlogs(sortedBlogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      toast.error('Failed to load blog posts');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateBlog = async () => {
    try {
      if (!newBlog.title || !newBlog.content || !newBlog.summary) {
        toast.error('Title, summary and content are required');
        return;
      }

      // Filter out empty tags
      const tags = newBlog.tags?.filter(t => t.trim() !== '') || [];
      
      await addDocument('blogs', {
        ...newBlog,
        tags,
        createdAt: new Date()
      });
      
      toast.success('Blog created successfully');
      setNewBlog({
        title: '',
        shortDescription: '',
        summary: '',
        content: '',
        imageUrl: '',
        tags: ['']
      });
      fetchBlogs();
    } catch (error) {
      console.error('Error creating blog:', error);
      toast.error('Failed to create blog');
    }
  };

  const handleUpdateBlog = async () => {
    try {
      if (!editingBlog || !editingBlog.id) return;
      
      // Filter out empty tags
      const tags = editingBlog.tags?.filter(t => t.trim() !== '') || [];
      
      await updateDocument('blogs', editingBlog.id, {
        title: editingBlog.title,
        shortDescription: editingBlog.shortDescription,
        summary: editingBlog.summary,
        content: editingBlog.content,
        imageUrl: editingBlog.imageUrl,
        tags,
        updatedAt: new Date()
      });
      
      toast.success('Blog updated successfully');
      setEditingBlog(null);
      fetchBlogs();
    } catch (error) {
      console.error('Error updating blog:', error);
      toast.error('Failed to update blog');
    }
  };

  const handleDeleteBlog = async (id: string) => {
    try {
      await deleteDocument('blogs', id);
      toast.success('Blog post deleted successfully');
      fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog post:', error);
      toast.error('Failed to delete blog post');
    }
  };
  
  const handleImageUpload = async (file: File, isNew: boolean) => {
    try {
      setUploadingImage(true);
      const fileName = generateUniqueFileName(file);
      const path = `blogs/${fileName}`;
      const imageUrl = await uploadImage(file, path);
      
      if (isNew) {
        setNewBlog({
          ...newBlog,
          imageUrl
        });
      } else if (editingBlog) {
        setEditingBlog({
          ...editingBlog,
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

  const addTag = (isNew = true) => {
    if (isNew) {
      if (!tagInput.trim()) return;
      
      setNewBlog({
        ...newBlog,
        tags: [...(newBlog.tags || []), tagInput.trim()]
      });
      setTagInput('');
    } else {
      if (!editTagInput.trim()) return;
      
      setEditingBlog({
        ...editingBlog!,
        tags: [...(editingBlog?.tags || []), editTagInput.trim()]
      });
      setEditTagInput('');
    }
  };

  const removeTag = (index: number, isNew = true) => {
    if (isNew) {
      const tags = [...(newBlog.tags || [])];
      tags.splice(index, 1);
      setNewBlog({ ...newBlog, tags });
    } else {
      const tags = [...(editingBlog?.tags || [])];
      tags.splice(index, 1);
      setEditingBlog({ ...editingBlog!, tags });
    }
  };

  const renderTagsInput = (tags: string[] = [], isNew = true) => (
    <div className="space-y-3 mt-4">
      <label className="block text-sm font-medium mb-1">Tags</label>
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag, index) => (
          <div 
            key={index}
            className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm flex items-center"
          >
            {tag}
            <button
              type="button"
              className="ml-2 text-primary hover:text-primary/70"
              onClick={() => removeTag(index, isNew)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Input
          value={isNew ? tagInput : editTagInput}
          onChange={(e) => isNew ? setTagInput(e.target.value) : setEditTagInput(e.target.value)}
          placeholder="Add tag..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              addTag(isNew);
            }
          }}
        />
        <Button 
          type="button" 
          variant="outline" 
          onClick={() => addTag(isNew)}
        >
          Add
        </Button>
      </div>
    </div>
  );

  const renderBlogForm = (isNew: boolean) => {
    const blog = isNew ? newBlog : editingBlog;
    if (!blog) return null;

    return (
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Blog Title *</label>
          <Input 
            value={blog.title}
            onChange={(e) => isNew 
              ? setNewBlog({ ...newBlog, title: e.target.value })
              : setEditingBlog({ ...editingBlog!, title: e.target.value })
            }
            placeholder="Enter blog title"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Short Description *</label>
          <Input 
            value={blog.shortDescription}
            onChange={(e) => isNew 
              ? setNewBlog({ ...newBlog, shortDescription: e.target.value })
              : setEditingBlog({ ...editingBlog!, shortDescription: e.target.value })
            }
            placeholder="Brief description (60-80 characters)"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Summary *</label>
          <Textarea 
            value={blog.summary}
            onChange={(e) => isNew 
              ? setNewBlog({ ...newBlog, summary: e.target.value }) 
              : setEditingBlog({ ...editingBlog!, summary: e.target.value })
            }
            placeholder="Enter blog summary"
            rows={2}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Content *</label>
          <Textarea 
            value={blog.content}
            onChange={(e) => isNew 
              ? setNewBlog({ ...newBlog, content: e.target.value }) 
              : setEditingBlog({ ...editingBlog!, content: e.target.value })
            }
            placeholder="Enter blog content"
            rows={12}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Featured Image</label>
          <div className="space-y-2">
            {blog.imageUrl && (
              <div className="w-full aspect-video bg-muted relative rounded-md overflow-hidden">
                <img 
                  src={blog.imageUrl} 
                  alt={blog.title} 
                  className="w-full h-full object-cover"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 h-8 w-8"
                  onClick={() => isNew
                    ? setNewBlog({ ...newBlog, imageUrl: '' })
                    : setEditingBlog({ ...editingBlog!, imageUrl: '' })
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
                ) : blog.imageUrl ? (
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
        
        {renderTagsInput(blog.tags, isNew)}
      </div>
    );
  };

  const formatDate = (date: any) => {
    if (!date) return 'N/A';
    try {
      // Handle Firebase timestamp or regular Date
      const dateObj = date.toDate ? date.toDate() : new Date(date);
      return format(dateObj, 'MMM d, yyyy');
    } catch (error) {
      return 'Invalid date';
    }
  };

  return (
    <AdminLayout title="Manage Blogs">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-muted-foreground">
          Create, edit, and manage the blog posts for your website.
        </p>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-orange-accent hover:bg-orange-accent/90 text-white w-full sm:w-auto">
              <PlusCircle className="h-4 w-4 mr-2" />
              Add New Blog Post
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto mx-4 sm:mx-auto">
            <DialogHeader>
              <DialogTitle>Create New Blog Post</DialogTitle>
            </DialogHeader>
            
            {renderBlogForm(true)}
            
            <DialogFooter className="mt-6 flex-col sm:flex-row gap-2">
              <Button type="button" variant="outline" onClick={() => {
                setNewBlog({
                  title: '',
                  shortDescription: '',
                  summary: '',
                  content: '',
                  imageUrl: '',
                  tags: ['']
                });
              }} className="w-full sm:w-auto">
                Reset
              </Button>
              <Button type="button" className="bg-primary w-full sm:w-auto" onClick={handleCreateBlog}>
                Publish Blog Post
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        {loading ? (
          // Loading skeleton
          Array(4).fill(0).map((_, i) => (
            <Card key={i} className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="h-6 w-3/4 bg-muted animate-pulse rounded"></div>
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
        ) : blogs.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <h3 className="text-lg font-medium mb-2">No blog posts yet</h3>
            <p className="text-muted-foreground mb-4">
              Start by adding your first blog post
            </p>
          </div>
        ) : (
          blogs.map((blog) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border border-border/50 hover:border-primary/20 transition-colors h-full flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {blog.imageUrl && (
                    <div className="aspect-video md:aspect-square relative rounded-md overflow-hidden">
                      <img 
                        src={blog.imageUrl} 
                        alt={blog.title} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = 'https://placehold.co/600x400/png?text=Image+Not+Found';
                        }}
                      />
                    </div>
                  )}
                  
                  <div className={`flex flex-col ${blog.imageUrl ? 'md:col-span-3' : 'md:col-span-4'}`}>
                    <CardHeader>
                      <CardTitle className="text-xl line-clamp-2">{blog.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(blog.createdAt)}
                        </div>
                        {blog.updatedAt && (
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            Updated: {formatDate(blog.updatedAt)}
                          </div>
                        )}
                      </div>
                      
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                        {blog.summary}
                      </p>
                      
                      {blog.tags && blog.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {blog.tags.map((tag, index) => (
                            <div 
                              key={index}
                              className="bg-primary/10 text-primary text-xs rounded-full px-2 py-1 flex items-center"
                            >
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="flex flex-col sm:flex-row sm:justify-between gap-2 border-t pt-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="text-primary w-full sm:w-auto" onClick={() => setEditingBlog(blog)}>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto mx-4 sm:mx-auto">
                          <DialogHeader>
                            <DialogTitle>Edit Blog Post</DialogTitle>
                          </DialogHeader>
                          
                          {renderBlogForm(false)}
                          
                          <DialogFooter className="mt-6 flex-col sm:flex-row gap-2">
                            <Button type="button" variant="outline" onClick={() => setEditingBlog(null)} className="w-full sm:w-auto">
                              Cancel
                            </Button>
                            <Button type="button" className="bg-primary w-full sm:w-auto" onClick={handleUpdateBlog}>
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
                            <AlertDialogTitle>Delete Blog Post</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete "{blog.title}"? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter className="flex-col sm:flex-row gap-2">
                            <AlertDialogCancel className="w-full sm:w-auto">Cancel</AlertDialogCancel>
                            <AlertDialogAction 
                              className="bg-destructive hover:bg-destructive/90 w-full sm:w-auto"
                              onClick={() => handleDeleteBlog(blog.id)}
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))
        )}
      </div>
    </AdminLayout>
  );
};

export default Blogs; 