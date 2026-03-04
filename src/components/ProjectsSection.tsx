"use client";

import ProjectCard from "./ProjectCard";
import { Rocket } from "lucide-react";

const projects = [
  {
    title: "Knight's Crash Game",
    description:
      "3D краш-игра с средневековым рыцарем, бегущим по подземелью. Реал-тайм мультиплеер через WebSocket, ставки с множителями и авто-кэшаут. Three.js для 3D-графики.",
    image: "/crash-game.png",
    liveUrl: "https://crash-game-client.onrender.com/",
    tags: ["React", "Three.js", "WebSocket", "Node.js", "3D"],
  },
  {
    title: "2048",
    description:
      "Классическая логическая игра 2048 с поддержкой свайпов, клавиатуры и кнопок управления. Анимации плиток, сохранение лучшего результата, адаптивный дизайн.",
    image: "/2048-game.png",
    liveUrl: "https://cto-newtest.github.io/2048/",
    tags: ["HTML5", "CSS3", "JavaScript", "Canvas"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Rocket className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-white/70 font-medium">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Мои{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Проекты
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/40">
            Каждый проект — это уникальный опыт, от концепции до релиза
          </p>
          {/* Decorative line */}
          <div className="mt-8 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
