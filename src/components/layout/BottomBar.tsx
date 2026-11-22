"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, CheckCircle2, Sparkles, User } from "lucide-react";

export const BottomBar = () => {
  const pathname = usePathname();

  const tabs = [
    { href: "/articles", label: "Теория", icon: BookOpen },
    { href: "/tests", label: "Тренажёр", icon: CheckCircle2 },
    { href: "/courses", label: "Курсы", icon: Sparkles },
    { href: "/dashboard", label: "Кабинет", icon: User },
  ];

  return (
    <nav
      aria-label="Мобильная навигация"
      className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 lg:hidden shadow-lg shadow-slate-900/10 pb-[max(0.5rem,env(safe-area-inset-bottom,0px))] px-[max(0.5rem,env(safe-area-inset-left,0px))]"
    >
      <div className="grid grid-cols-4 h-16">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname.startsWith(tab.href);

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center justify-center gap-1 transition-colors min-h-[44px] ${
                isActive
                  ? "text-brandGreen-700 font-bold"
                  : "text-slate-500 hover:text-slate-800 font-medium"
              }`}
            >
              <div
                className={`p-1 rounded-xl transition-all ${
                  isActive ? "bg-brandGreen-100 text-brandGreen-800 scale-110" : ""
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[11px] leading-none">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
