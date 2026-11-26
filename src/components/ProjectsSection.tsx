"use client";

import { useState } from "react";
import { Rocket } from "lucide-react";
import ProjectCard, { type ProjectCardProps } from "./ProjectCard";
import jobfinderImg from "../../public/jobfinder.png";
import drawitImg from "../../public/drawit.png";
import elouImg from "../../public/elou-avt.png";
import crashGameImg from "../../public/crash-game.png";

type ProjectCategory = "all" | "ai" | "fullstack" | "frontend";

interface PortfolioProject extends Omit<ProjectCardProps, "index"> {
  categories: Exclude<ProjectCategory, "all">[];
}

const CATEGORIES: Array<{ id: ProjectCategory; label: string }> = [
  { id: "all", label: "Все проекты (4)" },
  { id: "ai", label: "AI & LLM" },
  { id: "fullstack", label: "Fullstack & Real-time" },
  { id: "frontend", label: "Графика & Редакторы" },
];

const projects: PortfolioProject[] = [
  {
    title: "JobFinder AI",
    categoryLabel: "AI & Fullstack SaaS",
    categories: ["ai", "fullstack"],
    description:
      "Гибридная платформа анализа вакансий (hh.ru JSON / текст), скоринга соответствия резюме, фильтрации ГПХ/СЗ/ИП и потоковой генерации сопроводительных писем через SSE.",
    highlights: [
      "Импорт JSON-выгрузок, расчёт net-оплаты, фильтр стоп-факторов и пробелов стека",
      "SSE-стриминг писем (OpenAI-compatible backend или автономный браузерный Demo Engine)",
      "TanStack Table v8 + dnd-kit Kanban-воронка откликов + React Hook Form & Zod",
    ],
    image: jobfinderImg.src,
    liveUrl: "https://arladnice.github.io/jobfinder-ai/",
    sourceUrl: "https://github.com/Arladnice/jobfinder-ai",
    tags: ["Next.js 16", "TypeScript", "FSD", "SSE Streaming", "Express", "Docker"],
    architecture: {
      challenge:
        "Автоматизировать разбор десятков вакансий с фильтрацией нерелевантного стека и подготовкой персонализированных откликов без привязки к одному LLM-провайдеру.",
      solution:
        "Клиент спроектирован по Feature-Sliced Design с общими Zod-контрактами и единым алгоритмом скоринга для браузера и Node.js/Express SSE-сервера. На GitHub Pages работает автономный Demo Mode, а локально/в Docker — полноценный API.",
      stackDetails:
        "Next.js 16 (App Router, Static Export), React 19, TypeScript strict, Zustand, TanStack Query & Table, @dnd-kit, Express SSE + JSON persistence.",
      testsAndDeploy:
        "Unit-тесты на Vitest, E2E сценарий на Playwright (Chromium), многоконтейнерный Docker Compose и CI/CD на GitHub Pages.",
    },
  },
  {
    title: "DrawIt Diagram Editor",
    categoryLabel: "Visual Editor & Graphs",
    categories: ["frontend"],
    description:
      "Мощный визуальный редактор диаграмм и архитектурных схем с поддержкой Mermaid (импорт/экспорт и генерация из текста), кастомных узлов, слоёв и авто-компоновки.",
    highlights: [
      "10+ типов интерактивных фигур, ER/табличные узлы, Undo/Redo и привязка к сетке",
      "Двусторонняя поддержка Mermaid (.mmd): парсинг блок-схем и генерация из описания",
      "Экспорт в PNG, SVG, PDF (jsPDF), JSON + горячие клавиши и палитра цветов",
    ],
    image: drawitImg.src,
    liveUrl: "https://arladnice.github.io/drawit/",
    sourceUrl: "https://github.com/Arladnice/drawit",
    tags: ["Next.js 15", "React Flow", "TypeScript", "Zustand", "Mermaid", "Playwright"],
    architecture: {
      challenge:
        "Обеспечить плавную работу сложного графового холста с десятками узлов, историей изменений и двусторонней синхронизацией текстового представления Mermaid.",
      solution:
        "Состояние вынесено в модульный Zustand-стор со слайсами и useShallow-селекторами. Написан собственный Unicode-безопасный парсер и генератор Mermaid с авто-расстановкой узлов.",
      stackDetails:
        "Next.js 15, React, TypeScript, @xyflow/react (React Flow), Zustand + Immer/slices, Tailwind CSS, Radix UI, jsPDF.",
      testsAndDeploy:
        "61 unit-тест (Vitest + Testing Library), набор сквозных Playwright E2E-тестов (включая экспорт/импорт и Mermaid) и автодеплой на GitHub Pages.",
    },
  },
  {
    title: "КТК ЭЛОУ-АВТ (Smart Tutor)",
    categoryLabel: "Industrial ML & WebSocket",
    categories: ["fullstack", "ai"],
    description:
      "Компьютерный тренажёр технологического персонала НПЗ с real-time телеметрией (1 Гц), 3D-визуализацией установки и ML-модуль прогнозирования технологических рисков.",
    highlights: [
      "Живая мнемосхема, 3D-сцены узлов (Three.js) и графики телеметрии через WebSocket",
      "Онлайн-детектор аномалий и прогноз аварийного риска за 15с на PyTorch + ONNX Runtime",
      "7 тренировочных сценариев, RBAC-авторизация (JWT) и защищённый аудит действий (HMAC)",
    ],
    image: elouImg.src,
    liveUrl: "https://elou-avt-smart-tutor-ngjl.onrender.com/",
    sourceUrl: "https://github.com/Arladnice/elou-avt-smart-tutor",
    tags: ["React 19", "FastAPI", "WebSocket", "ONNX Runtime", "Three.js", "Recharts"],
    architecture: {
      challenge:
        "Связать физическую модель ректификации, низколатентный WebSocket-стрим телеметрии и ML-инференс в отзывчивый интерфейс оператора и инструктора.",
      solution:
        "Разделены FastAPI backend (физический симулятор + ONNX-инференс + SQLite журнал с HMAC-подписями) и React 19 UI с ролевым доступом и управлением аварийными сценариями.",
      stackDetails:
        "React 19, TypeScript, Ant Design, styled-components, Recharts, Three.js + Python 3.12, FastAPI, Pydantic v2, PyTorch / ONNX.",
      testsAndDeploy:
        "351 backend-тест и 53 frontend-теста, продакшен-деплой фронтенда на Vercel и API-сервера на Render.",
    },
  },
  {
    title: "Knight's Crash Game",
    categoryLabel: "Real-time 3D WebGL",
    categories: ["fullstack", "frontend"],
    description:
      "Мультиплеерная 3D crash-игра в фэнтези-сеттинге: рыцарь бежит по подземелью с растущим множителем ставок, авто-кэшаутом и локальным Demo-симулятором при оффлайне.",
    highlights: [
      "3D-рендеринг сцены и GLTF-анимаций рыцаря и дракона на Three.js / React Three Fiber",
      "Двусторонний Socket.IO протокол с авторитативным сервером раундов и историей",
      "Автономный клиентский Demo-симулятор с ботами на случай отсутствия сервера",
    ],
    image: crashGameImg.src,
    statusNote: "Private Repo · Demo готов в ветке",
    tags: ["React", "Three.js", "Socket.IO", "TypeScript", "Node.js", "Zustand"],
    architecture: {
      challenge:
        "Синхронизировать 3D-анимацию и растущий коэффициент между сервером и клиентами, сохранив работоспособность демонстрации без активного игрового сервера.",
      solution:
        "Реализован единый типизированный контракт событий в shared/ и гибридный Zustand-стор, который автоматически переключается в локальную физическую симуляцию раундов при недоступности WebSocket.",
      stackDetails:
        "React, TypeScript, Three.js / @react-three/fiber & drei, Tailwind CSS, Zustand, Node.js, Socket.IO.",
      testsAndDeploy:
        "Строгая типизация клиент-серверных контрактов, ESLint, Vite production build и настроенный workflow деплоя статического бандла.",
    },
  },
];

/**
 * Секция проектов портфолио с фильтрацией по направлениям и карточками архитектуры.
 */
export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const visibleProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Rocket className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-white/70 font-medium">Избранные проекты</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-5 tracking-tight">
            Мои{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Проекты
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/45 mb-8">
            Реальные fullstack- и frontend-системы: от AI-сервисов с SSE и визуальных редакторов до промышленных симуляторов и 3D WebGL
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer border ${
                    isActive
                      ? "bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/20"
                      : "bg-white/[0.04] text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
