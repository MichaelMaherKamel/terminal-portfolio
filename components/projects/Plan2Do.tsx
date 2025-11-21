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
          PLAN2DO is an AI-powered SaaS platform designed for developers and professionals to create, manage, and execute
          comprehensive plans and tasks using natural language. The platform intelligently breaks down goals into actionable
          tasks with smart prioritization and scheduling, integrating with essential developer tools.
        </p>

        <h3 className="text-lg font-semibold text-emerald-500 mb-2 mt-6">Key Features</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li><span className="font-semibold">AI Planning Engine</span> - Gemini API for free tier, premium LLM providers for subscriptions</li>
          <li><span className="font-semibold">Developer Integrations</span> - GitHub for issue creation, ClickUp for tasks, Notion for docs</li>
          <li><span className="font-semibold">Intelligent Task Breakdown</span> - Automatically converts goals into actionable task lists</li>
          <li><span className="font-semibold">Smart Prioritization</span> - AI-powered task ranking and scheduling recommendations</li>
          <li><span className="font-semibold">Google Calendar Sync</span> - Bidirectional synchronization (in development)</li>
          <li><span className="font-semibold">Subscription Tiers</span> - Stripe integration for premium features and advanced LLMs</li>
          <li><span className="font-semibold">Natural Language Input</span> - Create comprehensive plans using conversational language</li>
          <li><span className="font-semibold">Cross-Device Access</span> - Synchronize plans across all devices</li>
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
              <li>Svelte</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Responsive UI components</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Database className="w-5 h-5 text-indigo-400 mr-2" />
              <h4 className="text-indigo-300 font-medium">Backend & Data</h4>
            </div>
            <ul className="list-disc pl-7 text-gray-300 space-y-1">
              <li>FastAPI (Python)</li>
              <li>PostgreSQL database</li>
              <li>Gemini API (free tier)</li>
              <li>Premium LLM providers (subscriptions)</li>
              <li>Stripe for subscriptions</li>
              <li>GitHub API integration</li>
              <li>ClickUp API integration</li>
              <li>Notion API integration</li>
              <li>Google Calendar API (in dev)</li>
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
              <h4 className="text-amber-300 font-medium">AI Planning Engine with Tiered LLMs</h4>
            </div>
            <p className="text-gray-300 mt-1">
              Developing a sophisticated AI planning engine leveraging Gemini API for free tier users and integrating premium LLM
              providers for subscription tiers. The system analyzes user goals and automatically breaks them down into actionable
              tasks with intelligent prioritization and scheduling recommendations based on project context and dependencies.
            </p>
          </div>

          <div>
            <div className="flex items-center">
              <Code className="w-5 h-5 text-blue-400 mr-2" />
              <h4 className="text-blue-300 font-medium">Developer-Focused Integrations</h4>
            </div>
            <p className="text-gray-300 mt-1">
              Implementing seamless integrations with GitHub for automated issue creation and project management, ClickUp for
              task synchronization across teams, and Notion for documentation planning. These integrations enable developers
              to manage their entire workflow from a single intelligent planning interface.
            </p>
          </div>

          <div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-emerald-400 mr-2" />
              <h4 className="text-emerald-300 font-medium">Calendar System (In Development)</h4>
            </div>
            <p className="text-gray-300 mt-1">
              Architecting a bidirectional synchronization system with Google Calendar for seamless event management.
              The system will handle recurring events, notifications, and conflict resolution, ensuring plans sync across
              all platforms in real-time.
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
              <div>Core application framework with Svelte frontend and FastAPI backend</div>
            </div>

            <div className="flex items-start">
              <div className="w-24 flex-shrink-0 font-medium text-emerald-400">Phase 2</div>
              <div>AI planning engine with Gemini API and tiered LLM provider integration</div>
            </div>

            <div className="flex items-start">
              <div className="w-24 flex-shrink-0 font-medium text-emerald-400">Phase 3</div>
              <div>Developer integrations: GitHub, ClickUp, and Notion APIs</div>
            </div>

            <div className="flex items-start">
              <div className="w-24 flex-shrink-0 font-medium text-emerald-400">Phase 4</div>
              <div>Stripe subscription management and premium features rollout</div>
            </div>

            <div className="flex items-start">
              <div className="w-24 flex-shrink-0 font-medium text-emerald-400">Phase 5</div>
              <div>Google Calendar synchronization and collaborative planning features</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};