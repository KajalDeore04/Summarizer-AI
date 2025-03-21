"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

interface ContentItem {
  icon?: string;
  label: string;
}

interface PageData {
  title: string;
  content: ContentItem[];
}

const DemoSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  
  const pages: PageData[] = [ 
    {
      title: "Document Details",
      content: [
        { icon: "📑", label: "Type: Technical Course" },
        { icon: "👥", label: "For: Web Developers & React Engineers" }
      ]
    },
    {
      title: "Key Highlights",
      content: [
        { icon: "🚀", label: "Complete guide to Next.js 15's App Router" },
        { icon: "⭐", label: "Server Components & Server Actions deep dive" },
        { icon: "💫", label: "Full-stack application development with Next.js" }
      ]
    },
    {
      title: "Why It Matters",
      content: [
        { icon: "💡", label: "Next.js is becoming the industry standard for React applications, offering superior performance, SEO, and developer experience." },
        { label: "This course provides the essential knowledge needed to build modern web applications." }
      ]
    },
    {
      title: "Main Points",
      content: [
        { icon: "🎨", label: "Modern application architecture with App Router" },
        { icon: "💻", label: "Server and Client Components best practices" },
        { icon: "🔄", label: "Data fetching patterns and caching strategies" },
        { icon: "🛠", label: "Authentication and API route implementation" },
        { icon: "📱", label: "Responsive design and component libraries" }
      ]
    },
    {
      title: "Pro Tips",
      content: [
        { icon: "⭐", label: "Always consider server components as your default choice" },
        { icon: "💎", label: "Implement route groups for better code organization" },
        { icon: "🌟", label: "Use loading.tsx and error.tsx for better UX" }
      ]
    },
    {
      title: "Key Terms to Know",
      content: [
        { icon: "📚", label: "Server Components: React components that render on the server for better performance" },
        { icon: "🔍", label: "Route Groups: Next.js feature for organizing routes without affecting URL structure" },
        { icon: "🎯", label: "Streaming: Technique for progressively rendering UI components" },
        { icon: "🔄", label: "Suspense: React feature for handling loading states" }
      ]
    },
    {
      title: "Bottom Line",
      content: [
        { icon: "💫", label: "Master Next.js 15 to build fast, scalable, and SEO-friendly web applications with the latest React features and best practices." }
      ]
    },
    {
      title: "Final Thoughts",
      content: [
        { icon: "🔥", label: "This course transforms developers into Next.js experts, enabling them to build production-ready applications with confidence and efficiency." }
      ]
    }
  ];


  const handlePrevPage = (): void => {
    setCurrentPage(prev => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextPage = (): void => {
    setCurrentPage(prev => (prev < pages.length - 1 ? prev + 1 : prev));
  };

  return (
    <section className="h-screen w-full relative mt-20">
      <div className="h-full w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-br from-emerald-500 via-teal-500 cyan-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.l% 64.9%, 17.9 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="flex flex-col items-center text-center space-y-4 w-full max-w-5xl">
          <div className="inline-flex items-center justify-center p-2 bg-gray-100/80 rounded-2xl backdrop-blur-xs border border-gray-500/20 mb-4">
            <BookOpen className="w-6 h-6 text-rose-500" />
          </div>

          <div className="text-center mb-3">
            <h3 className="font-bold text-3xl max-w-2xl mx-auto px-4 sm:px-4">
              Watch how Summarizer AI transforms{" "}
              <span className="bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
                this Next.js course PDF
              </span>{" "}
              into an easy-to-read summary!
            </h3>
          </div>

          {/* Summary viewer with full screen height */}
          <div className="w-full max-w-xl bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col h-[calc(95vh)] z-10 mt-10 mb-10">
            {/* Progress bar */}
            <div className="flex items-center justify-center px-4 pt-4">
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500  rounded-full transition-all duration-300 ease-in-out"
                  style={{ width: `${((currentPage + 1) / pages.length) * 100}%` }}
                ></div>
              </div>
            </div>
            
          
            
            {/* Content without scrollbar */}
            <div className="p-6 flex-grow">
              <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                {pages[currentPage].title}
              </h2>
              
              <div className="space-y-4 text-xl">
                {pages[currentPage].content.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-100"
                  >
                    {item.icon && (
                      <span className="text-xl mr-3 mt-0.5">{item.icon}</span>
                    )}
                    <span className="text-gray-700 text-start">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-between p-4 border-t border-gray-100 mt-auto">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className={`flex items-center justify-center p-2 rounded-full ${
                  currentPage === 0
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-rose-500 hover:bg-rose-50"
                }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
                {/* Navigation dots */}
            <div className="flex justify-center space-x-2 py-2 flex-wrap px-4">
              {pages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 my-1 ${
                    currentPage === index ? "bg-rose-500 w-4" : "bg-gray-300"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
              
              <button
                onClick={handleNextPage}
                disabled={currentPage === pages.length - 1}
                className={`flex items-center justify-center p-2 rounded-full ${
                  currentPage === pages.length - 1
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-rose-500 hover:bg-rose-50"
                }`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;