"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Code2, ExternalLink, Github, Info, Lock, X } from "lucide-react";

export interface ProjectArchitecture {
  challenge: string;
  solution: string;
  stackDetails: string;
  testsAndDeploy: string;
}

export interface ProjectCardProps {
  title: string;
  categoryLabel: string;
  description: string;
  highlights: string[];
  image: string;
  liveUrl?: string;
  sourceUrl?: string;
  statusNote?: string;
  architecture: ProjectArchitecture;
  tags: string[];
  index: number;
}

/**
 * Карточка проекта с превью, ключевыми достижениями, ссылками на демо/код и модальным окном архитектуры.
 */
export default function ProjectCard({
  title,
  categoryLabel,
  description,
  highlights,
  image,
  liveUrl,
  sourceUrl,
  statusNote,
  architecture,
  tags,
  index,
}: ProjectCardProps) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  useEffect(() => {
    if (!detailsOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDetailsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [detailsOpen]);

  return (
    <>
      <article
        className="group relative flex flex-col rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] hover:border-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/5 hover:-translate-y-1.5"
        style={{ animationDelay: `${index * 120}ms` }}
      >
        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden bg-gray-950">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300" />

          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs font-medium text-cyan-300">
            {categoryLabel}
          </div>

          {liveUrl && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/25 text-white font-medium hover:bg-white/20 transition-all duration-200 hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                Открыть Live Demo
              </a>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
            {title}
          </h3>

          <p className="text-white/55 text-sm leading-relaxed mb-4">{description}</p>

          <ul className="space-y-1.5 mb-6 text-xs text-white/65">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-4 border-t border-white/[0.06]">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.03]"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Демо
              </a>
            )}
            {sourceUrl ? (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-white/80 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                <Github className="w-3.5 h-3.5" />
                Код
              </a>
            ) : (
              statusNote && (
                <span className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-amber-300/90 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                  <Lock className="w-3.5 h-3.5" />
                  {statusNote}
                </span>
              )
            )}
            <button
              type="button"
              onClick={() => setDetailsOpen(true)}
              className="ml-auto flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-lg hover:bg-cyan-500/20 transition-colors cursor-pointer"
            >
              <Info className="w-3.5 h-3.5" />
              Архитектура
            </button>
          </div>
        </div>
      </article>

      {/* Architecture Modal */}
      {detailsOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setDetailsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Архитектура проекта ${title}`}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl bg-gray-950 border border-white/15 p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setDetailsOpen(false)}
              aria-label="Закрыть окно"
              className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Code2 className="w-4 h-4" />
              {categoryLabel}
            </div>
            <h4 className="text-2xl font-bold text-white mb-5 pr-10">{title}</h4>

            <div className="space-y-4 text-sm">
              <div className="rounded-xl bg-white/[0.03] border border-white/[0.07] p-4">
                <div className="text-white/40 text-xs uppercase mb-1">Задача</div>
                <p className="text-white/85 leading-relaxed">{architecture.challenge}</p>
              </div>
              <div className="rounded-xl bg-white/[0.03] border border-white/[0.07] p-4">
                <div className="text-white/40 text-xs uppercase mb-1">Инженерное решение</div>
                <p className="text-white/85 leading-relaxed">{architecture.solution}</p>
              </div>
              <div className="rounded-xl bg-white/[0.03] border border-white/[0.07] p-4">
                <div className="text-white/40 text-xs uppercase mb-1">Стек и паттерны</div>
                <p className="text-white/85 leading-relaxed">{architecture.stackDetails}</p>
              </div>
              <div className="rounded-xl bg-white/[0.03] border border-white/[0.07] p-4">
                <div className="text-white/40 text-xs uppercase mb-1">Качество и деплой</div>
                <p className="text-white/85 leading-relaxed">{architecture.testsAndDeploy}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
