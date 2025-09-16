import React from 'react';
import { ExternalLink, Code, Database, BarChart3, Server } from 'lucide-react';

export const DataSkepticProjectDetails = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold text-blue-400">Data Skeptic: Media Platform & Analytics Apps</h2>
        <div className="flex space-x-2">
          <a 
            href="https://dataskeptic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-emerald-900 hover:bg-emerald-800 text-emerald-100 rounded-md text-sm flex items-center transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-1.5" />
            dataskeptic.com
          </a>
          <a 
            href="https://neonpixel.co"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-emerald-900 hover:bg-emerald-800 text-emerald-100 rounded-md text-sm flex items-center transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-1.5" />
            neonpixel.co
          </a>
        </div>
      </div>
      
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-emerald-500 mb-3">Overview</h3>
        <p className="text-gray-300 mb-4">
          Full‑stack development across Data Skeptic properties with focus on NeonPixel—
          an advertiser/campaign management tool with CTV analytics and reporting.
          Frontend in React; backend services on AWS with DynamoDB and serverless APIs.
        </p>
        
        <h3 className="text-lg font-semibold text-emerald-500 mb-2 mt-6">Key Features</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>Campaign and advertiser management workflows</li>
          <li>CTV analytics dashboards and scheduled reports</li>
          <li>Role-based access and workspace segmentation</li>
          <li>Serverless data ingestion and aggregation pipelines</li>
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
              <li>Semantic UI</li>
              <li>Component-driven dashboards</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <Database className="w-5 h-5 text-indigo-400 mr-2" />
              <h4 className="text-indigo-300 font-medium">Backend & Data</h4>
            </div>
            <ul className="list-disc pl-7 text-gray-300 space-y-1">
            <li>S3</li>
            <li>DynamoDB</li>
              <li>AWS Lambda, API Gateway</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-emerald-500 mb-3">Highlights</h3>
        <div className="space-y-4">
          <div>
            <div className="flex items-center">
              <BarChart3 className="w-5 h-5 text-amber-400 mr-2" />
              <h4 className="text-amber-300 font-medium">Analytics & Reporting</h4>
            </div>
            <p className="text-gray-300 mt-1">
              Built real-time dashboards and scheduled reports for CTV performance metrics, with efficient
              querying and aggregation over large datasets.
            </p>
          </div>

          <div>
            <div className="flex items-center">
              <Server className="w-5 h-5 text-purple-400 mr-2" />
              <h4 className="text-purple-300 font-medium">Scalable Serverless</h4>
            </div>
            <p className="text-gray-300 mt-1">
              Implemented serverless ingestion and processing pipelines leveraging AWS services, enabling cost‑effective
              scale and reliability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


