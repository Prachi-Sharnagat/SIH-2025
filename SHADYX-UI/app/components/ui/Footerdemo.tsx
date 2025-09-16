
"use client";
import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Github, Instagram, Linkedin, Send, Twitter, Mail } from "lucide-react";

export default function FooterCircularity() {
  return (
    <footer className="relative border-t mt-10 bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="flex flex-col gap-12 sm:flex-row sm:justify-between lg:flex-row lg:justify-between">
          {/* LEFT SIDE */}
          <div className="relative lg:w-1/2">
            <h2 className="mb-4 text-3xl font-bold tracking-tight font-JB pl-3">
            Driving Metals Towards a Circular Future
            </h2>
            <p className="mb-6 px-3 text-muted-foreground font-JB font-bold sm:font-semibold flex items-center gap-2 whitespace-nowrap text-sm sm:text-base">
              Subscribe for updates on Circularity Cockpit <Mail className="h-5 w-5 inline" />
            </p>
            <form className="relative inline-flex pl-2 items-center">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-16 w-auto sm:min-w-[350px] h-10 font-JB placeholder:font-bold placeholder:sm:font-medium"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full text-primary-foreground"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Visualize, Optimize, Recycle</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>

          {/* RIGHT SIDE - 3 BLOCKS */}
          <div className="grid grid-cols-2 pl-3 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:w-1/2">
            <div>
              <h3 className="mb-4 text-lg font-bold font-JB">Quick Links</h3>
              <nav className="space-y-2 text-sm font-JB">
                <Link href="/" className="block transition-colors">Home</Link>
                <Link href="/dashboard" className="block transition-colors">Dashboard</Link>
                <Link href="/analytics" className="block transition-colors">Analytics</Link>
                <Link href="/resources" className="block transition-colors">Resources</Link>
              </nav>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold font-JB">Contact</h3>
              <address className="space-y-3 gap-3 text-sm not-italic">
                <a href="mailto:info@circularitycockpit.com" className="font-JB hover:text-violet-700">Email Us</a>
                <p className="font-JB mt-2">Phone: +91 73878 57715</p>
              </address>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold mono-text">Follow Us</h3>
              <div className="mb-6 flex space-x-4">
                {/* GitHub */}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon" className="rounded-full cursor-pointer">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </Button>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Check us on GitHub</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                {/* Twitter */}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon" className="rounded-full">
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </Button>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Twitter</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                {/* LinkedIn */}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon" className="rounded-full cursor-pointer">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Button>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Connect on LinkedIn</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="mt-5 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground font-GS">
            © 2025 Circularity Cockpit. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm font-GS">
            <a href="#" className="transition-colors hover:text-primary">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-primary">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-primary">Cookie Settings</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}


