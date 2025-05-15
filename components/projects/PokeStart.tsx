import React from 'react';
import { ExternalLink, Code, Database, Server, Bolt, Dock } from 'lucide-react';

export const PokeStartProjectDetails = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-blue-400">PokeStart: SolidStart + Go Demo</h2>
        <div className="flex space-x-4 whitespace-nowrap justify-between">
          <a 
            href="https://pokestart.macrotech.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1.5 bg-emerald-900 hover:bg-emerald-800 text-emerald-100 rounded-md text-xs sm:text-sm flex items-center transition-colors"
          >
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            Visit Frontend
          </a>
          <a 
            href="https://pockemeonserver.macrotech.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1.5 bg-blue-900 hover:bg-blue-800 text-blue-100 rounded-md text-xs sm:text-sm flex items-center transition-colors"
          >
            <Server className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            Visit Backend
          </a>
        </div>
      </div>
      
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-emerald-500 mb-3">Overview</h3>
        <p className="text-gray-300 mb-4">
          PokeStart is a demonstration application showcasing the powerful combination of SolidStart (frontend) 
          and Go (backend) for lightning-fast full-stack performance. This demo highlights how these technologies 
          can be integrated to create highly efficient web applications with exceptional speed and responsiveness.
        </p>
        
        <div className="bg-amber-900/30 border border-amber-800/50 rounded px-3 py-2 text-amber-200 text-sm mt-2 mb-4 flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          <div>
            <strong>Note:</strong> The application is hosted on Render's free tier, which spins down after periods of inactivity. 
            Please visit the backend URL first to wake up the server before using the frontend application.
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-emerald-500 mb-2 mt-6">Key Features</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li><span className="font-semibold">SolidStart Frontend</span> - Utilizes SolidStart's fine-grained reactivity for optimized UI rendering</li>
          <li><span className="font-semibold">Go Backend</span> - Implements a high-performance API server using Go</li>
          <li><span className="font-semibold">Docker Integration</span> - Containerized deployment for consistency across environments</li>
          <li><span className="font-semibold">Full-Stack Performance</span> - Demonstrates the speed benefits of this powerful tech combination</li>
          <li><span className="font-semibold">REST API Integration</span> - Clean separation of concerns between frontend and backend</li>
          <li><span className="font-semibold">Responsive Design</span> - Fully adaptive layout optimized for all device sizes</li>
          <li><span className="font-semibold">Deployment Optimization</span> - Configured for efficient cloud deployment</li>
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
              <li>SolidStart (SolidJS framework)</li>
              <li>Tailwind CSS for styling</li>
              <li>Solid's fine-grained reactivity model</li>
              <li>TypeScript for type safety</li>
              <li>Optimized build process</li>
              <li>Client-side state management</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <Server className="w-5 h-5 text-indigo-400 mr-2" />
              <h4 className="text-indigo-300 font-medium">Backend</h4>
            </div>
            <ul className="list-disc pl-7 text-gray-300 space-y-1">
              <li>Go (Golang)</li>
              <li>Gin web framework</li>
              <li>RESTful API architecture</li>
              <li>JSON response handling</li>
              <li>Docker containerization</li>
              <li>Efficient concurrency patterns</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-emerald-500 mb-3">Implementation Highlights</h3>
        <div className="space-y-4">
          <div>
            <div className="flex items-center">
              <Bolt className="w-5 h-5 text-amber-400 mr-2" />
              <h4 className="text-amber-300 font-medium">Performance Optimization</h4>
            </div>
            <p className="text-gray-300 mt-1">
              The application demonstrates exceptional performance through SolidStart's fine-grained reactivity model 
              that minimizes DOM operations, combined with Go's efficient request handling and concurrent processing. 
              This powerful combination delivers a blazing-fast user experience with minimal resource usage.
            </p>
          </div>
          
          <div>
            <div className="flex items-center">
              <Dock className="w-5 h-5 text-blue-400 mr-2" />
              <h4 className="text-blue-300 font-medium">Docker Integration</h4>
            </div>
            <p className="text-gray-300 mt-1">
              Implemented a containerized deployment strategy using Docker to ensure consistent environments 
              across development and production. The Docker configuration optimizes the build process and runtime 
              performance while simplifying deployment workflows on cloud platforms like Render.
            </p>
          </div>
          
          <div>
            <div className="flex items-center">
              <Database className="w-5 h-5 text-emerald-400 mr-2" />
              <h4 className="text-emerald-300 font-medium">Architecture Design</h4>
            </div>
            <p className="text-gray-300 mt-1">
              The application follows a clean separation between frontend and backend, with the SolidStart frontend 
              communicating with the Go backend via RESTful API calls. This architecture enables independent scaling 
              and optimization of each layer while maintaining a cohesive full-stack experience.
            </p>
          </div>
        </div>      
      </div>
    </div>
  );
};