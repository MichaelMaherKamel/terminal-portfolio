import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Download, Eye, EyeOff, Terminal } from "lucide-react";

export const ResumeComponent = () => {
  const [showIframe, setShowIframe] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleIframe = () => {
    setShowIframe(!showIframe);
  };

  const downloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/Resume.html';
    link.download = 'Michael_Maher_Resume.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ScrollArea className="h-[calc(100vh-150px)] md:h-[calc(100vh-170px)] lg:h-[calc(100vh-200px)] w-full">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-emerald-600">$ cat resume.html</h2>
          <div className="flex space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleIframe}
              className="flex items-center space-x-1 border-zinc-700 hover:bg-zinc-800"
            >
              {showIframe ? <EyeOff className="w-4 h-4 mr-1" /> : <Eye className="w-4 h-4 mr-1" />}
              <span>{showIframe ? "View Code" : "View Resume"}</span>
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={downloadResume}
              className="flex items-center space-x-1 border-zinc-700 hover:bg-zinc-800"
            >
              <Download className="w-4 h-4 mr-1" />
              <span>Download</span>
            </Button>
          </div>
        </div>

        {!showIframe && isMounted && (
          <div className="bg-zinc-950 p-4 rounded-md border border-zinc-800 overflow-auto">
            <pre className="text-xs text-gray-300 font-mono whitespace-pre-wrap">
              {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Michael Maher - Resume</title>
    <style>
      /* Base styles */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      /* More styles here... */
    </style>
  </head>
  <body>
    <!-- Resume content here... -->
  </body>
</html>`}
            </pre>
            <p className="mt-4 text-gray-400 text-sm italic">
              <Terminal className="inline-block w-4 h-4 mr-1 text-emerald-400" />
              <span>Resume HTML code preview (truncated for readability)</span>
            </p>
          </div>
        )}

        {showIframe && isMounted && (
          <div className="border border-zinc-700 rounded-md bg-white h-[800px]">
            <iframe 
              src="/Resume.html" 
              className="w-full h-full"
              title="Michael Maher Resume"
            />
          </div>
        )}

        <div className="mt-4 text-sm text-gray-400">
          <p className="flex items-center">
            <Terminal className="w-4 h-4 mr-2 text-emerald-400" />
            <span>This resume is available in both HTML and PDF formats. Use the buttons above to toggle view or download.</span>
          </p>
        </div>
      </div>
    </ScrollArea>
  );
};

export default ResumeComponent;