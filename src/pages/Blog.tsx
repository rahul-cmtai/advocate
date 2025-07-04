import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import legalHeroBg from "@/assets/legal-hero-bg.jpg";
import { getCollection } from "@/lib/firebase";
import { format } from "date-fns";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, CalendarIcon, ChevronDown, Search, FileQuestion } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  shortDescription?: string;
  content: string;
  imageUrl?: string;
  tags?: string[];
  createdAt: any;
}

// Add original blog data for fallback
const originalBlogs = [
  {
    id: "1",
    title: "Legal Rights Every Citizen Should Know",
    imageUrl: "/placeholder.svg",
    summary: "A quick guide to your fundamental legal rights in India.",
    content: "Detailed content about legal rights every citizen should know...",
    tags: ["Legal Rights", "Constitution", "Fundamental Rights"]
  },
  {
    id: "2",
    title: "How to Choose the Right Advocate",
    imageUrl: "/placeholder.svg",
    summary: "Tips and tricks for selecting the best legal representation.",
    content: "Detailed content about choosing the right advocate...",
    tags: ["Legal Advice", "Advocate Selection", "Legal Representation"]
  },
  {
    id: "3",
    title: "Understanding Family Law",
    imageUrl: "/placeholder.svg",
    summary: "An overview of family law and what it means for you.",
    content: "Detailed content about family law...",
    tags: ["Family Law", "Marriage", "Divorce", "Child Custody"]
  },
];

const BlogCard: React.FC<{ blog: BlogPost }> = ({ blog }) => {
  const navigate = useNavigate();
  const date = blog.createdAt && typeof blog.createdAt.toDate === 'function' 
    ? format(blog.createdAt.toDate(), 'MMMM dd, yyyy') 
    : 'Recent';

  return (
    <Card className="overflow-hidden h-full flex flex-col border-none shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="p-0">
        <div className="h-48 overflow-hidden bg-muted">
          {blog.imageUrl ? (
            <img 
              src={blog.imageUrl} 
              alt={blog.title} 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = '/placeholder.svg';
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <FileText className="w-12 h-12 text-primary/40" />
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-6 flex-grow">
        <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
          <CalendarIcon className="h-3 w-3" />
          <span>{date}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{blog.title}</h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {blog.shortDescription || blog.summary}
        </p>
        
        {blog.tags && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.slice(0, 3).map((tag, idx) => (
              <Badge key={idx} variant="outline">{tag}</Badge>
            ))}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="px-6 pb-6 pt-0">
        <Button asChild>
          <Link to={`/blog/${blog.id}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const blogsData = await getCollection('blogs');
        
        if (blogsData && blogsData.length > 0) {
          // Sort blogs by creation date (newest first)
          const sortedBlogs = blogsData.sort((a, b) => {
            const dateA = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt);
            const dateB = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt);
            return dateB - dateA;
          });
          
          setBlogs(sortedBlogs);
          setFilteredBlogs(sortedBlogs);
          setTags(Array.from(new Set(sortedBlogs.flatMap(blog => blog.tags || []))));
        } else {
          // If no Firestore data, use original data
          setBlogs(originalBlogs as any[]);
          setFilteredBlogs(originalBlogs as any[]);
          setTags(Array.from(new Set(originalBlogs.flatMap(blog => blog.tags || []))));
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        // If error, use original data as fallback
        setBlogs(originalBlogs as any[]);
        setFilteredBlogs(originalBlogs as any[]);
        setTags(Array.from(new Set(originalBlogs.flatMap(blog => blog.tags || []))));
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Filter blogs based on search term and selected tag
  useEffect(() => {
    if (!blogs.length) return;
    
    let filtered = [...blogs];
    
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(blog => 
        blog.title.toLowerCase().includes(search) || 
        blog.shortDescription?.toLowerCase().includes(search) ||
        blog.summary.toLowerCase().includes(search) ||
        blog.content.toLowerCase().includes(search) ||
        (blog.tags && blog.tags.some(tag => tag.toLowerCase().includes(search)))
      );
    }
    
    if (selectedTag) {
      filtered = filtered.filter(blog => 
        blog.tags && blog.tags.includes(selectedTag)
      );
    }
    
    setFilteredBlogs(filtered);
  }, [blogs, searchTerm, selectedTag]);

  const formatDate = (date: any) => {
    if (!date) return '';
    try {
      const dateObj = date.toDate ? date.toDate() : new Date(date);
      return format(dateObj, 'MMMM d, yyyy');
    } catch (error) {
      return '';
    }
  };

  return (
    <>
      <Navigation />
      
      {/* Banner Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={legalHeroBg} 
            alt="Legal Blog Banner" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 heading-medium">Legal Insights</h1>
          <p className="text-lg md:text-xl max-w-2xl">Expert analysis and guidance on important legal topics</p>
        </div>
      </div>
      
      <div className="container mx-auto py-16 px-4 min-h-screen">
        <h2 className="text-3xl font-bold mb-10 text-primary heading-medium text-center">Latest Articles</h2>
        
        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 justify-between">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search blogs..." 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            {tags.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Filter by Tag
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Select Tag</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setSelectedTag('')} className={!selectedTag ? 'bg-muted' : ''}>
                    All Tags
                  </DropdownMenuItem>
                  {tags.map((tag) => (
                    <DropdownMenuItem 
                      key={tag} 
                      onClick={() => setSelectedTag(tag)}
                      className={selectedTag === tag ? 'bg-muted' : ''}
                    >
                      {tag}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(6).fill(0).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="h-48 bg-muted" />
                <div className="p-6 space-y-4">
                  <Skeleton className="h-6 w-1/3" />
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-20 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </Card>
            ))}
          </div>
        ) : filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <FileQuestion className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-medium mb-2">No Blogs Found</h3>
            <p className="text-muted-foreground">
              {searchTerm || selectedTag ? 
                'Try adjusting your filters or search term.' : 
                'Check back soon for new articles.'}
            </p>
            {(searchTerm || selectedTag) && (
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTag('');
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Blog; 