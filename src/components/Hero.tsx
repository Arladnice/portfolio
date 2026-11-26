"use client";

import dynamic from "next/dynamic";
import { ChevronDown, Sparkles } from "lucide-react";

const AnimatedShaderBackground = dynamic(
  () => import("@/components/ui/animated-shader-background"),
  { ssr: false }
);

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Shader Background */}
      <AnimatedShaderBackground />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-white/80 font-medium">
            Денис Арлаков · 4+ года коммерческой разработки
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05] mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
          <span className="block">Frontend &amp;</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Fullstack Engineer
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-base sm:text-xl text-white/65 font-light mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          Создаю сложные веб-приложения, промышленные тренажёры с real-time телеметрией и 3D WebGL-визуализации на TypeScript, React 19 и Next.js
        </p>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105"
          >
            <span className="relative z-10">Смотреть проекты</span>
            <ChevronDown className="relative z-10 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white/5 border border-white/15 text-white/85 font-medium text-base sm:text-lg hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            Стек и архитектура
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/30" />
      </div>
    </section>
  );
}
