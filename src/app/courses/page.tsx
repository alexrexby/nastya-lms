"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  Calendar,
  Video,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Clock,
  GraduationCap,
  ChevronDown,
  BookOpen,
  FileCheck2,
  ShieldCheck,
  Check
} from "lucide-react";
import { DEMO_GROUPS, DEMO_COURSE_LESSONS } from "@/lib/demo-courses";

export default function CoursesPage() {
  const [selectedDirection, setSelectedDirection] = useState<"all" | "oge" | "ege" | "express">("all");
  const [openLessonId, setOpenLessonId] = useState<string | null>("lesson-1");

  return (
    <div className="bg-slate-50/70 min-h-screen pb-20">
      {/* 1. Верхний презентационный блок */}
      <section className="bg-white border-b border-slate-200/80 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brandOchre-50 text-brandOchre-900 border border-brandOchre-200 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brandOchre-700" />
              <span>Обучение с&nbsp;Анастасией Повышевой</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight text-balance">
              Курсы и&nbsp;мини-группы по&nbsp;химии: <span className="text-brandGreen-700 whitespace-nowrap">понять и&nbsp;сдать</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-pretty font-normal">
              Обучение в&nbsp;камерных мини-группах до&nbsp;6&nbsp;человек. Каждая группа занимается в&nbsp;своём темпе, имеет отдельный чат с&nbsp;преподавателем и&nbsp;<strong>собственные видеозаписи каждого прошедшего занятия</strong> в&nbsp;личном кабинете.
            </p>

            {/* Фильтр направлений */}
            <div className="pt-2 flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedDirection("all")}
                className={`min-h-[40px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedDirection === "all"
                    ? "bg-brandGreen-700 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Все форматы
              </button>
              <button
                onClick={() => setSelectedDirection("oge")}
                className={`min-h-[40px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedDirection === "oge"
                    ? "bg-brandGreen-700 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                ОГЭ (9&nbsp;класс)
              </button>
              <button
                onClick={() => setSelectedDirection("ege")}
                className={`min-h-[40px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedDirection === "ege"
                    ? "bg-brandGreen-700 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                ЕГЭ (10–11&nbsp;класс)
              </button>
              <button
                onClick={() => setSelectedDirection("express")}
                className={`min-h-[40px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedDirection === "express"
                    ? "bg-brandGreen-700 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Экспресс (8&nbsp;класс)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Карточки мини-групп */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Действующие мини-группы
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Выберите удобное расписание. Количество мест строго ограничено (до&nbsp;6&nbsp;человек в&nbsp;группе)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Группа А */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Бейджи статуса и направления */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brandGreen-50 text-brandGreen-800 border border-brandGreen-200 text-xs font-bold">
                  <Users className="w-3.5 h-3.5" />
                  <span>Мини-группа ОГЭ • до&nbsp;6&nbsp;чел.</span>
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200">
                  🔥 Осталось 2&nbsp;места
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  Группа А: Понедельник / Четверг
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Курс: <strong className="text-slate-700">ОГЭ Химия 2025/2026 на оценку «5»</strong>
                </p>
              </div>

              {/* Расписание и цена в аккуратных плашках */}
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Дни и время:
                  </span>
                  <div className="flex items-center gap-1.5 font-bold text-slate-800 text-xs sm:text-sm">
                    <Calendar className="w-3.5 h-3.5 text-brandGreen-700 shrink-0" />
                    <span>Пн, Чт в&nbsp;16:00 МСК</span>
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Стоимость:
                  </span>
                  <div className="font-black text-brandGreen-800 text-sm sm:text-base">
                    1&nbsp;600&nbsp;₽ <span className="text-xs font-normal text-slate-500">/ 90 мин</span>
                  </div>
                </div>
              </div>

              {/* Преимущества и особенности */}
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-brandGreen-100 text-brandGreen-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <span>Живые занятия в&nbsp;Zoom/Телемосте 2&nbsp;раза в&nbsp;неделю по&nbsp;90&nbsp;минут</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-brandOchre-100 text-brandOchre-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    🎥
                  </div>
                  <span>
                    <strong>Видеозапись именно этого урока:</strong> в&nbsp;кабинете сохраняются разборы вопросов учеников вашей группы
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-brandGreen-100 text-brandGreen-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <span>Ручная проверка домашних заданий 2-й&nbsp;части Анастасией Повышевой</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
              <Link
                href="/dashboard?group=group-mon-thu"
                className="flex-1 min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-brandGreen-700 hover:bg-brandGreen-800 text-white font-bold text-sm shadow-sm transition-all active:scale-95"
              >
                <span>Войти в&nbsp;кабинет группы</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Группа Б */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Бейджи статуса и направления */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brandGreen-50 text-brandGreen-800 border border-brandGreen-200 text-xs font-bold">
                  <Users className="w-3.5 h-3.5" />
                  <span>Мини-группа ЕГЭ • до&nbsp;6&nbsp;чел.</span>
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200">
                  Идёт набор (3&nbsp;места)
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  Группа Б: Вторник / Пятница
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Курс: <strong className="text-slate-700">ЕГЭ Химия 2025/2026 на 85+ баллов</strong>
                </p>
              </div>

              {/* Расписание и цена */}
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Дни и время:
                  </span>
                  <div className="flex items-center gap-1.5 font-bold text-slate-800 text-xs sm:text-sm">
                    <Calendar className="w-3.5 h-3.5 text-brandGreen-700 shrink-0" />
                    <span>Вт, Пт в&nbsp;18:30 МСК</span>
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Стоимость:
                  </span>
                  <div className="font-black text-brandGreen-800 text-sm sm:text-base">
                    1&nbsp;800&nbsp;₽ <span className="text-xs font-normal text-slate-500">/ 90 мин</span>
                  </div>
                </div>
              </div>

              {/* Преимущества и особенности */}
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-brandGreen-100 text-brandGreen-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <span>Глубокий разбор сложных 34-х расчетных задач и&nbsp;органического синтеза</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-brandOchre-100 text-brandOchre-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    🎥
                  </div>
                  <span>
                    <strong>Персональные видеозаписи:</strong> всегда можно пересмотреть разбор ошибок именно вашей группы
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-brandGreen-100 text-brandGreen-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <span>Еженедельные проверочные тесты формата ФИПИ</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
              <Link
                href="/dashboard?group=group-tue-fri"
                className="flex-1 min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-brandGreen-700 hover:bg-brandGreen-800 text-white font-bold text-sm shadow-sm transition-all active:scale-95"
              >
                <span>Войти в&nbsp;кабинет группы</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Интерактивная программа курса (Мастер-силлабус) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brandGreen-700 mb-1">
                <BookOpen className="w-4 h-4" />
                <span>Учебный план</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900">
                Мастер-программа курса (Силлабус)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Программа и банк заданий одинаковы для всех групп. Нажмите на тему, чтобы посмотреть содержание.
              </p>
            </div>
            <span className="text-xs font-bold text-slate-400 self-start sm:self-auto">
              Всего: {DEMO_COURSE_LESSONS.length}&nbsp;модульных темы
            </span>
          </div>

          <div className="space-y-3">
            {DEMO_COURSE_LESSONS.map((lesson) => {
              const isOpen = openLessonId === lesson.id;

              return (
                <div
                  key={lesson.id}
                  className={`rounded-2xl border transition-all ${
                    isOpen
                      ? "border-brandGreen-300 bg-brandGreen-50/20 shadow-sm"
                      : "border-slate-200 bg-slate-50/50 hover:bg-slate-50"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenLessonId(isOpen ? null : lesson.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-bold"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-xl bg-brandGreen-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {lesson.order}
                      </span>
                      <span className="text-sm sm:text-base text-slate-900">{lesson.title}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="hidden sm:inline text-xs font-semibold px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-600">
                        {lesson.testQuestionsCount}&nbsp;вопросов в&nbsp;тесте
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform ${
                          isOpen ? "rotate-180 text-brandGreen-700" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 border-t border-slate-200/60 text-xs sm:text-sm text-slate-600 space-y-3 animate-in fade-in duration-150">
                      <p className="font-medium text-slate-800">
                        {lesson.theoryContent.slice(0, 150)}...
                      </p>
                      <div className="flex items-center gap-3 pt-1">
                        <Link
                          href={`/dashboard/lessons/${lesson.id}`}
                          className="font-bold text-xs text-brandGreen-800 hover:text-brandGreen-900 inline-flex items-center gap-1"
                        >
                          <span>Открыть урок и видеозапись в классе</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
