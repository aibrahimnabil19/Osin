import Image from 'next/image';
import React from 'react';

const blogPosts = [
    {
        id: 1,
        title: "Preparing Your Home for a New Pet",
        description: "Practical checklist and tips to make your home safe and welcoming for a new dog, cat, or small pet — from supplies to first-week routines.",
        category: "Care",
        date: "Feb 10, 2026",
        imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        title: "How to Choose the Right Breed for Your Lifestyle",
        description: "Match energy levels, grooming needs, and living situation to the right pet — a friendly guide to picking a companion who fits your life.",
        category: "Guide",
        date: "Jan 28, 2026",
        imageUrl: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        title: "Success Story: Bella’s Second Chance",
        description: "Read how Bella, a rescued labrador, found a loving home and the small changes her adopters made to help her settle in — inspiration for future adopters.",
        category: "Story",
        date: "Feb 20, 2026",
        imageUrl: "https://images.unsplash.com/photo-1507149833265-60c372daea22?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
];

const Blog = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Our Latest <span className="text-[#E0C1C5]">Insights</span>
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          Discover tips, trends, and stories from our team of developers and designers.
        </p>
      </div>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
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
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-[#E0C1C5] backdrop-blur-sm shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col grow">
                <div className="text-sm text-gray-500 mb-2">
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E0C1C5] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6 grow line-clamp-3">
                  {post.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-sm font-semibold text-[#E0C1C5] hover:text-[#C2A8B0]"
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