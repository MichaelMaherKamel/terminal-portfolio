interface TerminalPromptProps {
  command: string
}

export default function TerminalPrompt({ command }: TerminalPromptProps) {
  return (
    <div className="flex items-center text-sm my-2">
      {/* <Terminal className="w-4 h-4 mr-2 text-emerald-400" /> */}
      <span className="text-emerald-400">$</span>
      <span className="ml-2">{command}</span>
    </div>
  )
}
