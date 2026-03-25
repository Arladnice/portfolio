import { Code2, Github, Mail, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-950/80 to-gray-950" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Frontend<span className="text-cyan-400">Dev</span>
              </span>
            </div>
            <p className="text-white/40 text-sm text-center md:text-left max-w-xs">
              Создаю современные интерактивные веб-интерфейсы от концепции до релиза
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Arladnice"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/waytonine"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
            >
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-white/20 text-sm">
            © {new Date().getFullYear()} FrontendDev Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
