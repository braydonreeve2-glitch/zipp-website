import { motion } from "motion/react";
import { Shield, Users, FlaskConical, MessageSquare, Lightbulb, Settings, Sparkles } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Moderation System",
    description: "Automate rule enforcement, streamline moderation workflows, and maintain a safe, organized server environment.",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Staff Management",
    description: "Easily manage your staff team with structured role systems, permissions, and oversight tools — ready out of the box with smart defaults.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: FlaskConical,
    title: "Staff Trials",
    description: "Run professional trial periods for moderators and administrators. Track performance, automate trial durations, and approve or deny with structured review tools.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: MessageSquare,
    title: "DM Assistance",
    description: "Members can privately contact staff through Zipp's guided DM system. Organized, structured, and delivered directly to the correct server channel.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Lightbulb,
    title: "Suggestions System",
    description: "Collect community feedback through private submissions and allow members to vote using an integrated approval system with real-time counts.",
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: Settings,
    title: "Server Dashboard",
    description: "Configure every module with precision using Zipp's centralized setup system.",
    color: "from-slate-500 to-zinc-500"
  }
];

export function Features() {
  return (
    <div className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Powerful Modular Design
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl text-white mb-4"
          >
            Everything You Need
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Built around configurable modules, allowing you to enable only what your server needs.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300"
            >
              {/* Gradient accent on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              
              <div className="relative">
                {/* Icon */}
                <div className={`inline-flex p-3 bg-gradient-to-br ${feature.color} rounded-xl mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl text-white mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
