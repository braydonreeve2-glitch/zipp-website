import zippLogo from "figma:asset/dd8d1c735f67ecb1d1a6c60639d0eabbb7676564.png";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={zippLogo} alt="Zipp" className="w-8 h-8 rounded-full" />
            <span className="text-xl text-white">Zipp</span>
          </div>

          {/* Copyright */}
          <div className="text-slate-400 text-sm">
            © 2026 Zipp. All rights reserved.
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://discord.gg/zmWRZHWtzP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Support
            </a>
            <a
              href="https://docs.google.com/document/d/1MempACJrh7BpCuA7CCKlpTZlN-35nLj27UdEJHTJCNU/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="https://docs.google.com/document/d/1EjVLioLESGmre-1Ts78bpDP7LFCYkWbmmNPYhEAHiKE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}