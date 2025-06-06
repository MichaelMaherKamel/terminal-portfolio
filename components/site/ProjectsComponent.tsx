import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SaversProjectDetails } from '@/components/projects/Savers';
import { SouqElRafay3ProjectDetails } from '@/components/projects/SouqElRafay3';
import { NourantoProjectDetails } from '@/components/projects/Nouranto';
import { Plan2DoProjectDetails } from '@/components/projects/Plan2Do';
import { SvelteSideBarProjectDetails } from '@/components/projects/SvelteSideBar';

// Define a type for project IDs
type ProjectId = 'savers' | 'souqelrafay3' | 'plan2do' | 'nouranto' | 'sveltesidebar' | null;

export const ProjectsComponent = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectId>(null);
  const topRef = useRef<HTMLDivElement>(null);
  
  // Smooth scroll to top function
  const smoothScrollToTop = () => {
    // Find scroll containers
    const scrollViewports = document.querySelectorAll('.scroll-area-viewport');
    
    // Smooth scroll animation function
    const animateScroll = (element: HTMLElement, targetPosition: number, duration: number) => {
      const startPosition = element.scrollTop;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;
      
      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function - ease out cubic
        const ease = (t: number) => 1 - Math.pow(1 - t, 3);
        
        // Calculate the new scroll position
        const newPosition = startPosition + distance * ease(progress);
        element.scrollTop = newPosition;
        
        // Continue animation if not finished
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };
      
      requestAnimationFrame(animation);
    };
    
    // Apply smooth scroll to all viewport elements
    scrollViewports.forEach(viewport => {
      if (viewport instanceof HTMLElement) {
        animateScroll(viewport, 0, 300); // 300ms animation
      }
    });
    
    // Also try scrollIntoView with smooth behavior as a fallback
    if (topRef.current) {
      topRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'start'
      });
    }
  };

  const handleProjectClick = (projectId: ProjectId) => {
    // Smooth scroll before state change
    smoothScrollToTop();
    setSelectedProject(projectId);
  };

  const handleBackClick = () => {
    // Smooth scroll before state change
    smoothScrollToTop();
    setSelectedProject(null);
  };
  
  // Additional useEffect for ensuring scroll position after render
  useEffect(() => {
    // Short delay to allow for render
    const timer = setTimeout(() => {
      smoothScrollToTop();
    }, 50);
    
    return () => {
      clearTimeout(timer);
    };
  }, [selectedProject]);

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
      case 'sveltesidebar':
        return <SvelteSideBarProjectDetails />;
      default:
        return null;
    }
  };

  return (
    <ScrollArea 
      className="h-[calc(95svh-120px)] md:h-[calc(100svh-170px)] lg:h-[calc(100svh-200px)] w-full scroll-area"
    >
      <div className="p-4 relative">
        {/* Invisible scroll target at absolute top */}
        <div 
          ref={topRef} 
          className="scroll-target" 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            height: 1, 
            width: '100%', 
            visibility: 'hidden', 
            zIndex: -1 
          }} 
        />
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
            {/* <h2 className="text-2xl font-bold text-emerald-600 mb-2">{selectedProject.charAt(0).toUpperCase() + selectedProject.slice(1)} Project</h2>
            <Separator className="my-2" /> */}
            {renderProjectDetails()}
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-emerald-600">Projects</h2>
            <Separator className="my-2" />
            
            {/* Savers */}
            <div 
              className="mt-4 border border-zinc-800 rounded-md p-4 bg-zinc-950 hover:bg-zinc-900 cursor-pointer transition-colors"
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

            {/* sveltesidebar */}
            <div 
              className="mt-4 border border-zinc-800 rounded-md p-4 bg-zinc-950 hover:bg-zinc-900 cursor-pointer transition-colors"
              onClick={() => handleProjectClick('sveltesidebar')}
            >
              <h3 className="text-sm md:text-lg font-bold text-blue-400">SvelteSideBar: Sidebar that everyone loves nowadays</h3>
              <p className="mt-2 text-gray-300">
                Created in pure Svelte and native CSS. No fancy components. No fancy stylesheets used. Just pure stuff. The Svelte one.
              </p>
              <div className="mt-3 flex items-center text-xs">
                <span className="text-emerald-400 hover:underline flex items-center">
                  View more details <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="m9 18 6-6-6-6"/></svg>
                </span>
              </div>
            </div>
            
            {/* SouqElRafay3 */}
            <div 
              className="mt-4 border border-zinc-800 rounded-md p-4 bg-zinc-950 hover:bg-zinc-900 cursor-pointer transition-colors"
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
              className="mt-4 border border-zinc-800 rounded-md p-4 bg-zinc-950 hover:bg-zinc-900 cursor-pointer transition-colors relative"
              onClick={() => handleProjectClick('plan2do')}
            >
              <div className="flex justify-between">
                <h3 className="text-sm md:text-lg font-bold text-blue-400">PLAN2DO: Personal AI Planner</h3>
                
                {/* Mobile version - simplified badge */}
                <Badge 
                  className="md:hidden bg-emerald-900/70 text-emerald-100 hover:bg-emerald-900 border-emerald-700/50 px-2 text-xs rounded-sm"
                  variant="outline"
                >
                Dev
                </Badge>
                
                {/* Desktop version - full text badge */}
                <Badge 
                  className="hidden md:inline-flex bg-emerald-900/70 text-emerald-100 hover:bg-emerald-900 border-emerald-700/50 text-xs px-2"
                  variant="outline"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M12 20A8 8 0 1 0 12 4a8 8 0 0 0 0 16Z"/>
                    <path d="M12 14.5v-5"/>
                    <path d="M12 8h.01"/>
                  </svg>
                  In Dev
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
              className="mt-4 border border-zinc-800 rounded-md p-4 bg-zinc-950 hover:bg-zinc-900 cursor-pointer transition-colors"
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