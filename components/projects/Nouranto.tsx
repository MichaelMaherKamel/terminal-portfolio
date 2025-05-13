import React from 'react';
import { ExternalLink, Code, Database, Layers, Paintbrush } from 'lucide-react';

export const NourantoProjectDetails = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold text-blue-400">Nouranto: Company Portfolio</h2>
        <div className="flex space-x-2">
          <a 
            href="https://nouranto.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-emerald-900 hover:bg-emerald-800 text-emerald-100 rounded-md text-sm flex items-center transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-1.5" />
            Visit Site
          </a>
        </div>
      </div>
      
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-emerald-500 mb-3">Overview</h3>
        <p className="text-gray-300 mb-4">
          Nouranto is a modern company portfolio website built with Next.js 15 and showcasing cutting-edge web design principles. 
          The site features custom animations, a clean aesthetic, and efficient data management with Turso SQLite database. 
          The project serves as a digital showcase for the company's services, team, and portfolio.
        </p>
        
        <h3 className="text-lg font-semibold text-emerald-500 mb-2 mt-6">Key Features</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li><span className="font-semibold">Custom Animations</span> - Smooth transitions and interactive elements enhancing user experience</li>
          <li><span className="font-semibold">Responsive Design</span> - Fully adaptive layout across all device sizes</li>
          <li><span className="font-semibold">Portfolio Showcase</span> - Interactive gallery of company projects and case studies</li>
          <li><span className="font-semibold">Team Profiles</span> - Professional presentation of team members and expertise</li>
          <li><span className="font-semibold">Service Listings</span> - Detailed descriptions of company offerings and capabilities</li>
          <li><span className="font-semibold">Contact Form</span> - Interactive form with validation and database storage</li>
          <li><span className="font-semibold">Performance Optimization</span> - Fast loading times with optimized assets</li>
          <li><span className="font-semibold">Dark/Light Mode</span> - Theme switching functionality for user preference</li>
        </ul>
      </div>
      
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-emerald-500 mb-3">Technology Stack</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center">
              <Code className="w-5 h-5 text-blue-400 mr-2" />
              <h4 className="text-blue-300 font-medium">Frontend</h4>
            </div>
            <ul className="list-disc pl-7 text-gray-300 space-y-1">
              <li>Next.js 15 with App Router</li>
              <li>TypeScript for type safety</li>
              <li>Tailwind CSS for styling</li>
              <li>Framer Motion for animations</li>
              <li>React Intersection Observer for scroll effects</li>
              <li>Responsive images with Next.js Image optimization</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <Database className="w-5 h-5 text-indigo-400 mr-2" />
              <h4 className="text-indigo-300 font-medium">Backend & Data</h4>
            </div>
            <ul className="list-disc pl-7 text-gray-300 space-y-1">
              <li>Turso SQLite for database</li>
              <li>Drizzle ORM for database queries</li>
              <li>Next.js API routes</li>
              <li>Form validation with Zod</li>
              <li>Serverless functions on Vercel</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-emerald-500 mb-3">Design & Development Highlights</h3>
        <div className="space-y-4">
          <div>
            <div className="flex items-center">
              <Paintbrush className="w-5 h-5 text-rose-400 mr-2" />
              <h4 className="text-rose-300 font-medium">Custom Animation System</h4>
            </div>
            <p className="text-gray-300 mt-1">
              Developed a sophisticated animation system using Framer Motion and React Intersection Observer
              to create smooth, scroll-triggered animations and transitions that enhance the user experience
              without compromising performance.
            </p>
          </div>
          
          <div>
            <div className="flex items-center">
              <Layers className="w-5 h-5 text-amber-400 mr-2" />
              <h4 className="text-amber-300 font-medium">Optimal Database Architecture</h4>
            </div>
            <p className="text-gray-300 mt-1">
              Implemented Turso SQLite as a lightweight, high-performance database solution paired with Drizzle ORM
              for type-safe database operations. This combination provided excellent performance for a content-focused
              site while maintaining data integrity and type safety throughout the application.
            </p>
          </div>
          
          <div>
            <h4 className="text-blue-300 font-medium">Responsive Design Strategy</h4>
            <p className="text-gray-300 mt-1">
              Utilized a mobile-first design approach with Tailwind CSS to create a seamlessly responsive experience
              across all device sizes. Implemented custom breakpoints and container queries for complex layout 
              components that adapt intelligently to available space rather than just viewport dimensions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};