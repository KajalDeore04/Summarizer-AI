import React from "react";
import { Heart,Linkedin,  Github, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-slate-900 to-rose-500 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-4 md:grid-cols-4 gap-8">
          {/* Brand and tagline */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold">Summarizer AI</h3>
            <p className="text-gray-200">Transform PDFs into summaries with AI. 
              
            </p>
           
          </div>

          {/* Quick links */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="hover:text-rose-200 transition-colors duration-200">
                Home
              </Link>
              <Link href="/upload" className="hover:text-rose-200 transition-colors duration-200">
                Upload PDF
              </Link>
              <Link href="/about" className="hover:text-rose-200 transition-colors duration-200">
                About
              </Link>
              <Link href="/pricing" className="hover:text-rose-200 transition-colors duration-200">
                Pricing
              </Link>
            </nav>
          </div>
          {/* Tools used */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-semibold">Tools</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="hover:text-rose-200 transition-colors duration-200">
                Clerk
              </Link>
              <Link href="/upload" className="hover:text-rose-200 transition-colors duration-200">
                UploadThing
              </Link>
              <Link href="/about" className="hover:text-rose-200 transition-colors duration-200">
                Gemini
              </Link>
              <Link href="/pricing" className="hover:text-rose-200 transition-colors duration-200">
                NextJS
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-semibold">Connect With Me</h4>
            <div className="flex space-x-4">
              
              <a href="https://github.com/KajalDeore04" target="_blank" rel="noopener noreferrer"
                className="hover:text-rose-200 transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/kajal-deore/" target="_blank" rel="noopener noreferrer"
                className="hover:text-rose-200 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="mailto:kajaldeore04@gmail.com"
                className="hover:text-rose-200 transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent my-6"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-4">
          <p className="text-sm text-gray-200">
            &copy; {new Date().getFullYear()} Summarizer AI. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <p className="text-sm text-gray-200 flex items-center">
              Made with <Heart size={16} className="mx-1 text-rose-300" /> by Kajal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}