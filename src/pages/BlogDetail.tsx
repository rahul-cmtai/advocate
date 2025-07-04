import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import legalHeroBg from "@/assets/legal-hero-bg.jpg";
import { getDocument, getCollection } from "@/lib/firebase";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowLeft, Share2, Bookmark, FileText } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

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

// Add back original blog data for fallback
const originalBlogs = [
  {
    id: "1",
    title: "Legal Rights Every Citizen Should Know",
    imageUrl: "/placeholder.svg",
    summary: "A quick guide to your fundamental legal rights in India.",
    content: "Every citizen has fundamental rights protected by the Constitution. These include the right to equality, right to freedom, right against exploitation, right to freedom of religion, cultural and educational rights, and right to constitutional remedies.\n\nThe right to equality ensures that all citizens are equal before the law, regardless of religion, race, caste, sex, or place of birth. This principle is fundamental to a democratic society.\n\nThe right to freedom encompasses various freedoms such as freedom of speech and expression, freedom to assemble peacefully, freedom to form associations, freedom to move freely throughout the territory of India, freedom to reside and settle in any part of India, and freedom to practice any profession.\n\nUnderstanding your fundamental rights is the first step towards exercising them responsibly and ensuring they are protected.",
    tags: ["Legal Rights", "Constitution", "Fundamental Rights"]
  },
  {
    id: "2",
    title: "How to Choose the Right Advocate",
    imageUrl: "/placeholder.svg",
    summary: "Tips and tricks for selecting the best legal representation.",
    content: "Selecting the right advocate is crucial for your legal success. Here are some essential factors to consider:\n\n1. Expertise and Specialization: Different legal issues require different expertise. Look for an advocate who specializes in your specific legal matter.\n\n2. Experience: An experienced advocate is more likely to anticipate challenges and develop effective strategies.\n\n3. Reputation: Research the advocate's reputation through online reviews, testimonials, or referrals from friends and family.\n\n4. Communication Skills: Your advocate should be able to explain complex legal concepts in simple terms and keep you informed about your case.\n\n5. Fees and Billing: Understand the fee structure upfront to avoid surprises later.\n\n6. Accessibility: Your advocate should be accessible and responsive to your queries.\n\n7. Trust Your Instinct: After an initial consultation, trust your gut feeling about whether you can work effectively with the advocate.\n\nRemember, the right advocate can significantly impact the outcome of your legal matter.",
    tags: ["Legal Advice", "Advocate Selection", "Legal Representation"]
  },
  {
    id: "3",
    title: "Understanding Family Law",
    imageUrl: "/placeholder.svg",
    summary: "An overview of family law and what it means for you.",
    content: "Family law encompasses a wide range of legal issues related to family relationships, including marriage, divorce, child custody, adoption, and domestic violence.\n\nMarriage: Family law covers legal aspects of marriage, including age requirements, consent, and registration. It also addresses issues like marital property rights and prenuptial agreements.\n\nDivorce: When a marriage ends, family law provides the framework for separation or divorce, addressing issues like property division, alimony (spousal support), and the grounds for divorce.\n\nChild Custody and Support: One of the most sensitive areas of family law involves determining child custody arrangements and child support obligations following a separation or divorce.\n\nAdoption: Family law regulates the legal process of adopting a child, ensuring that all parties' rights are protected and that the child's best interests are prioritized.\n\nDomestic Violence: Family law provides mechanisms for protecting individuals from domestic violence through restraining orders and other protective measures.\n\nNavigating family law matters can be emotionally challenging. Seeking professional legal advice can help you understand your rights and responsibilities within this complex legal framework.",
    tags: ["Family Law", "Marriage", "Divorce", "Child Custody"]
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        
        // First try to get from Firestore
        const blogData = await getDocument('blogs', id);
        
        if (blogData) {
          setBlog(blogData);
        } else {
          // If not found in Firestore, try original data
          const foundBlog = originalBlogs.find((b) => b.id === id || b.id === Number(id)?.toString());
          if (foundBlog) {
            setBlog(foundBlog as any);
          }
        }
        
        // Fetch all blogs to find related ones
        const blogsData = await getCollection('blogs');
        
        if (blogsData && blogsData.length > 0) {
          setBlogs(blogsData);
        } else {
          setBlogs(originalBlogs as any[]);
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
        // Try to find in original data as fallback
        const foundBlog = originalBlogs.find((b) => b.id === id || b.id === Number(id)?.toString());
        if (foundBlog) {
          setBlog(foundBlog as any);
        }
        setBlogs(originalBlogs as any[]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlog();
  }, [id]);

  // Find related blogs based on tags
  useEffect(() => {
    if (!blog || !blogs.length) return;
    
    const currentId = blog.id;
    const currentTags = blog.tags || [];
    
    // If no tags, just show other random blogs
    if (!currentTags.length) {
      const otherBlogs = blogs.filter(b => b.id !== currentId).slice(0, 3);
      setRelatedBlogs(otherBlogs);
      return;
    }
    
    // Find blogs that share tags with current blog
    const blogsWithSharedTags = blogs
      .filter(b => b.id !== currentId)
      .map(b => {
        const sharedTagCount = b.tags?.filter(tag => 
          currentTags.includes(tag)
        ).length || 0;
        
        return {
          ...b,
          sharedTagCount
        };
      })
      .sort((a, b) => b.sharedTagCount - a.sharedTagCount)
      .slice(0, 3);
    
    setRelatedBlogs(blogsWithSharedTags);
  }, [blog, blogs]);

  const formatDate = (date: any) => {
    if (!date) return '';
    try {
      const dateObj = date.toDate ? date.toDate() : new Date(date);
      return format(dateObj, 'MMMM d, yyyy');
    } catch (error) {
      return '';
    }
  };

  if (loading) {
    return (
      <>
        <Navigation />
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
            <div className="h-8 w-3/4 max-w-xl bg-white/20 animate-pulse rounded mb-4"></div>
          </div>
        </div>
        
        <div className="container mx-auto py-16 px-4 min-h-screen">
          <div className="max-w-4xl mx-auto">
            <div className="h-64 bg-muted animate-pulse rounded-xl mb-8"></div>
            <div className="h-4 bg-muted animate-pulse rounded w-1/2 mb-4"></div>
            <div className="space-y-2 mb-8">
              <div className="h-4 bg-muted animate-pulse rounded w-full"></div>
              <div className="h-4 bg-muted animate-pulse rounded w-full"></div>
              <div className="h-4 bg-muted animate-pulse rounded w-3/4"></div>
            </div>
            <div className="space-y-4">
              {Array(6).fill(0).map((_, i) => (
                <div key={i} className="h-4 bg-muted animate-pulse rounded w-full"></div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!blog) {
    return (
      <>
        <Navigation />
        <div className="container mx-auto py-16 px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
          <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/blog">Back to All Blogs</Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Navigation />
      <main className="pb-16">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">{blog?.title}</h1>
              
              {blog?.tags && blog.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {blog.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline">{tag}</Badge>
                  ))}
                </div>
              )}
              
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <CalendarIcon className="h-3 w-3" />
                <time>
                  {blog?.createdAt && typeof blog.createdAt.toDate === 'function'
                    ? format(blog.createdAt.toDate(), 'MMMM dd, yyyy')
                    : 'Recent'}
                </time>
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Featured Image */}
              {blog?.imageUrl && (
                <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={blog.imageUrl} 
                    alt={blog.title} 
                    className="w-full h-auto"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
              )}
              
              {/* Summary */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Summary</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>{blog?.summary}</p>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="prose prose-lg max-w-none" style={{ whiteSpace: 'pre-wrap' }}>
                {blog?.content}
              </div>
            </div>
          </div>
        </section>
        
        {/* Next/Previous Navigation */}
        <section className="py-8 border-t border-border/30 mt-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <Button asChild variant="outline">
                  <Link to="/blog" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to All Articles
                  </Link>
                </Button>
                
                <div className="flex gap-2">
                  <Button variant="secondary" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="icon">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Posts Section */}
        {relatedBlogs.length > 0 && (
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8 text-center">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedBlogs.map(relatedBlog => (
                  <Card key={relatedBlog.id} className="overflow-hidden h-full flex flex-col">
                    <CardHeader className="p-0">
                      <div className="h-40 overflow-hidden bg-muted">
                        {relatedBlog.imageUrl ? (
                          <img 
                            src={relatedBlog.imageUrl} 
                            alt={relatedBlog.title} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                            <FileText className="w-8 h-8 text-primary/40" />
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 flex-grow">
                      <h3 className="font-bold mb-2 line-clamp-2">{relatedBlog.title}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {relatedBlog.shortDescription || relatedBlog.summary}
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button 
                        variant="ghost" 
                        className="p-0 h-auto"
                        asChild
                      >
                        <Link to={`/blog/${relatedBlog.id}`}>
                          Read More
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default BlogDetail; 