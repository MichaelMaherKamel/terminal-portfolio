import React from 'react';
import { ExternalLink, Code, Database, Calendar, MessagesSquare, Sparkles } from 'lucide-react';

export const Plan2DoProjectDetails = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-blue-400">PLAN2DO: Personal AI Planner</h2>
        <div className="flex space-x-4 whitespace-nowrap justify-between">
          <span 
            className="px-2 py-1.5 bg-emerald-900/70 text-emerald-100 rounded-md text-xs sm:text-sm flex items-center border border-emerald-700/50"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            In Development
          </span>
          <a 
            href="https://plan2do.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1.5 bg-emerald-900 hover:bg-emerald-800 text-emerald-100 rounded-md text-xs sm:text-sm flex items-center transition-colors"
          >
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            Visit Site
          </a>
        </div>
      </div>
      
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-emerald-500 mb-3">Overview</h3>
        <p className="text-gray-300 mb-4">
          PLAN2DO is an innovative SaaS application powered by AI to help users create, manage, and execute plans and tasks. 
          This intelligent planning assistant seamlessly integrates with Google Calendar, and messaging platforms like 
          WhatsApp and Telegram to provide a comprehensive personal planning solution.
        </p>
        
        <h3 className="text-lg font-semibold text-emerald-500 mb-2 mt-6">Key Features</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li><span className="font-semibold">AI-Powered Planning</span> - Intelligent assistance in creating optimized schedules and task lists</li>
          <li><span className="font-semibold">Calendar Integration</span> - Seamless syncing with Google Calendar</li>
          <li><span className="font-semibold">Messaging Platform Integration</span> - Connect with WhatsApp and Telegram for notifications and updates</li>
          <li><span className="font-semibold">Smart Task Management</span> - Prioritization, categorization, and intelligent scheduling of tasks</li>
          <li><span className="font-semibold">Subscription Management</span> - Stripe integration for handling premium subscriptions</li>
          <li><span className="font-semibold">Natural Language Processing</span> - Create tasks and events using conversational language</li>
          <li><span className="font-semibold">Personalized Recommendations</span> - AI adapts to user habits and preferences over time</li>
          <li><span className="font-semibold">Cross-Device Synchronization</span> - Access plans from any device with real-time updates</li>
          <li><span className="font-semibold">Collaborative Planning</span> - Share and collaborate on plans with team members or family</li>
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
              <li>React 19</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>shadcn/ui components</li>
              <li>React Hook Form with Zod validation</li>
              <li>TanStack Query for data fetching</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <Database className="w-5 h-5 text-indigo-400 mr-2" />
              <h4 className="text-indigo-300 font-medium">Backend & Data</h4>
            </div>
            <ul className="list-disc pl-7 text-gray-300 space-y-1">
              <li>Supabase PostgreSQL</li>
              <li>Drizzle ORM</li>
              <li>Auth.js (NextAuth) for authentication</li>
              <li>Stripe for subscription management</li>
              <li>Gemini API for AI planning capabilities</li>
              <li>Google Calendar API</li>
              <li>WhatsApp Business API</li>
              <li>Telegram Bot API</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-emerald-500 mb-3">Implementation Highlights</h3>
        <div className="space-y-4">
          <div>
            <div className="flex items-center">
              <Sparkles className="w-5 h-5 text-amber-400 mr-2" />
              <h4 className="text-amber-300 font-medium">AI Planning Engine</h4>
            </div>
            <p className="text-gray-300 mt-1">
              The core of PLAN2DO is a sophisticated AI planning engine built on the OpenAI API. This system analyzes user preferences, 
              past behaviors, and schedule constraints to generate optimized plans. The AI continuously learns from user interactions 
              to improve recommendations and planning efficiency over time.
            </p>
          </div>
          
          <div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-emerald-400 mr-2" />
              <h4 className="text-emerald-300 font-medium">Calendar System</h4>
            </div>
            <p className="text-gray-300 mt-1">
              Implemented a bidirectional synchronization system with Google Calendar using their respective API. 
              This allows for seamless integration where changes made in either the native calendar apps or PLAN2DO are instantly 
              reflected across all platforms. The system handles complex recurring events, notifications, and conflict resolution.
            </p>
          </div>
          
          <div>
            <div className="flex items-center">
              <MessagesSquare className="w-5 h-5 text-purple-400 mr-2" />
              <h4 className="text-purple-300 font-medium">Messaging Integration</h4>
            </div>
            <p className="text-gray-300 mt-1">
              Developed a comprehensive messaging integration that allows users to receive notifications, updates, and reminders 
              via WhatsApp or Telegram. The system also supports creating new tasks or modifying existing ones directly through 
              these messaging platforms, providing a conversational interface for planning on the go.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-emerald-500 mb-3">Development Roadmap</h3>
        <div className="space-y-2 text-gray-300">
          <p>The PLAN2DO project is currently in active development with the following milestones:</p>
          
          <div className="mt-3 space-y-3">
            <div className="flex items-start">
              <div className="w-24 flex-shrink-0 font-medium text-emerald-400">Phase 1</div>
              <div>Core application framework and UI/UX implementation</div>
            </div>
            
            <div className="flex items-start">
              <div className="w-24 flex-shrink-0 font-medium text-emerald-400">Phase 2</div>
              <div>AI planning engine integration and Google Calendar synchronization</div>
            </div>
            
            <div className="flex items-start">
              <div className="w-24 flex-shrink-0 font-medium text-emerald-400">Phase 3</div>
              <div>WhatsApp and Telegram integration with conversation-based task creation</div>
            </div>
            
            <div className="flex items-start">
              <div className="w-24 flex-shrink-0 font-medium text-emerald-400">Phase 4</div>
              <div>Subscription management and premium features implementation</div>
            </div>
            
            <div className="flex items-start">
              <div className="w-24 flex-shrink-0 font-medium text-emerald-400">Phase 5</div>
              <div>Google Calendar integration and collaborative planning features</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};