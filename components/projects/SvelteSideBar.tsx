import { ExternalLink, Palette, Smartphone, Zap, Target, Settings, Menu, X } from "lucide-react"

export const SvelteSideBarProjectDetails = () => {
  return (
    <div className="space-y-6">
      <style>
        {`
          .font-handwriting {
            font-family: 'Segoe Script', 'Brush Script MT', cursive;
          }
        `}
      </style>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-blue-400">SvelteSideBar</h2>
        <div className="flex space-x-4 whitespace-nowrap">
          <a
            href="https://sveltesidebar.macrotech.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-emerald-900 hover:bg-emerald-800 text-emerald-100 rounded-md text-sm flex items-center transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-1.5" />
            Check It Out
          </a>
        </div>
      </div>

      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-emerald-500 mb-3">The Sidebar that everyone loves nowadays</h3>
        <p className="text-gray-300 mb-4">
          Created in pure Svelte and native CSS. No fancy components. No fancy stylesheets used. Just pure stuff. The
          Svelte one.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start space-x-3">
            <div className="bg-emerald-900/30 p-2 rounded">
              <Zap className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-semibold text-emerald-300">Pure Svelte</h4>
              <p className="text-sm text-gray-400">Built with modern Svelte 5 runes and reactive patterns</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="bg-blue-900/30 p-2 rounded">
              <Palette className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h4 className="font-semibold text-blue-300">Native CSS</h4>
              <p className="text-sm text-gray-400">No external dependencies, just clean and efficient CSS</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="bg-purple-900/30 p-2 rounded">
              <Smartphone className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h4 className="font-semibold text-purple-300">Responsive</h4>
              <p className="text-sm text-gray-400">Works perfectly on desktop, tablet, and mobile devices</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="bg-amber-900/30 p-2 rounded">
              <Zap className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="font-semibold text-amber-300">Lightweight</h4>
              <p className="text-sm text-gray-400">Minimal bundle size with maximum functionality</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="bg-indigo-900/30 p-2 rounded">
              <Target className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h4 className="font-semibold text-indigo-300">TypeScript Ready</h4>
              <p className="text-sm text-gray-400">Full TypeScript support with proper type definitions</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="bg-pink-900/30 p-2 rounded">
              <Settings className="w-5 h-5 text-pink-400" />
            </div>
            <div>
              <h4 className="font-semibold text-pink-300">Customizable</h4>
              <p className="text-sm text-gray-400">Easy to theme and adapt to your design system</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-emerald-500 mb-3">Design</h3>
        <p className="text-gray-300 mb-6">The inspiration came from the modern look sidebars nowadays</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h4 className="text-blue-300 font-medium flex items-center">
              <Menu className="w-4 h-4 mr-2" />
              Sidebar Open
            </h4>
            <div
              className="bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden flex items-center justify-center p-4"
              style={{ height: "300px" }}
            >
              <img
                src="https://blobs.vusercontent.net/blob/SideBarOpened-5EfUIRF7exzKA2Fk9x91jpMOfw3of3.svg"
                alt="Sidebar Open Wireframe"
                className="max-w-full max-h-full object-contain"
                style={{ filter: "invert(0)" }}
              />
            </div>
            <p className="text-sm text-gray-400">Full navigation with logo, menu items, and user section</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-purple-300 font-medium flex items-center">
              <X className="w-4 h-4 mr-2" />
              Sidebar Closed
            </h4>
            <div
              className="bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden flex items-center justify-center p-4"
              style={{ height: "300px" }}
            >
              <img
                src="https://blobs.vusercontent.net/blob/SideBarClosed-eng3GnfV8VzEs25e3YnpXNtaa4raxf.svg"
                alt="Sidebar Closed Wireframe"
                className="max-w-full max-h-full object-contain"
                style={{ filter: "invert(0)" }}
              />
            </div>
            <p className="text-sm text-gray-400">Collapsed view with icon-only navigation</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-amber-300 font-medium flex items-center">
              <Smartphone className="w-4 h-4 mr-2" />
              Mobile View
            </h4>
            <div
              className="bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden flex items-center justify-center p-4"
              style={{ height: "300px" }}
            >
              <img
                src="https://blobs.vusercontent.net/blob/MobileView-261Kdwd24IBtTuUqhGvrCsnbHqMLoP.svg"
                alt="Mobile View Wireframe"
                className="max-w-full max-h-full object-contain"
                style={{ filter: "invert(0)" }}
              />
            </div>
            <p className="text-sm text-gray-400">Bottom sheet navigation for mobile devices</p>
          </div>
        </div>
      </div>
    </div>
  )
}
