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
} from "lucide-react";
import Link from "next/link";
import ConfettiEffect from "@/components/confetti";

const CHECKOUT_URL = "https://go.centerpag.com/PPU38CQ8LDF";

export default function AccessDenied() {
  const features = [
    {
      icon: Zap,
      title: "Dominate Faceless YouTube Automation",
      description:
        "Boost your account's visibility and reach millions of viewers",
    },
    {
      icon: Target,
      title: "Perfect Your YouTube Profile",
      description:
        "Turn viewers into loyal subscribers with proven strategies",
    },
    {
      icon: Rocket,
      title: "Non-Stop Content Creation",
      description:
        "Use Canva to produce unlimited Shorts and Videos for YouTube",
    },
    {
      icon: TrendingUp,
      title: "Always Ahead of Trends",
      description:
        "Spot trending sounds and concepts that go viral on YouTube",
    },
    {
      icon: Sparkles,
      title: "Viral Content Formula",
      description:
        "Make compelling videos that rack up thousands of views each",
    },
    {
      icon: Shield,
      title: "Sidestep Common Mistakes",
      description: "Know how to avoid penalties and keep growing steadily",
    },
  ];

  const benefits = [
    "Dominate Faceless YouTube Automation and skyrocket your account's visibility!",
    "Perfect your YouTube profile to turn viewers into loyal subscribers",
    "How to use Canva to produce unlimited Shorts and Videos for YouTube",
    "Always stay current with the latest Faceless YouTube Automation trends",
    "Learn how to find and leverage trending sounds and concepts on YouTube.",
    "Make compelling videos that go viral on YouTube, earning you thousands of views each.",
    "Build a winning content strategy to become a top YouTube creator in your niche.",
    "Use Canva to design Instagram branding elements including Profile Photos, Banners and more",
    "Tap into the power of ChatGPT to boost your YouTube video content and engage your audience.",
    "Sidestep common mistakes and penalties on Faceless YouTube for steady, reliable growth.",
    "Apply growth hacks to land your content on the YouTube Home feed and go viral.",
    "Access insider secrets of YouTube Marketing that top industry experts rely on.",
    "Stay one step ahead of competitors using advanced YouTube features and techniques.",
    "Boost your YouTube content's search visibility through proven SEO strategies.",
    "Apply the latest YouTube marketing methods to stand out in a crowded space",
    "Pick up valuable tips and tricks to take your YouTube Shorts marketing to the next level.",
    "Learn how to use ChatGPT as a powerful engine for content creation",
  ];

  return (
    <div className="w-full h-svh bg-black text-white relative overflow-x-hidden overflow-y-auto">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,0,0,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Red accent line (top of page) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent pointer-events-none" />

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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-600/50 bg-red-600/10 backdrop-blur-sm"
              >
                <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
                <span className="text-sm font-medium text-red-400">
                  MASTERMIND PROGRAM
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-white via-red-500 to-white bg-clip-text text-transparent">
                  MASTERMIND
                </span>
                <br />
                <span className="text-white">FACELESS CHANNELS</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                Dominate Faceless YouTube Automation and{" "}
                <span className="text-red-500 font-semibold">
                  skyrocket your account&apos;s visibility!
                </span>
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
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-600/50"
                >
                  <span>BEGIN YOUR JOURNEY</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 rounded-lg bg-red-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity -z-10" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="relative z-10 w-full py-20 border-t border-red-600/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What You&apos;ll <span className="text-red-600">Master</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Everything you need to dominate YouTube
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
                    className="group relative p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-black hover:border-red-600/50 transition-all duration-300"
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/10 group-hover:to-red-600/5 transition-all duration-300" />
                    <div className="relative z-10">
                      <div className="inline-flex p-3 rounded-lg bg-red-600/20 border border-red-600/30 mb-4">
                        <Icon className="w-6 h-6 text-red-500" />
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

        {/* BENEFITS LIST */}
        <section className="relative z-10 w-full py-20 border-t border-red-600/20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Complete <span className="text-red-600">Learning Path</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Everything included in the Mastermind
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-4 p-4 rounded-lg border border-gray-800 bg-gray-900/30 hover:border-red-600/50 hover:bg-gray-900/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative z-10 w-full py-20 border-t border-red-600/20">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-6xl font-black">
                Ready to <span className="text-red-600">Dominate</span> YouTube?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Join the Mastermind Faceless Channels program and turn your
                YouTube presence into a powerful revenue-generating machine.
              </p>

              <div className="pt-8">
                <button
                  onClick={() => window.open(CHECKOUT_URL, "_blank")}
                  className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xl rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-red-600/50"
                >
                  <span>GET INSTANT ACCESS</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  <div className="absolute inset-0 rounded-lg bg-red-600 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity -z-10" />
                </button>
              </div>

              <p className="text-sm text-gray-500 pt-4">
                Limited spots available • Join thousands of successful creators
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
        {/* Red divider line (footer boundary) */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent pointer-events-none" />
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
            © 2025 by All rights reserved.
            <br />
            <br />
            This site has no affiliation with Hotmart or Hotmart Company. It is
            also neither sponsored nor endorsed by Hotmart in any way. HOTMART
            is a registered trademark of Hotmart Company.
          </p>
        </div>
      </footer>
    </div>
  );
}