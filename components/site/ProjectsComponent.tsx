import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SaversProjectDetails } from '@/components/projects/Savers';
import { SouqElRafay3ProjectDetails } from '@/components/projects/SouqElRafay3';
import { NourantoProjectDetails } from '@/components/projects/Nouranto';
import { Plan2DoProjectDetails } from '@/components/projects/Plan2Do';
import { PokeStartProjectDetails } from '@/components/projects/PokeStart';

// Define a type for project IDs
type ProjectId = 'savers' | 'souqelrafay3' | 'plan2do' | 'nouranto' | 'pokestart' | null;

export const ProjectsComponent = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectId>(null);

  const handleProjectClick = (projectId: ProjectId) => {
    setSelectedProject(projectId);
  };

  const handleBackClick = () => {
    setSelectedProject(null);
  };

  const renderProjectDetails = () => {
    switch (selectedProject) {
      case 'savers':
        return <SaversProjectDetails />;
      case 'souqelrafay3':
        return <SouqElRafay3ProjectDetails />;
      case 'plan2do':
        return <Plan2DoProjectDetails />;
      case 'nouranto':
        return <NourantoProjectDetails />;
      case 'pokestart':
        return <PokeStartProjectDetails />;
      default:
        return null;
    }
  };

  return (
    <ScrollArea className="h-[calc(100svh-150px)] md:h-[calc(100dvh-170px)] lg:h-[calc(100dvh-200px)] w-full">
      <div className="p-6 space-y-6">
        {selectedProject ? (
          <>
            <div className="flex items-center mb-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleBackClick}
                className="px-2 py-1 text-emerald-400 hover:bg-zinc-800 rounded-md flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Projects
              </Button>
            </div>
            {renderProjectDetails()}
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-emerald-600">Projects</h2>
            
            {/* Savers */}
            <div 
              className="border border-zinc-800 rounded-md p-4 bg-zinc-950 hover:bg-zinc-900 cursor-pointer transition-colors"
              onClick={() => handleProjectClick('savers')}
            >
              <h3 className="text-sm md:text-lg font-bold text-blue-400">Savers: Corporate Portfolio</h3>
              <p className="mt-2 text-gray-300">
                Corporate portfolio website for a company specializing in Printers, Safes, and Lockers with admin dashboard and product management.
              </p>
              <div className="mt-3 flex items-center text-xs">
                <span className="text-emerald-400 hover:underline flex items-center">
                  View more details <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="m9 18 6-6-6-6"/></svg>
                </span>
              </div>
            </div>

              {/* PokeStart */}
            <div 
              className="border border-zinc-800 rounded-md p-4 bg-zinc-950 hover:bg-zinc-900 cursor-pointer transition-colors"
              onClick={() => handleProjectClick('pokestart')}
            >
              <h3 className="text-sm md:text-lg font-bold text-blue-400">PokeStart: SolidStart + Go Demo</h3>
              <p className="mt-2 text-gray-300">
                A demonstration app showcasing the powerful combination of SolidStart frontend and Go backend for lightning-fast full-stack performance.
              </p>
              <div className="mt-3 flex items-center text-xs">
                <span className="text-emerald-400 hover:underline flex items-center">
                  View more details <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="m9 18 6-6-6-6"/></svg>
                </span>
              </div>
            </div>
            
            {/* SouqElRafay3 */}
            <div 
              className="border border-zinc-800 rounded-md p-4 bg-zinc-950 hover:bg-zinc-900 cursor-pointer transition-colors"
              onClick={() => handleProjectClick('souqelrafay3')}
            >
              <h3 className="text-sm md:text-lg font-bold text-blue-400">SouqElRafay3: E-Commerce for Household Items</h3>
              <p className="mt-2 text-gray-300">
                SolidJS app with Supabase PostgreSQL, Fawry payments, Cart and Inventory management systems, admin/seller dashboards with RBAC roles.
              </p>
              <div className="mt-3 flex items-center text-xs">
                <span className="text-emerald-400 hover:underline flex items-center">
                  View more details <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="m9 18 6-6-6-6"/></svg>
                </span>
              </div>
            </div>
            
             {/* PLAN2DO */}
             <div 
              className="border border-zinc-800 rounded-md p-4 bg-zinc-950 hover:bg-zinc-900 cursor-pointer transition-colors relative"
              onClick={() => handleProjectClick('plan2do')}
            >
              <div className="flex justify-between">
                <h3 className="text-sm md:text-lg font-bold text-blue-400">PLAN2DO: Personal AI Planner</h3>
                
                {/* Mobile version - minimal badge */}
                <Badge 
                  className="md:hidden bg-emerald-900/70 text-emerald-100 hover:bg-emerald-900 border-emerald-700/50 h-6 min-w-7 rounded-full flex items-center justify-center gap-1"
                  variant="outline"
                >
                 <span>In</span>
                 <span>Development</span>
                </Badge>
                
                {/* Desktop version - full text badge */}
                <Badge 
                  className="hidden md:inline-flex bg-emerald-900/70 text-emerald-100 hover:bg-emerald-900 border-emerald-700/50"
                  variant="outline"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M12 20A8 8 0 1 0 12 4a8 8 0 0 0 0 16Z"/>
                    <path d="M12 14.5v-5"/>
                    <path d="M12 8h.01"/>
                  </svg>
                  In Development
                </Badge>
              </div>
              <p className="mt-2 text-gray-300">
                Next.js 15 AI planning app with Supabase PostgreSQL, Stripe subscription management, Google Calendar, WhatsApp & Telegram integrations.
              </p>
              <div className="mt-3 flex items-center text-xs">
                <span className="text-emerald-400 hover:underline flex items-center">
                  View more details <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="m9 18 6-6-6-6"/></svg>
                </span>
              </div>
            </div>
            
            {/* Nouranto */}
            <div 
              className="border border-zinc-800 rounded-md p-4 bg-zinc-950 hover:bg-zinc-900 cursor-pointer transition-colors"
              onClick={() => handleProjectClick('nouranto')}
            >
              <h3 className="text-sm md:text-lg font-bold text-blue-400">Nouranto: Company Portfolio</h3>
              <p className="mt-2 text-gray-300">
                Next.js 15 site with Turso SQLite database, custom animations.
              </p>
              <div className="mt-3 flex items-center text-xs">
                <span className="text-emerald-400 hover:underline flex items-center">
                  View more details <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="m9 18 6-6-6-6"/></svg>
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </ScrollArea>
  );
};