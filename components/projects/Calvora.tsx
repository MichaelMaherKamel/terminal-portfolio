import React from 'react';
import { ExternalLink, Code, Mic, PhoneCall, CalendarRange, Megaphone, LayoutDashboard } from 'lucide-react';

export const CalvoraProjectDetails = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold text-blue-400">Calvora AI: Voice Agent Platform</h2>
        <div className="flex space-x-2">
          <a
            href="https://calvora.macrotech.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-emerald-900 hover:bg-emerald-800 text-emerald-100 rounded-md text-sm flex items-center transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-1.5" />
            calvora.macrotech.dev
          </a>
        </div>
      </div>

      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-emerald-500 mb-3">Overview</h3>
        <p className="text-gray-300 mb-4">
          A full-stack AI voice agent platform that puts AI agents on the phone for real businesses.
          Agents answer inbound calls to book appointments straight into Google Calendar, or run outbound
          sales campaigns that qualify leads and follow up — holding natural, fluent conversations in the
          customer&apos;s own language, with live transcripts and analytics in a real-time dashboard.
        </p>

        <h3 className="text-lg font-semibold text-emerald-500 mb-2 mt-6">Agent Types</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li><span className="text-blue-300 font-medium">Booking Assistants</span> — Inbound agents that check live availability and book, reschedule, or cancel appointments in Google Calendar, respecting timezone and working hours</li>
          <li><span className="text-blue-300 font-medium">Sales Calling Agents</span> — Outbound agents that work through lead lists in campaigns, qualify prospects with custom scripts, and follow up automatically</li>
        </ul>

        <h3 className="text-lg font-semibold text-emerald-500 mb-2 mt-6">Key Features</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>Real-time, sub-second, interruptible voice conversations with natural ElevenLabs speech</li>
          <li>Timezone- and working-hours-aware Google Calendar booking with live availability checks</li>
          <li>Outbound campaigns with contact/lead management and bulk CSV import</li>
          <li>Live call transcripts, summaries, sentiment, and a KPI analytics dashboard</li>
          <li>Natural multilingual conversation with native-sounding dialects</li>
          <li>Role-based auth and a guided onboarding wizard that auto-writes the agent&apos;s system prompt</li>
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
              <li>Next.js 16 (App Router)</li>
              <li>React 19 + TypeScript</li>
              <li>Tailwind CSS v4</li>
              <li>shadcn/ui components</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Mic className="w-5 h-5 text-indigo-400 mr-2" />
              <h4 className="text-indigo-300 font-medium">Voice &amp; Integrations</h4>
            </div>
            <ul className="list-disc pl-7 text-gray-300 space-y-1">
              <li>Bun WebSocket voice pipeline</li>
              <li>ElevenLabs API (voice generation)</li>
              <li>Twilio Media Streams (telephony)</li>
              <li>Google Calendar OAuth</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-emerald-500 mb-3">Highlights</h3>
        <div className="space-y-4">
          <div>
            <div className="flex items-center">
              <PhoneCall className="w-5 h-5 text-purple-400 mr-2" />
              <h4 className="text-purple-300 font-medium">Real-Time Voice Pipeline</h4>
            </div>
            <p className="text-gray-300 mt-1">
              A dedicated Bun WebSocket service streams call audio in real time and generates natural speech with
              ElevenLabs over a single connection — keeping latency low enough for natural, interruptible phone
              conversations.
            </p>
          </div>

          <div>
            <div className="flex items-center">
              <CalendarRange className="w-5 h-5 text-amber-400 mr-2" />
              <h4 className="text-amber-300 font-medium">Calendar-Aware Booking</h4>
            </div>
            <p className="text-gray-300 mt-1">
              Tool endpoints check availability, enforce working hours across timezones, and create, reschedule, or
              cancel Google Calendar events live during the call.
            </p>
          </div>

          <div>
            <div className="flex items-center">
              <Megaphone className="w-5 h-5 text-cyan-400 mr-2" />
              <h4 className="text-cyan-300 font-medium">Outbound Sales Campaigns</h4>
            </div>
            <p className="text-gray-300 mt-1">
              Contacts and lead lists feed campaigns that trigger outbound calls, track per-contact attempts and
              outcomes, and surface progress and qualification in the dashboard.
            </p>
          </div>

          <div>
            <div className="flex items-center">
              <LayoutDashboard className="w-5 h-5 text-emerald-400 mr-2" />
              <h4 className="text-emerald-300 font-medium">Analytics Dashboard</h4>
            </div>
            <p className="text-gray-300 mt-1">
              Every call is captured with transcript, summary, duration, and sentiment, aggregated into KPIs and
              charts so businesses can see exactly what their agents are doing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
