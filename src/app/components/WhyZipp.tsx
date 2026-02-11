import { motion } from "motion/react";
import { Check, Zap } from "lucide-react";
import zippLogo from "figma:asset/dd8d1c735f67ecb1d1a6c60639d0eabbb7676564.png";

const benefits = [
  "Smart defaults for every module — community-ready instantly",
  "No complex configuration required to get started",
  "Full customization available when you need it",
  "Professional embed design out of the box",
  "Persistent tracking systems that just work",
  "Built to scale from small communities to large servers",
  "Fully compliant with Discord's guidelines"
];

export function WhyZipp() {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 mb-6">
              <Zap className="w-4 h-4" />
              What Makes Us Different
            </div>
            <h2 className="text-4xl sm:text-5xl text-white mb-6">
              Why Zipp Stands Out
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Zipp is designed to be community-ready the moment setup is complete. Every module comes with smart server defaults, so you can start moderating immediately — no complicated configuration needed.
            </p>
            <p className="text-lg text-slate-500 mb-8">
              Prefer a custom approach? No problem. You have full control to edit and customize anything you want, whenever you want.
            </p>
            
            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 mt-1 p-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-slate-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 shadow-2xl">
              {/* Mock Discord-like interface */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-slate-700">
                  <img src={zippLogo} alt="Zipp" className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="text-white">Zipp</div>
                    <div className="text-xs text-slate-400">Online</div>
                  </div>
                </div>

                {/* Mock messages */}
                <div className="space-y-3">
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <div className="text-sm text-blue-400 mb-1">System Message</div>
                    <div className="text-slate-300">Thank you for adding Zipp!</div>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <div className="text-sm text-green-400 mb-1">Setup Complete</div>
                    <div className="text-slate-300">Your server is Zipp ready</div>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                    <div className="text-sm text-purple-400 mb-1">Staff Trial Started</div>
                    <div className="text-slate-300">Monitoring your new trial!</div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm shadow-lg">
                Live Demo
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-8 -right-8 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}