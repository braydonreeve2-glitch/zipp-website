import { motion } from "motion/react";
import { Zap, MessageCircle } from "lucide-react";
import zippLogo from "figma:asset/dd8d1c735f67ecb1d1a6c60639d0eabbb7676564.png";

export function CTA() {
  return (
    <div className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 rounded-3xl p-12 sm:p-16 overflow-hidden"
        >
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative text-center">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center mb-6"
            >
              <img src={zippLogo} alt="Zipp" className="w-16 h-16 rounded-full" />
            </motion.div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              Get Started Today
            </h2>
            
            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto mb-12">
              Transform your server with a smarter moderation system. Experience Discord management the way it should be — fast, organized, and powerful.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://discord.com/oauth2/authorize?client_id=1468371727976370439&permissions=8&integration_type=0&scope=bot+applications.commands"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white hover:bg-slate-100 text-blue-600 rounded-xl text-lg transition-all duration-300 flex items-center gap-2 shadow-xl"
              >
                Add to Discord
                <Zap className="w-5 h-5" />
              </a>
              <a
                href="https://discord.gg/zmWRZHWtzP"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl text-lg transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Join Support Server
              </a>
            </div>

            {/* Bottom text */}
            <p className="mt-8 text-blue-100/80 text-sm">
              Join thousands of communities already using Zipp
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}