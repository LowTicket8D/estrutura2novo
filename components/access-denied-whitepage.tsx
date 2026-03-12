"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  TrendingUp,
  Target,
  Rocket,
  Shield,
  Sparkles,
  Play,
  Mic,
  Monitor,
  Palette,
  Radio,
  DollarSign,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import ConfettiEffect from "@/components/confetti";

const CHECKOUT_URL = "https://go.centerpag.com/PPU38CQ8LDF";

export default function AccessDenied() {
  const features = [
    {
      icon: Zap,
      title: "12 Editing Styles Covered",
      description:
        "From AI cinematic B-roll to ambient livestreams — master every faceless format used by top creators in 2026",
    },
    {
      icon: Target,
      title: "CapCut Step-by-Step Workflows",
      description:
        "Complete editing walkthroughs with exact settings, keyframe techniques, export configs, and reusable templates",
    },
    {
      icon: Rocket,
      title: "AI-Powered Production Pipeline",
      description:
        "Leverage Sora 2, Kling, ElevenLabs, HeyGen, and Novi AI to produce professional videos in minutes, not days",
    },
    {
      icon: TrendingUp,
      title: "High-CPM Niche Strategies",
      description:
        "Target finance, tech, and education niches where faceless channels earn $15-50 RPM with proven formats",
    },
    {
      icon: Sparkles,
      title: "Shorts & Long-Form Mastery",
      description:
        "Dominate both YouTube Shorts and 10+ minute videos with format-specific editing techniques and hooks",
    },
    {
      icon: Shield,
      title: "Monetization & Scaling Playbook",
      description:
        "Five revenue streams, YouTube SEO tactics, and automation workflows to run multiple channels simultaneously",
    },
  ];

  const modules = [
    {
      icon: Play,
      number: "01",
      title: "Welcome Guide & CapCut Setup",
      description:
        "Understand the faceless landscape, configure your CapCut workspace, and get the overview of all 12 editing styles",
    },
    {
      icon: Sparkles,
      number: "02",
      title: "AI-Powered Visuals",
      description:
        "Master AI Cinematic B-Roll with Sora 2 & Kling, AI Avatar presenters with HeyGen, and Story-to-Video animated storytelling with Novi AI",
    },
    {
      icon: Mic,
      number: "03",
      title: "Narration & Voiceover Styles",
      description:
        "Build polished Stock Footage Documentaries and create viral AI Podcast / Dual Voice content with ElevenLabs integration",
    },
    {
      icon: Monitor,
      number: "04",
      title: "Screen & Text-Based Formats",
      description:
        "Produce Screen Recording Tutorials, Reddit Stories with Gameplay backgrounds, and Text-on-Screen viral Shorts that stop the scroll",
    },
    {
      icon: Palette,
      number: "05",
      title: "Animation & Motion",
      description:
        "Create high-CPM Motion Graphics and Infographic Animations with CapCut keyframes, plus Whiteboard hand-drawn videos with VideoScribe",
    },
    {
      icon: Radio,
      number: "06",
      title: "Ambient & Automated Content",
      description:
        "Set up passive-income Lofi/Ambient 24/7 livestreams and fully automated AI News Aggregation channels with n8n pipelines",
    },
    {
      icon: DollarSign,
      number: "07",
      title: "Monetization & AI Toolkit",
      description:
        "YouTube SEO for faceless channels, five proven revenue streams, the complete 2026 AI tool stack with pricing, and recommended starter budgets",
    },
    {
      icon: BarChart3,
      number: "★",
      title: "Live Trend Tracker Platform",
      description:
        "Exclusive access to our live dashboard updated every 3 days — see which niches, topics, and video ideas are going viral right now so you always know what to create next",
    },
  ];

  const benefits = [
    "Master 12 different faceless video editing styles — each with a complete CapCut workflow from timeline to export",
    "Generate cinematic AI B-roll using Sora 2, Kling 2.6, and Veo 3 — footage that no one else has because it never existed before",
    "Create photorealistic AI avatar presenters with perfect lip-sync using HeyGen and Synthesia — no camera needed",
    "Build animated storytelling videos with consistent characters using Novi AI's Story-to-Video in any visual style",
    "Produce documentary-grade content by combining stock footage with professional AI voiceovers from ElevenLabs",
    "Launch an AI Podcast channel with dual-voice narration — the fastest-growing faceless format in 2026",
    "Edit screen recording tutorials with dynamic zooms, auto-highlights, and professional captions in CapCut",
    "Create Reddit story videos with gameplay backgrounds optimized for maximum Shorts retention",
    "Design scroll-stopping text-on-screen Shorts with viral hooks, sound design, and CapCut animations",
    "Build high-CPM motion graphics and infographic animations using CapCut keyframes and Canva assets",
    "Set up 24/7 lofi ambient livestreams that generate passive ad revenue while you sleep",
    "Automate entire news digest channels using n8n workflows — from RSS feed to published YouTube video",
    "Apply proven YouTube SEO strategies specifically optimized for faceless channels without personal branding",
    "Access the complete 2026 AI toolkit: 25+ tools organized by function with pricing and starter stack recommendations",
    "Build reusable CapCut templates for each editing style — cutting your production time by 40% per video",
    "Implement five distinct monetization paths: AdSense, affiliate marketing, sponsorships, digital products, and channel flipping",
  ];

  return (
    <div className="w-full h-svh bg-black text-white relative overflow-x-hidden overflow-y-auto">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(123,47,190,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(123,47,190,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Accent line (top of page) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent pointer-events-none" />

      <main className="relative z-10 w-full">
        {/* HERO SECTION */}
        <section className="relative w-full">
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-600/50 bg-purple-600/10 backdrop-blur-sm"
              >
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-sm font-medium text-purple-300">
                  COMPLETE COURSE — 7 MODULES • 12 EDITING STYLES • LIVE TREND TRACKER
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-white via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  FACELESS YOUTUBE
                </span>
                <br />
                <span className="text-white">MASTERY</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                The complete CapCut editing course for building and monetizing{" "}
                <span className="text-cyan-400 font-semibold">
                  faceless YouTube channels
                </span>{" "}
                using AI tools in 2026 — plus a live trend tracker so you always
                know what video to make next
              </p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-6"
              >
                <button
                  onClick={() => window.open(CHECKOUT_URL, "_blank")}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-600/50"
                >
                  <span>GET INSTANT ACCESS</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 rounded-lg bg-purple-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity -z-10" />
                </button>
              </motion.div>

              {/* Social proof */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-sm text-gray-500"
              >
                No camera • No face • No experience needed — just CapCut, AI tools, and this system
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="relative z-10 w-full py-20 border-t border-purple-600/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What You&apos;ll{" "}
                <span className="text-purple-500">Master</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Everything you need to build profitable faceless channels
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-black hover:border-purple-600/50 transition-all duration-300"
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/5 transition-all duration-300" />
                    <div className="relative z-10">
                      <div className="inline-flex p-3 rounded-lg bg-purple-600/20 border border-purple-600/30 mb-4">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* MODULES SECTION */}
        <section className="relative z-10 w-full py-20 border-t border-purple-600/20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Course{" "}
                <span className="text-cyan-400">Modules</span>
              </h2>
              <p className="text-gray-400 text-lg">
                7 comprehensive modules + live trend tracker — each one independent and actionable
              </p>
            </motion.div>

            <div className="space-y-4">
              {modules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group relative flex items-start gap-5 p-5 rounded-xl border border-gray-800 bg-gradient-to-r from-gray-900/50 to-black hover:border-purple-600/40 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-purple-600/30 to-cyan-600/20 border border-purple-600/30 flex items-center justify-center">
                      <span className="text-lg font-black text-cyan-400">
                        {module.number}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-purple-400" />
                        <h3 className="text-lg font-bold text-white">
                          {module.title}
                        </h3>
                      </div>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        {module.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BENEFITS LIST */}
        <section className="relative z-10 w-full py-20 border-t border-purple-600/20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Everything You&apos;ll{" "}
                <span className="text-purple-500">Learn</span>
              </h2>
              <p className="text-gray-400 text-lg">
                16 actionable skills included in the course
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="flex items-start gap-4 p-4 rounded-lg border border-gray-800 bg-gray-900/30 hover:border-purple-600/50 hover:bg-gray-900/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LIVE TREND TRACKER PLATFORM */}
        <section className="relative z-10 w-full py-20 border-t border-purple-600/20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 p-8 md:p-12 space-y-8">
                {/* Badge */}
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/40 bg-cyan-400/10">
                    <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm font-bold text-cyan-300 tracking-wide">
                      EXCLUSIVE BONUS — INCLUDED WITH YOUR ACCESS
                    </span>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <h2 className="text-3xl md:text-5xl font-black">
                    <span className="text-white">Live </span>
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Trend Tracker
                    </span>
                    <span className="text-white"> Platform</span>
                  </h2>
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Stop guessing what to make videos about. Get access to our exclusive
                    live dashboard that shows you exactly{" "}
                    <span className="text-cyan-400 font-semibold">
                      which niches, topics, and video ideas are going viral right now
                    </span>{" "}
                    — updated every 3 days with fresh data.
                  </p>
                </div>

                {/* Platform features grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  {[
                    {
                      icon: "📊",
                      title: "Trending Niches",
                      desc: "See which faceless niches are growing fastest right now — ranked by view velocity, subscriber growth, and competition level",
                    },
                    {
                      icon: "🔥",
                      title: "Viral Topics & Ideas",
                      desc: "Curated list of specific video topics that are gaining traction across YouTube — ready for you to produce in CapCut",
                    },
                    {
                      icon: "🔄",
                      title: "Updated Every 3 Days",
                      desc: "Fresh data delivered constantly so you always know what to create next — never waste time on dead topics again",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="p-5 rounded-xl border border-gray-700/50 bg-black/40 text-center space-y-3"
                    >
                      <div className="text-3xl">{item.icon}</div>
                      <h3 className="text-white font-bold">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Highlight bar */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-center pt-4"
                >
                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-purple-500/30 bg-purple-500/10">
                    <span className="text-purple-300 text-sm font-medium">
                      Know exactly what video to make → Open CapCut → Follow the course workflow → Publish → Profit
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative z-10 w-full py-20 border-t border-purple-600/20">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-6xl font-black">
                Ready to Build Your{" "}
                <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  Faceless Empire
                </span>
                ?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Get all 7 modules, 12 editing styles, complete CapCut workflows,
                the full AI toolkit, and lifetime access to the Live Trend Tracker
                platform — everything you need to launch and scale your faceless
                channels starting today.
              </p>

              <div className="pt-8">
                <button
                  onClick={() => window.open(CHECKOUT_URL, "_blank")}
                  className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold text-xl rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-600/50"
                >
                  <span>GET INSTANT ACCESS</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  <div className="absolute inset-0 rounded-lg bg-purple-600 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity -z-10" />
                </button>
              </div>

              <p className="text-sm text-gray-500 pt-4">
                Instant download • Lifetime access • All future updates included
              </p>
            </motion.div>
          </div>
        </section>

        <ConfettiEffect />
      </main>

      <footer
        className="relative z-10 w-full py-8 px-4"
        style={{ backgroundColor: "#0A0A0A" }}
      >
        {/* Purple divider line (footer boundary) */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-white/70">
            <Link
              href="/#"
              className="hover:text-white hover:underline transition-colors"
            >
              Contact
            </Link>
            <span className="text-white/40" aria-hidden>
              |
            </span>
            <Link
              href="/#"
              className="hover:text-white hover:underline transition-colors"
            >
              Terms of Use
            </Link>
            <span className="text-white/40" aria-hidden>
              |
            </span>
            <Link
              href="/#"
              className="hover:text-white hover:underline transition-colors"
            >
              Disclaimer
            </Link>
            <span className="text-white/40" aria-hidden>
              |
            </span>
            <Link
              href="/#"
              className="hover:text-white hover:underline transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-white/40" aria-hidden>
              |
            </span>
            <Link
              href="/#"
              className="hover:text-white hover:underline transition-colors"
            >
              Refund Policy
            </Link>
          </nav>
          <p className="text-xs text-white/50">
            © 2025 Faceless YouTube Mastery. All rights reserved.
            <br />
            <br />
            This site is not a part of YouTube, Google, or Alphabet Inc.
            Additionally, this site is not endorsed by YouTube in any way.
            YOUTUBE is a trademark of Alphabet Inc.
          </p>
        </div>
      </footer>
    </div>
  );
}