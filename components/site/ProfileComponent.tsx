"use client"

import Image from "next/image"
import { Mail, Github, Linkedin } from "lucide-react";
import TerminalPrompt from "./terminal-prompt"
import Link from "next/link"
import { Upwork } from "./Icons"
import { ScrollArea } from "@radix-ui/react-scroll-area";

export const ProfileComponent = () => {
  return (
    <ScrollArea className="h-[calc(95svh-120px)] md:h-[calc(100svh-170px)] lg:h-[calc(100svh-200px)] w-full">
      {/* Main content area */}
      <div className="space-y-6 p-6">
      <div className="flex flex-row items-center gap-6">
          <div className="relative w-24 h-24 lg:w-32 lg:h-32 mb-4 sm:mb-0 sm:mr-6 lg:mb-4 lg:mr-0 rounded-lg overflow-hidden border-2 border-emerald-500 shadow-lg shadow-emerald-500/20">
            <Image src="/pics/profile.jpg" alt="Profile" fill className="object-cover" />
          </div>
          <div className="space-y-2 text-center sm:text-left lg:text-center">
            <h1 className="text-xl lg:text-2xl font-bold">
             Michael Maher
            </h1>

            <p className="text-sm text-gray-400 font-mono">
              <span className="text-emerald-400">Full Stack Developer</span>
            </p>
          </div>
        </div>

        <div className="font-mono text-sm">
          <div className="border border-zinc-800 rounded-lg overflow-hidden">
            <div className="px-4 py-2 flex items-center">
             <TerminalPrompt command="whoami" />
            </div>

            <div className="px-4 pt-1 pb-2">

              <div className="leading-relaxed">
                <p className="animate-fadeIn">
                  Passionate web developer focused on creating clean, efficient, and user-centric digital experiences. 
                  I craft scalable solutions using modern JavaScript frameworks with an emphasis on performance and accessibility.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
      <TerminalSocialLinks />
    </ScrollArea>
  )
}

const TerminalSocialLinks = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full px-6 py-4">
      <div className="text-sm overflow-hidden border rounded-lg border-gray-800 shadow-lg">
        <div className="px-4 font-mono text-gray-300 flex items-center">
          <TerminalPrompt command="npx connect" />
        </div>

        <div className="font-mono text-sm p-4 text-gray-400">
          <p className="animate-typewriter animation-delay-500 overflow-hidden whitespace-nowrap">Ready to connect...</p>
          <p className="animate-pulse text-emerald-400">Waiting for contact request...</p>
        </div>
        <div className="flex justify-between py-3 px-3">
          <Link
            href="https://github.com/MichaelMaherKamel"
            target="_blank"
            className="text-gray-400 hover:text-emerald-400 transition-colors transform hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/michael-maher-216b13108"
            target="_blank"
            className="text-gray-400 hover:text-emerald-400 transition-colors transform hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link
            href="mailto:michaelmaherkamel@gmail.com"
            target="_blank"
            className="text-gray-400 hover:text-emerald-400 transition-colors transform hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.upwork.com/freelancers/michaelmaherkamelg?mp_source=share"
            target="_blank"
            className="text-gray-400 hover:text-emerald-400 transition-colors transform hover:scale-110"
          >
            <Upwork className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}