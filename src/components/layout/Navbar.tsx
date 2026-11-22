"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  CheckCircle2,
  User,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";

export const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Лаконичные, непереносимые названия для идеальной горизонтальной линии
  const navLinks = [
    { href: "/articles", label: "Теория", icon: BookOpen },
    { href: "/tests", label: "Тренажёр", icon: CheckCircle2 },
    { href: "/courses", label: "Курсы", icon: Sparkles },
    { href: "/dashboard", label: "Кабинет", icon: User },
    { href: "/admin", label: "Учительская", icon: ShieldCheck },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
            
            {/* 1. Логотип Насти Повышевой (строго в 1 строку без разрывов) */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0 select-none">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-brandOchre-600 to-brandOchre-700 flex items-center justify-center p-1.5 sm:p-2 shadow-sm group-hover:scale-105 transition-transform shrink-0">
                <svg viewBox="0 0 40 40" className="w-full h-full text-white" fill="none" stroke="currentColor">
                  <line x1="12" y1="28" x2="22" y2="18" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  <line x1="22" y1="18" x2="30" y2="10" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="12" cy="28" r="5" fill="#1b6b38" stroke="white" strokeWidth="2.5" />
                  <circle cx="22" cy="18" r="4.5" fill="#1b6b38" stroke="white" strokeWidth="2.5" />
                  <circle cx="30" cy="10" r="4" fill="#1b6b38" stroke="white" strokeWidth="2.5" />
                </svg>
              </div>

              <div className="leading-tight whitespace-nowrap">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-black text-xl sm:text-2xl tracking-tight text-brandGreen-700 uppercase">
                    ХИМИЯ
                  </span>
                  <span className="hidden md:inline text-[11px] font-extrabold tracking-widest text-slate-700 uppercase">
                    ПОНЯТЬ И СДАТЬ
                  </span>
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-brandOchre-700 italic">
                  с&nbsp;Настей Повышевой
                </div>
              </div>
            </Link>

            {/* 2. Десктоп-навигация (строго в 1 строку, whitespace-nowrap, одинаковая высота) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((item) => {
                const Icon = item.icon;
                const isActive = pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`inline-flex items-center gap-2 h-10 px-3.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                      isActive
                        ? "bg-brandGreen-50 text-brandGreen-800 border border-brandGreen-200"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                    }`}
                  >
                    <Icon className="w-4 h-4 text-brandGreen-700 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* 3. Десктоп-кнопки справа (строго whitespace-nowrap) */}
            <div className="hidden lg:flex items-center gap-2.5 shrink-0">
              <a
                href="https://vk.ru/club201599659"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 h-10 px-3 rounded-xl text-xs font-bold text-slate-700 hover:text-brandGreen-800 border border-slate-200 hover:border-brandGreen-300 transition-colors whitespace-nowrap"
              >
                <span>Группа ВК</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </a>

              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center h-10 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-brandGreen-700 hover:bg-brandGreen-800 shadow-sm transition-all whitespace-nowrap hover:scale-[1.02] active:scale-95"
              >
                Войти в&nbsp;класс
              </Link>
            </div>

            {/* Мобильная кнопка бургера */}
            <div className="flex items-center lg:hidden shrink-0">
              <button
                type="button"
                aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-slate-700 hover:bg-slate-100 active:bg-slate-200 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Выдвижное мобильное меню (Drawer) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-white flex flex-col justify-between p-6 overflow-y-auto lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Навигация
            </div>

            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3.5 min-h-[48px] px-4 py-3 rounded-2xl text-base font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-brandGreen-50 text-brandGreen-800 border border-brandGreen-200"
                      : "text-slate-800 hover:bg-slate-50 active:bg-slate-100"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                    isActive ? "bg-brandGreen-700 text-white" : "bg-slate-100 text-slate-600"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-slate-100 space-y-3">
            <a
              href="https://vk.ru/club201599659"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 min-h-[48px] w-full text-sm font-bold text-slate-700 bg-slate-100 rounded-2xl whitespace-nowrap"
            >
              <span>Сообщество ВКонтакте (5&nbsp;900+ подписчиков)</span>
              <ExternalLink className="w-4 h-4 shrink-0" />
            </a>

            <Link
              href="/dashboard"
              className="flex items-center justify-center min-h-[48px] w-full text-base font-bold text-white bg-brandGreen-700 hover:bg-brandGreen-800 rounded-2xl shadow-md whitespace-nowrap"
            >
              Войти в&nbsp;личный кабинет
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
