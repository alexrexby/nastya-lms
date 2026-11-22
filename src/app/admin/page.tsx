"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  BookOpen,
  Video,
  Plus,
  ArrowRight,
  CheckCircle2,
  FileText,
  Sparkles,
  Edit,
  Trash2,
  Save,
  ArrowLeft
} from "lucide-react";
import { DEMO_GROUPS, DEMO_COURSE_LESSONS, DemoCourseLesson } from "@/lib/demo-courses";
import { ChemText } from "@/components/chemistry/ChemFormula";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<"lessons" | "groups" | "submissions">("lessons");
  const [lessons, setLessons] = useState<DemoCourseLesson[]>(DEMO_COURSE_LESSONS);
  const [showAddModal, setShowAddModal] = useState(false);

  // Состояние формы создания нового урока
  const [newTitle, setNewTitle] = useState("");
  const [newTheory, setNewTheory] = useState("");
  const [newHwPrompt, setNewHwPrompt] = useState("");
  const [newQuestionsCount, setNewQuestionsCount] = useState(4);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleCreateLesson = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newLesson: DemoCourseLesson = {
      id: `lesson-${lessons.length + 1}`,
      order: lessons.length + 1,
      title: `Урок ${lessons.length + 1}: ${newTitle}`,
      theoryContent: newTheory || "Конспект урока будет добавлен в ближайшее время.",
      homeworkPrompt: newHwPrompt || "Напишите уравнения реакций в тетради и прикрепите фото.",
      testQuestionsCount: newQuestionsCount,
    };

    setLessons([...lessons, newLesson]);
    setShowAddModal(false);
    setSaveSuccess(true);

    // Сброс полей
    setNewTitle("");
    setNewTheory("");
    setNewHwPrompt("");

    setTimeout(() => setSaveSuccess(false), 3500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Шапка учительской */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-brandGreen-400 bg-brandGreen-950/80 px-2.5 py-0.5 rounded-full border border-brandGreen-800">
              Преподаватель
            </span>
            <span className="text-xs text-slate-400">Учительская панель управления</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black">Учительская: Уроки, видео и&nbsp;ДЗ</h1>
          <p className="mt-1 text-slate-300 text-xs sm:text-sm max-w-2xl text-pretty">
            Здесь вы&nbsp;создаёте мастер-уроки курса, привязываете персональные видеозаписи занятий к&nbsp;каждой группе и&nbsp;проверяете работы учеников.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/dashboard"
            className="min-h-[44px] px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors inline-flex items-center gap-2"
          >
            Режим ученика 👤
          </Link>
        </div>
      </div>

      {saveSuccess && (
        <div className="p-4 bg-brandGreen-100 border border-brandGreen-300 rounded-2xl text-brandGreen-900 font-bold text-sm flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-brandGreen-700 shrink-0" />
          <span>Новый мастер-урок успешно добавлен в программу курса! Теперь к нему можно прикреплять видео для групп.</span>
        </div>
      )}

      {/* Вкладки переключения функционала */}
      <div className="flex border-b border-slate-200 overflow-x-auto gap-2 sm:gap-4 pb-2">
        <button
          onClick={() => setActiveTab("lessons")}
          className={`min-h-[44px] px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "lessons"
              ? "bg-brandGreen-700 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Уроки курса ({lessons.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("groups")}
          className={`min-h-[44px] px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "groups"
              ? "bg-brandGreen-700 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <Video className="w-4 h-4" />
          <span>Видео по&nbsp;группам ({DEMO_GROUPS.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("submissions")}
          className={`min-h-[44px] px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "submissions"
              ? "bg-brandGreen-700 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Проверка ДЗ (1)</span>
        </button>
      </div>

      {/* 1. ВКЛАДКА: УПРАВЛЕНИЕ УРОКАМИ КУРСА */}
      {activeTab === "lessons" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Мастер-каркас уроков (Программа)
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Урок создаётся один раз. Внутри каждой группы к&nbsp;нему загружается своё видео занятия.
              </p>
            </div>

            <button
              onClick={() => setShowAddModal(true)}
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-brandGreen-700 hover:bg-brandGreen-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>+ Добавить новый урок</span>
            </button>
          </div>

          <div className="space-y-4">
            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-brandGreen-300 transition-all"
              >
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brandGreen-800 bg-brandGreen-100 px-2 py-0.5 rounded-md">
                      Тема {lesson.order}
                    </span>
                    <span className="text-xs text-slate-400">
                      • {lesson.testQuestionsCount}&nbsp;вопросов в&nbsp;тесте
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{lesson.title}</h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {lesson.theoryContent.replace(/###/g, "").slice(0, 140)}...
                  </p>
                </div>

                <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                  <Link
                    href={`/dashboard/lessons/${lesson.id}`}
                    className="min-h-[40px] px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                  >
                    Посмотреть в классе
                  </Link>
                  <Link
                    href={`/admin/groups/group-mon-thu`}
                    className="min-h-[40px] px-3.5 py-2 rounded-xl bg-brandGreen-50 hover:bg-brandGreen-100 text-brandGreen-800 text-xs font-bold transition-colors flex items-center gap-1.5"
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Привязать видео</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. ВКЛАДКА: ВИДЕОЗАПИСИ ПО ГРУППАМ */}
      {activeTab === "groups" && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Мини-группы (Когорты с&nbsp;раздельным видео)
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Выберите группу, чтобы загрузить видеозапись прошедшего урока только для&nbsp;её учеников.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DEMO_GROUPS.map((group) => {
              const uploadedVideosCount = Object.keys(group.groupVideos).length;

              return (
                <div
                  key={group.id}
                  className="bg-white rounded-3xl p-6 border-2 border-brandGreen-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                        {group.schedule}
                      </span>
                      <span className="text-xs font-bold text-brandGreen-800 bg-brandGreen-50 px-2.5 py-1 rounded-full border border-brandGreen-200">
                        Видео: {uploadedVideosCount} из&nbsp;{lessons.length}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-slate-900 mb-1">{group.name}</h3>
                    <p className="text-xs text-slate-500 mb-6">
                      Курс: <strong className="text-slate-700">{group.courseTitle}</strong>
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Загруженные записи занятий:
                      </div>
                      {Object.entries(group.groupVideos).map(([lId, v]) => (
                        <div key={lId} className="flex items-center justify-between text-xs p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <span className="font-bold text-slate-800 truncate mr-2">{v.videoTitle}</span>
                          <span className="text-slate-500 shrink-0">{v.recordedAt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/admin/groups/${group.id}`}
                    className="min-h-[44px] w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-brandGreen-700 hover:bg-brandGreen-800 text-white font-bold text-xs shadow-sm transition-all"
                  >
                    <Video className="w-4 h-4" />
                    <span>Управлять видеоуроками группы</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. ВКЛАДКА: ПРОВЕРКА ДЗ */}
      {activeTab === "submissions" && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Сданные домашние работы (Часть 2)
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Ученики прикрепляют фотографии тетрадей. Здесь вы&nbsp;проверяете решение и&nbsp;выставляете оценку.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-brandOchre-300 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-brandOchre-900 bg-brandOchre-100 px-2 py-0.5 rounded-md">
                  Группа А (Пн/Чт)
                </span>
                <span className="text-xs text-slate-500">Сдано сегодня в 17:45</span>
              </div>
              <h3 className="text-base font-black text-slate-900">
                Александра Смирнова: Урок 1 (Электронные конфигурации)
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Прикреплено: 2 фото страниц тетради • Вопрос: «В пункте б сомневаюсь насчет степени окисления...»
              </p>
            </div>

            <Link
              href="/dashboard/lessons/lesson-1"
              className="min-h-[44px] px-5 py-2.5 rounded-2xl bg-brandOchre-600 hover:bg-brandOchre-700 text-white text-xs font-bold transition-colors shrink-0 text-center inline-flex items-center justify-center"
            >
              Открыть и оценить тетрадь
            </Link>
          </div>
        </div>
      )}

      {/* МОДАЛЬНОЕ ОКНО ДОБАВЛЕНИЯ НОВОГО УРОКА */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 my-8 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-brandGreen-800 bg-brandGreen-100 px-2.5 py-0.5 rounded-md">
                  Конструктор курса
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  Добавление нового мастер-урока
                </h3>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-lg"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateLesson} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Название темы урока:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Например: Окислительно-восстановительные реакции (ОВР)"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brandGreen-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Конспект и шпаргалка к уроку (поддерживает формулы KaTeX):
                </label>
                <textarea
                  rows={4}
                  placeholder="Вставьте теоретический материал, реакции вида \text{Fe}^{3+} + 3\text{OH}^- \rightarrow \text{Fe(OH)}_3\downarrow..."
                  value={newTheory}
                  onChange={(e) => setNewTheory(e.target.value)}
                  className="w-full p-4 rounded-2xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brandGreen-600 font-mono text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Домашнее задание 2-й части (для решения в тетради):
                </label>
                <textarea
                  rows={3}
                  placeholder="Например: 1. Составьте электронный баланс для реакции... 2. Напишите молекулярное уравнение..."
                  value={newHwPrompt}
                  onChange={(e) => setNewHwPrompt(e.target.value)}
                  className="w-full p-4 rounded-2xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brandGreen-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Количество вопросов в проверочном тесте:
                </label>
                <input
                  type="number"
                  min={1}
                  max={20}
                  value={newQuestionsCount}
                  onChange={(e) => setNewQuestionsCount(parseInt(e.target.value) || 4)}
                  className="w-32 px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-brandGreen-600"
                />
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="min-h-[44px] px-5 py-2.5 rounded-2xl border border-slate-300 text-slate-700 font-bold text-xs"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  className="min-h-[44px] px-6 py-2.5 rounded-2xl bg-brandGreen-700 hover:bg-brandGreen-800 text-white font-bold text-xs sm:text-sm shadow-md"
                >
                  Сохранить и создать урок
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
