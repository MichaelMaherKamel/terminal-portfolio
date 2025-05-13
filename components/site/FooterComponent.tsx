import { Laptop } from "lucide-react"

export const FooterComponent = () => (
  <div className="border-t border-zinc-800 py-2 px-4 text-center text-xs text-gray-500 font-mono flex items-center justify-center">
    <span>Created with</span>
    <Laptop className="w-4 h-4 mx-1 text-emerald-400" />
  </div>
)
