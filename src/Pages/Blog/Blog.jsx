import React, { useState } from 'react';
import Economics from "../../image/blog1.jpeg";
import Data_Analysis from "../../image/blog2.jpeg";
import Policy from "../../image/blog3.jpeg";
import { Calendar, User, Clock, ArrowRight, BookOpen, Heart, MessageCircle, Share } from 'lucide-react';

const Blog = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Economic Trends in Post-Pandemic World",
      excerpt: "Analyzing how global economies are recovering and transforming after the COVID-19 pandemic...",
      content: "The COVID-19 pandemic has fundamentally altered global economic systems. In this article, I explore the key trends emerging in the post-pandemic world, including shifts in supply chains, changes in consumer behavior, and the role of digital transformation in economic recovery.",
      date: "June 15, 2023",
      readTime: "5 min read",
      category: "Economics",
      author: "Rafiq Ibn Zaman",
      likes: 24,
      comments: 8,
      image: Economics,
    },
    {
      id: 2,
      title: "Data Analysis Techniques for Economic Research",
      excerpt: "Exploring modern data analysis methods that are revolutionizing economic research...",
      content: "With the increasing availability of large datasets, economists now have unprecedented opportunities to test theories and models. This post discusses various data analysis techniques including regression analysis, time series forecasting, and machine learning applications in economics.",
      date: "May 28, 2023",
      readTime: "7 min read",
      category: "Data Analysis",
      author: "Rafiq Ibn Zaman",
      likes: 31,
      comments: 12,
      image: Data_Analysis,
    },
    {
      id: 3,
      title: "The Impact of Climate Change on Economic Policies",
      excerpt: "How environmental factors are increasingly influencing economic decision-making...",
      content: "Climate change is no longer just an environmental issue—it's an economic one. This article examines how governments and international organizations are incorporating climate considerations into economic policies, from carbon pricing to green investment strategies.",
      date: "April 12, 2023",
      readTime: "6 min read",
      category: "Policy",
      author: "Rafiq Ibn Zaman",
      likes: 19,
      comments: 5,
      image: Policy,
    }
  ]);

  const [selectedBlog, setSelectedBlog] = useState(null);

  const openBlogModal = (blog) => {
    setSelectedBlog(blog);
  };

  const closeBlogModal = () => {
    setSelectedBlog(null);
  };

  return (
    <section id="blog" className="bg-gradient-to-r from-[#BBD2C5] via-[#536976] to-[#536976] py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="mb-2 mt-2">
            <hr className="h-1 border-0 bg-gradient-to-r from-teal-50 from-50% to-transparent to-50%" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4 flex items-center justify-center gap-3">
            <BookOpen size={36} />
            My <span className="text-teal-50">Blog</span>
          </h2>
          <div className="mb-2 mt-2">
            <hr className="h-1 border-0 bg-gradient-to-l from-teal-400 from-50% to-transparent to-50%" />
          </div>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Insights on economics, data analysis, and policy development from my research and studies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-gray-800/70  rounded-xl overflow-hidden border border-teal-500/20 ">
              <div className="h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full bg-cover h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-teal-700 text-teal-300 text-xs px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 hover:text-teal-400 transition-colors cursor-pointer" onClick={() => openBlogModal(blog)}>
                  {blog.title}
                </h3>

                <p className="text-gray-300 mb-4">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{blog.author}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-gray-400 hover:text-rose-500 transition-colors">
                      <Heart size={16} />
                      <span>{blog.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors">
                      <MessageCircle size={16} />
                      <span>{blog.comments}</span>
                    </button>
                  </div>

                  <button
                    className="flex items-center gap-1 text-teal-400 hover:text-teal-300 transition-colors"
                    onClick={() => openBlogModal(blog)}
                  >
                    Read more <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg">
            View All Articles <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Blog Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="h-64 overflow-hidden">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-teal-700 text-teal-300 text-xs px-3 py-1 rounded-full">
                  {selectedBlog.category}
                </span>
                <button
                  onClick={closeBlogModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">
                {selectedBlog.title}
              </h2>

              <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{selectedBlog.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{selectedBlog.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={14} />
                  <span>{selectedBlog.author}</span>
                </div>
              </div>

              <div className="prose prose-invert max-w-none text-gray-300">
                <p className="mb-4">{selectedBlog.excerpt}</p>
                <p>{selectedBlog.content}</p>
              </div>

              <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-700">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-gray-400 hover:text-rose-500 transition-colors">
                    <Heart size={18} />
                    <span>{selectedBlog.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                    <MessageCircle size={18} />
                    <span>{selectedBlog.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors">
                    <Share size={18} />
                    <span>Share</span>
                  </button>
                </div>

                <button
                  className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  onClick={closeBlogModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;