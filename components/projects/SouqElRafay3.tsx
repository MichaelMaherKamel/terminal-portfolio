import React from 'react';
import { ExternalLink, Code, Database, ShoppingCart, Users } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

export const SouqElRafay3ProjectDetails = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold text-blue-400">SouqElRafay3: E-Commerce for Household Items</h2>
        <div className="flex space-x-2">
          <a 
            href="https://souqelrafay3.com"
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
          SouqElRafay3 is a comprehensive e-commerce platform specializing in household items. Built with SolidJS 
          for optimal performance, this platform offers a seamless shopping experience for customers while providing 
          powerful management tools for sellers and administrators.
        </p>
        
        <h3 className="text-lg font-semibold text-emerald-500 mb-2 mt-6">Key Features</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li><span className="font-semibold">Shopping Cart System</span> - Fully functional cart with persistent storage and checkout process</li>
          <li><span className="font-semibold">Inventory Management</span> - Real-time stock tracking and automated low-stock alerts</li>
          <li><span className="font-semibold">Payment Integration</span> - Secure checkout with Fawry payment gateway integration</li>
          <li><span className="font-semibold">Admin Dashboard</span> - Comprehensive control panel for monitoring sales, inventory, and user activity</li>
          <li><span className="font-semibold">Seller Portal</span> - Dedicated interface for vendors to list and manage their products</li>
          <li><span className="font-semibold">RBAC System</span> - Role-based access control with different permission levels</li>
          <li><span className="font-semibold">Analytics Integration</span> - Google Analytics implementation for tracking user behavior and sales metrics</li>
          <li><span className="font-semibold">Responsive Design</span> - Optimized for all device sizes with mobile-first approach</li>
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
              <li>SolidJS for reactive UI components</li>
              <li>SolidStart for application framework</li>
              <li>TypeScript for type safety</li>
              <li>Tailwind CSS for styling</li>
              <li>SolidHooks for state management</li>
              <li>Responsive design principles</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <Database className="w-5 h-5 text-indigo-400 mr-2" />
              <h4 className="text-indigo-300 font-medium">Backend & Data</h4>
            </div>
            <ul className="list-disc pl-7 text-gray-300 space-y-1">
              <li>Supabase for PostgreSQL database</li>
              <li>Supabase Auth for authentication</li>
              <li>RESTful API endpoints</li>
              <li>Fawry payment gateway integration</li>
              <li>Google Analytics for user behavior tracking</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-emerald-500 mb-3">Implementation Highlights</h3>
        <div className="space-y-4">
          <div>
            <div className="flex items-center">
              <ShoppingCart className="w-5 h-5 text-orange-400 mr-2" />
              <h4 className="text-orange-300 font-medium">Cart & Inventory System</h4>
            </div>
            <p className="text-gray-300 mt-1">
              Implemented a sophisticated cart system that synchronizes across devices and maintains state between sessions.
              The inventory management system updates in real-time, preventing overselling and providing automatic notifications
              for low stock items.
            </p>
          </div>
          
          <div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-purple-400 mr-2" />
              <h4 className="text-purple-300 font-medium">Multi-Vendor Architecture</h4>
            </div>
            <p className="text-gray-300 mt-1">
              Designed and implemented a multi-vendor infrastructure that allows independent sellers to manage their own
              inventory, process orders, and track performance through dedicated dashboards, while maintaining a cohesive
              shopping experience for end users.
            </p>
          </div>
          
          <div>
            <h4 className="text-blue-300 font-medium">Performance Optimization</h4>
            <p className="text-gray-300 mt-1">
              Leveraged SolidJS's fine-grained reactivity model to build a highly responsive interface with minimal
              re-renders. Implemented efficient data fetching strategies and lazy loading techniques to ensure fast
              page loads even when browsing large product catalogs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};