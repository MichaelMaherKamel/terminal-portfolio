import React from 'react';
import { ExternalLink, Code, Database } from 'lucide-react';

export const SaversProjectDetails = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold text-blue-400">Savers: Corporate Portfolio</h2>
        <div className="flex space-x-2">
          <a 
            href="#"
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
          Savers is a corporate portfolio website showcasing products and services for a company specializing in Printers, Safes, and Lockers. 
          This modern web application is built with a robust tech stack including Next.js 15, TypeScript, and Tailwind CSS to deliver 
          a seamless and responsive user experience.
        </p>
        
        <h3 className="text-lg font-semibold text-emerald-500 mb-2 mt-6">🚀 Features</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li><span className="font-semibold">Product Showcase</span> - Comprehensive display of printer models, safes, and locker systems</li>
          <li><span className="font-semibold">Service Information</span> - Detailed descriptions of installation, maintenance, and support services</li>
          <li><span className="font-semibold">Company Profile</span> - Information about Savers' history, mission, and expertise</li>
          <li><span className="font-semibold">Responsive Design</span> - Optimized viewing experience across all device sizes</li>
          <li><span className="font-semibold">Authentication System</span> - Secure user authentication powered by Better-Auth and Supabase</li>
          <li><span className="font-semibold">Database Integration</span> - Robust data management with PostgreSQL and Drizzle ORM</li>
          <li><span className="font-semibold">Admin Dashboard</span> - Powerful admin interface for managing Categories, Products, and Users</li>
          <li><span className="font-semibold">User Management</span> - Complete user administration including password reset, role assignment, and user creation/deletion</li>
        </ul>
      </div>
      
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-emerald-500 mb-3">💻 Tech Stack</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center">
              <Code className="w-5 h-5 text-blue-400 mr-2" />
              <h4 className="text-blue-300 font-medium">Frontend</h4>
            </div>
            <ul className="list-disc pl-7 text-gray-300 space-y-1">
              <li>Next.js 15 with App Router and TurboPack</li>
              <li>TypeScript</li>
              <li>Tailwind CSS with tailwind-merge and tw-animate-css</li>
              <li>shadcn/ui & Radix UI components</li>
              <li>React Hook Form with Zod validation</li>
              <li>Lucide React for icons</li>
              <li>Sonner for toast notifications</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <Database className="w-5 h-5 text-indigo-400 mr-2" />
              <h4 className="text-indigo-300 font-medium">Backend & Data</h4>
            </div>
            <ul className="list-disc pl-7 text-gray-300 space-y-1">
              <li>PostgreSQL with Supabase</li>
              <li>Drizzle ORM</li>
              <li>Better-Auth with Supabase for authentication</li>
              <li>Bun runtime & package manager</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-emerald-500 mb-3">Key Challenges & Solutions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-blue-300 font-medium">Complex Product Catalog Management</h4>
            <p className="text-gray-300 mt-1">
              Implemented a hierarchical category system with filtering capabilities to organize diverse product ranges including printers, 
              safes, and lockers, making it easy for customers to find products and for admins to manage inventory.
            </p>
          </div>
          
          <div>
            <h4 className="text-blue-300 font-medium">Role-Based Access Control</h4>
            <p className="text-gray-300 mt-1">
              Designed and implemented a robust RBAC system with Supabase and Better-Auth, allowing different permission levels 
              for administrators, content managers, and general users.
            </p>
          </div>
          
          <div>
            <h4 className="text-blue-300 font-medium">Performance Optimization</h4>
            <p className="text-gray-300 mt-1">
              Leveraged Next.js 15 features including server components, streaming, and TurboPack for optimal performance. 
              Implemented efficient data loading strategies and image optimization to ensure fast load times even with rich media content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};