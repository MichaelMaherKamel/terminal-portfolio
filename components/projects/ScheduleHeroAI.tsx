import React from 'react';
import { ExternalLink, Code, Database, CalendarRange, Webhook, PhoneCall } from 'lucide-react';

export const ScheduleHeroAIProjectDetails = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold text-blue-400">ScheduleHeroAI: Voice AI Scheduling SaaS</h2>
        <div className="flex space-x-2">
          <a 
            href="https://scheduleheroai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-emerald-900 hover:bg-emerald-800 text-emerald-100 rounded-md text-sm flex items-center transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-1.5" />
            scheduleheroai.com
          </a>
        </div>
      </div>
      
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-emerald-500 mb-3">Overview</h3>
        <p className="text-gray-300 mb-4">
          Lead developer for a voice AI scheduling platform. Built a React frontend and Supabase Edge Functions backend;
          integrated multiple calendar providers and implemented robust webhook handling and automated scheduling logic.
        </p>
        
        <h3 className="text-lg font-semibold text-emerald-500 mb-2 mt-6">Key Features</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>Multi-calendar integrations: Outlook, Google Calendar, GoHighLevel, Calendly, Acuity, Square</li>
          <li>Webhook ingestion and processing for event updates</li>
          <li>Automated availability resolution and conflict handling</li>
          <li>Secure user auth and organization workspaces</li>
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
              <li>React</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>shadcn/ui components</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <Database className="w-5 h-5 text-indigo-400 mr-2" />
              <h4 className="text-indigo-300 font-medium">Backend & Data</h4>
            </div>
            <ul className="list-disc pl-7 text-gray-300 space-y-1">
              <li>Supabase Edge Functions</li>
              <li>PostgreSQL (Supabase)</li>
              <li>Provider webhooks & OAuth flows</li>
              <li>Background jobs for scheduling logic</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-emerald-500 mb-3">Highlights</h3>
        <div className="space-y-4">
          <div>
            <div className="flex items-center">
              <CalendarRange className="w-5 h-5 text-amber-400 mr-2" />
              <h4 className="text-amber-300 font-medium">Calendar Orchestration</h4>
            </div>
            <p className="text-gray-300 mt-1">
              Implemented availability merging across providers and automatic conflict resolution, ensuring reliable bookings.
            </p>
          </div>

          <div>
            <div className="flex items-center">
              <Webhook className="w-5 h-5 text-purple-400 mr-2" />
              <h4 className="text-purple-300 font-medium">Webhook Reliability</h4>
            </div>
            <p className="text-gray-300 mt-1">
              Built idempotent webhook handlers with retries and dead-letter patterns to handle provider outages safely.
            </p>
          </div>

          <div>
            <div className="flex items-center">
              <PhoneCall className="w-5 h-5 text-emerald-400 mr-2" />
              <h4 className="text-emerald-300 font-medium">Voice AI Flow</h4>
            </div>
            <p className="text-gray-300 mt-1">
              Integrated the voice assistant flow with scheduling events to complete bookings end‑to‑end.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


