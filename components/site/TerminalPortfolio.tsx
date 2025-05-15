'use client'
import { useState } from 'react'
import { ProfileComponent } from "@/components/site/ProfileComponent"
import ReadMeComponent from './ReadMeComponent'
import { ProjectsComponent } from "@/components/site/ProjectsComponent"
import { FooterComponent } from "@/components/site/FooterComponent"
import { TerminalBrowserHeader } from "@/components/site/TerminalBrowserHeader"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { File, User } from "lucide-react"

export default function TerminalPortfolio() {
  // Use state to track the active tab
  const [activeTab, setActiveTab] = useState('readme')

  return (
    <div className="p-4 flex flex-col items-center justify-center bg-black">
      {/* Terminal Container */}
      <div className="flex flex-col bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden w-full max-w-[1500px] min-h-[95svh] shadow-lg">
        
        {/* Pass the activeTab state to the TerminalBrowserHeader */}
        <TerminalBrowserHeader activeTab={activeTab} />
        
        {/* Main Content Area */}
        <div className="flex flex-1 flex-row overflow-hidden">
          {/* Left side - Always Profile - Hidden on small screens, visible on lg screens */}
          <div className="hidden lg:block w-1/3 border-r border-zinc-800 overflow-auto">
            <ProfileComponent />
          </div>

          {/* Right side - Tab Content based on selected tab */}
          <div className="w-full lg:w-2/3 flex flex-col">
            <Tabs 
              defaultValue="readme" 
              className="flex-1 flex flex-col"
              onValueChange={(value) => {
                setActiveTab(value);
              }}
            >
              <div className="border-b border-zinc-700">
                <TabsList className="bg-zinc-800 p-0 h-auto justify-start rounded-none border-b border-zinc-700 flex flex-row overflow-x-auto">
                  {/* Profile tab - only visible on small screens */}
                  <TabsTrigger
                    value="profile"
                    className="lg:hidden data-[state=active]:bg-zinc-900 data-[state=active]:border-t-2 data-[state=active]:border-t-emerald-500 rounded-none px-4 py-2 font-mono text-xs flex items-center"
                  >
                    <User className="w-4 h-4 mr-2" /> profile.bash
                  </TabsTrigger>
                  <TabsTrigger
                    value="readme"
                    className="data-[state=active]:bg-zinc-900 data-[state=active]:border-t-2 data-[state=active]:border-t-emerald-500 rounded-none px-4 py-2 font-mono text-xs flex items-center"
                  >
                    <File className="w-4 h-4 mr-2" /> README.md
                  </TabsTrigger>
                  <TabsTrigger
                    value="projects"
                    className="data-[state=active]:bg-zinc-900 data-[state=active]:border-t-2 data-[state=active]:border-t-emerald-500 rounded-none px-4 py-2 font-mono text-xs flex items-center"
                  >
                    <File className="w-4 h-4 mr-2" /> projects.ts
                  </TabsTrigger>
                </TabsList>
              </div>
              
              {/* Absolute positioning approach to prevent layout shifts */}
              <div className="relative flex-1 overflow-hidden">
                {/* Profile tab content - only visible on small screens */}
                <TabsContent 
                  value="profile" 
                  className="lg:hidden absolute inset-0 p-4 font-mono text-sm overflow-auto"
                >
                  <ProfileComponent />
                </TabsContent>
                
                <TabsContent 
                  value="readme" 
                  className="absolute inset-0 p-4 font-mono text-sm overflow-auto"
                >
                  <ReadMeComponent />
                </TabsContent>
                
                <TabsContent 
                  value="projects" 
                  className="absolute inset-0 p-4 font-mono text-sm overflow-auto"
                >
                  <ProjectsComponent />
                </TabsContent> 
            
              </div>
            </Tabs>
          </div>
        </div>
        
        {/* Footer */}
        <FooterComponent />
      </div>
    </div>
  )
}