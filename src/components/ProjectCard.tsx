"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  sourceUrl?: string;
  tags: string[];
  index: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  liveUrl,
  sourceUrl,
  tags,
  index,
}: ProjectCardProps) {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] hover:border-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/5 hover:-translate-y-2"
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Play Button on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-200 hover:scale-105"
          >
            <ExternalLink className="w-4 h-4" />
            Перейти
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Links */}
        <div className="flex items-center gap-3">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Открыть
          </a>
          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/70 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <Github className="w-3.5 h-3.5" />
              Код
            </a>
          )}
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
    </div>
  );
}
