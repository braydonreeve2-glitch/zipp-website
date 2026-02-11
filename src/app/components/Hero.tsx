import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import zippLogo from "figma:asset/dd8d1c735f67ecb1d1a6c60639d0eabbb7676564.png";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="text-center">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <img src={zippLogo} alt="Zipp Logo" className="w-20 h-20 sm:w-24 sm:h-24 rounded-full" />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight">
              Zipp
            </h1>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ 
              opacity: { duration: 0.6, delay: 0.2 },
              y: { duration: 0.6, delay: 0.2 },
              backgroundPosition: { 
                duration: 5, 
                repeat: Infinity, 
                ease: "linear" 
              }
            }}
            className="text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
            style={{ backgroundSize: '200% 100%' }}
          >
            The Future of Discord Moderation
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-12"
          >
            A next-generation moderation bot built for communities that want power, structure, and simplicity — without complicated setup.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://discord.com/oauth2/authorize?client_id=1468371727976370439&permissions=8&integration_type=0&scope=bot+applications.commands"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl text-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/50"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://discord.gg/zmWRZHWtzP"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded-xl text-lg transition-all duration-300"
            >
              Join Support Server
            </a>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-300"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Community-ready the moment setup is complete
          </motion.div>
        </div>
      </div>
    </div>
  );
}