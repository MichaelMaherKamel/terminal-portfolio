export const ResponsiveTerminalBrowserHeader = ({ activeTab = "profile" }) => {
  return (
    <div className="border-b border-zinc-800 p-2 flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <p className="text-xs font-mono text-gray-400">
          Michael@portfolio: ~/{activeTab}
        </p>
      </div>
    </div>
  );
}