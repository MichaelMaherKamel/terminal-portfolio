import React from 'react';
import { ExternalLink, Code, Database, CalendarRange, Webhook, PhoneCall, CreditCard, Bot, LayoutDashboard } from 'lucide-react';

export const CMGProjectDetails = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold text-blue-400">CMG: Agentic SaaS Platform</h2>
        <div className="flex space-x-2">
          <a
            href="https://agenticdeploy.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-emerald-900 hover:bg-emerald-800 text-emerald-100 rounded-md text-sm flex items-center transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-1.5" />
            agenticdeploy.ai
          </a>
        </div>
      </div>

      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-emerald-500 mb-3">Overview</h3>
        <p className="text-gray-300 mb-4">
          An interconnected suite of agentic micro-SaaS tools encompassing scheduling AI, agency operations,
          ad management, and webinar analytics. Built as a unified platform where users can type in and use
          web-based tools through an agentic deployment system.
        </p>

        <h3 className="text-lg font-semibold text-emerald-500 mb-2 mt-6">Platform Products</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li><span className="text-blue-300 font-medium">Schedule Hero AI</span> — Voice AI scheduling SaaS with multi-calendar integrations (Outlook, Google Calendar, Calendly, Square) and Stripe Connect payouts</li>
          <li><span className="text-blue-300 font-medium">Agentic Deploy</span> — Omni-channel AI assistant deployable across WhatsApp, Telegram, Slack, Discord, and web with voice capabilities</li>
          <li><span className="text-blue-300 font-medium">Agency-OS</span> — Full-stack agency management platform with client tracking, performance metrics, and automated reporting</li>
          <li><span className="text-blue-300 font-medium">Meta Ads Manager</span> — Ad campaign management and analytics tool</li>
          <li><span className="text-blue-300 font-medium">Webinar Profit Score</span> — Webinar performance analytics and scoring</li>
        </ul>

        <h3 className="text-lg font-semibold text-emerald-500 mb-2 mt-6">Key Features</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>Multi-tenant infrastructure with RBAC, white-label support, and partner reselling</li>
          <li>Automated payouts via Stripe Connect for partner revenue sharing</li>
          <li>Webhook ingestion and processing for event updates across services</li>
          <li>Omni-channel messaging across WhatsApp, Telegram, Slack, Discord, and web</li>
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
              <li>React 19</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>shadcn/ui components</li>
              <li>TanStack Query</li>
              <li>Recharts</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Database className="w-5 h-5 text-indigo-400 mr-2" />
              <h4 className="text-indigo-300 font-medium">Backend & Data</h4>
            </div>
            <ul className="list-disc pl-7 text-gray-300 space-y-1">
              <li>Express.js + TypeScript</li>
              <li>Supabase Edge Functions</li>
              <li>PostgreSQL (Supabase)</li>
              <li>Drizzle ORM</li>
              <li>Stripe Connect</li>
              <li>Provider webhooks & OAuth flows</li>
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
              <h4 className="text-amber-300 font-medium">Schedule Hero AI — Calendar Orchestration</h4>
            </div>
            <p className="text-gray-300 mt-1">
              Implemented availability merging across providers and automatic conflict resolution, ensuring reliable bookings
              with voice AI assistant integration for end-to-end scheduling.
            </p>
          </div>

          <div>
            <div className="flex items-center">
              <Bot className="w-5 h-5 text-purple-400 mr-2" />
              <h4 className="text-purple-300 font-medium">Agentic Deploy — Omni-Channel AI</h4>
            </div>
            <p className="text-gray-300 mt-1">
              Personal AI assistant deployable across WhatsApp, Telegram, Slack, Discord, Signal, iMessage, and web.
              Supports voice capabilities on macOS/iOS/Android with a live Canvas for real-time interaction.
            </p>
          </div>

          <div>
            <div className="flex items-center">
              <LayoutDashboard className="w-5 h-5 text-emerald-400 mr-2" />
              <h4 className="text-emerald-300 font-medium">Agency-OS — Operations Management</h4>
            </div>
            <p className="text-gray-300 mt-1">
              Full-stack agency management with client tracking, performance metrics dashboards, task and objective management,
              and automated client-facing weekly reports.
            </p>
          </div>

          <div>
            <div className="flex items-center">
              <CreditCard className="w-5 h-5 text-cyan-400 mr-2" />
              <h4 className="text-cyan-300 font-medium">Stripe Connect — Partner Infrastructure</h4>
            </div>
            <p className="text-gray-300 mt-1">
              Architected Stripe Connect integration supporting multiple payment models. White-labeled partners receive
              direct payments with custom pricing control, while co-branded partners utilize split payment flows with
              commission-based revenue sharing and automated payouts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
