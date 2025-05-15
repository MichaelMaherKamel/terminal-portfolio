import TerminalPortfolio from "@/components/site/TerminalPortfolio"
import ResponsivePortfolio from "@/components/site/ResponsivePortfolio"

export default async function Home() {
  return (
    <main className="h-dvh bg-black text-gray-300">
      {/* Terminal Portfolio for large screens (hidden on smaller screens) */}
      <div className="hidden lg:block">
      <TerminalPortfolio  />
      </div>
      
      {/* Responsive Portfolio for smaller screens (hidden on large screens) */}
      <div className="block lg:hidden">
        <ResponsivePortfolio />
      </div>
    </main>
  )
}