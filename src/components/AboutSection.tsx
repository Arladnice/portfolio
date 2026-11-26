import { Cpu, Layers, ShieldCheck, Terminal } from "lucide-react";

const highlights = [
  {
    icon: Terminal,
    metric: "4+ года",
    title: "Коммерческая разработка",
    description:
      "Финтех и высоконагруженные enterprise-системы: React, Next.js, TypeScript и продуктовый fullstack.",
  },
  {
    icon: Layers,
    metric: "FSD + ACL",
    title: "Масштабируемая архитектура",
    description:
      "Feature-Sliced Design, строгое разделение слоёв, валидация API-контрактов на границе через Zod.",
  },
  {
    icon: Cpu,
    metric: "AI & Real-time",
    title: "SSE-стриминг и WebSocket",
    description:
      "Интеграция LLM-пайплайнов, потоковые ответы, 1s-телеметрия промышленных установок и 3D-графика.",
  },
  {
    icon: ShieldCheck,
    metric: "QA & DevOps",
    title: "Надёжность и автотесты",
    description:
      "Unit и E2E покрытие на Vitest и Playwright, Docker Compose и автоматический CI/CD через GitHub Actions.",
  },
];

const stackGroups = [
  {
    title: "Frontend Core",
    items: ["React 19", "Next.js (App Router)", "TypeScript (strict)", "Tailwind CSS v4", "Zustand / Redux Toolkit"],
  },
  {
    title: "Data & Forms",
    items: ["TanStack Query v5", "TanStack Table v8", "React Hook Form", "Zod", "dnd-kit"],
  },
  {
    title: "Backend & Realtime",
    items: ["Node.js / Express", "Python / FastAPI", "SSE & WebSocket / Socket.IO", "REST API / OpenAPI", "Docker"],
  },
  {
    title: "Графика и QA",
    items: ["React Flow", "Three.js / R3F", "Recharts", "Vitest / Testing Library", "Playwright E2E"],
  },
];

/**
 * Секция с инженерным профилем, ключевыми компетенциями и стеком технологий.
 */
export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6 border-t border-white/5 bg-gray-950/60">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-5">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-white/70 font-medium">Инженерный профиль</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Опыт и{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Технологии
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/45">
            Фокус на поддерживаемый код, предсказуемое состояние, быстрый UX и измеримое качество от первого коммита до продакшена
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl p-6 bg-white/[0.03] border border-white/[0.06] hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                    {item.metric}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stack Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stackGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl p-5 bg-black/50 border border-white/[0.06]"
            >
              <h3 className="text-sm font-semibold text-white/85 mb-3 uppercase tracking-wider">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.items.map((tech) => (
                  <li key={tech} className="text-sm text-white/55 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
