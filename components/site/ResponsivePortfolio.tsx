"use client"
import { useState } from "react"
import { ProfileComponent } from "@/components/site/ProfileComponent"
import ReadMeComponent from "@/components/site/ReadMeComponent"
import { ProjectsComponent } from "@/components/site/ProjectsComponent"
import { FooterComponent } from "@/components/site/FooterComponent"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { File } from "lucide-react"
import { ResponsiveTerminalBrowserHeader } from "@/components/site/ResponsiveTerminalBrowserHeader"

const ResponsivePortfolio = () => {
  // Set Profile as the initial active tab
  const [activeTab, setActiveTab] = useState("profile")
  
  return (
    <div className="p-2 flex flex-col items-center justify-center bg-black">
      {/* Terminal Container */}
      <div className="flex flex-col bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden w-full max-w-[500px] h-[100svh] shadow-lg">
       
        {/* Terminal Browser Header */}
        <ResponsiveTerminalBrowserHeader
          activeTab={activeTab}
        />
        
        {/* Tab Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col flex-1">
          <div className="border-b border-zinc-700">
            <TabsList className="bg-zinc-800 p-0 h-auto justify-start rounded-none border-b border-zinc-700 flex flex-row w-full">
              <TabsTrigger
                value="profile"
                className="flex-1 data-[state=active]:bg-zinc-900 data-[state=active]:border-t-2 data-[state=active]:border-t-emerald-500 rounded-none px-3 py-2 font-mono text-xs flex items-center justify-center"
              >
                <File className="w-3 h-3 mr-1" /> profile.sh
              </TabsTrigger>
              <TabsTrigger
                value="readme"
                className="flex-1 data-[state=active]:bg-zinc-900 data-[state=active]:border-t-2 data-[state=active]:border-t-emerald-500 rounded-none px-3 py-2 font-mono text-xs flex items-center justify-center"
              >
                <File className="w-3 h-3 mr-1" /> README.md
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                className="flex-1 data-[state=active]:bg-zinc-900 data-[state=active]:border-t-2 data-[state=active]:border-t-emerald-500 rounded-none px-3 py-2 font-mono text-xs flex items-center justify-center"
              >
                <File className="w-3 h-3 mr-1" /> projects.ts
              </TabsTrigger>
            </TabsList>
          </div>
          
          {/* Content Area */}
          <div className="flex-1 flex flex-col overflow-auto">
            <TabsContent value="profile" className="flex-1 p-3 font-mono text-sm overflow-auto">
              <ProfileComponent />
            </TabsContent>
            <TabsContent value="readme" className="flex-1 p-3 font-mono text-sm overflow-auto">
              <ReadMeComponent />
            </TabsContent>
            <TabsContent value="projects" className="flex-1 p-3 font-mono text-sm overflow-auto">
              <ProjectsComponent />
            </TabsContent>
            <FooterComponent />
          </div>
        </Tabs>
      </div>
    </div>
  )
}

export default ResponsivePortfolio