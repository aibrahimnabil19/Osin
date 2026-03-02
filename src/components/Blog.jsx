import Image from 'next/image';
import React from 'react';

// 1. Extract data to keep the component clean and manageable
const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development",
    excerpt: "Explore the emerging trends in frontend frameworks and how serverless architecture is changing the game.",
    category: "Technology",
    date: "Oct 24, 2023",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    excerpt: "Utility-first CSS can be daunting at first. Here are 10 tips to help you build beautiful interfaces faster.",
    category: "Design",
    date: "Nov 02, 2023",
    imageUrl: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Building Accessible React Apps",
    excerpt: "Accessibility shouldn't be an afterthought. Learn how to implement ARIA roles and keyboard navigation easily.",
    category: "Development",
    date: "Nov 15, 2023",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  }
];

const Blog = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Our Latest <span className="text-indigo-600">Insights</span>
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          Discover tips, trends, and stories from our team of developers and designers.
        </p>
      </div>

      {/* Blog Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={500}
                  height={500}
                >
                </Image>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-indigo-600 backdrop-blur-sm shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-sm text-gray-500 mb-2">
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Footer / Read More Link */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Read Article
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blog;