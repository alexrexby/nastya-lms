"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save, CheckCircle } from "lucide-react";
import { DEMO_GROUPS, DEMO_COURSE_LESSONS } from "@/lib/demo-courses";

export function AdminGroupVideoManagerView({ groupId }: { groupId: string }) {
  const [selectedLessonId, setSelectedLessonId] = useState("lesson-1");
  const [videoUrl, setVideoUrl] = useState("https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ");
  const [videoTitle, setVideoTitle] = useState("Запись живого вебинара");
  const [recordedDate, setRecordedDate] = useState("Сегодня, 18:00");
  const [notes, setNotes] = useState("На занятии разобрали сложные примеры и вопросы учеников.");
  const [savedSuccess, setSavedSuccess] = useState(false);

  const group = DEMO_GROUPS.find((g) => g.id === groupId) || DEMO_GROUPS[0];
  const lesson = DEMO_COURSE_LESSONS.find((l) => l.id === selectedLessonId) || DEMO_COURSE_LESSONS[0];

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Назад */}
      <Link
        href="/admin"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-emerald-700 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Назад в панель учителя
      </Link>

      <div className="border-b border-slate-200 pb-6">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
          Управление группой
        </div>
        <h1 className="text-3xl font-black text-slate-900">{group.name}</h1>
        <p className="text-sm text-slate-500 mt-1">
          Расписание: {group.schedule} • Курс: {group.courseTitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Список уроков мастер-каркаса */}
        <div className="md:col-span-1 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Уроки мастер-программы:
          </h2>
          <div className="space-y-2">
            {DEMO_COURSE_LESSONS.map((l) => {
              const hasVideo = !!group.groupVideos[l.id];
              const isSelected = selectedLessonId === l.id;

              return (
                <button
                  key={l.id}
                  onClick={() => {
                    setSelectedLessonId(l.id);
                    const v = group.groupVideos[l.id];
                    if (v) {
                      setVideoUrl(v.videoUrl);
                      setVideoTitle(v.videoTitle);
                      setRecordedDate(v.recordedAt);
                      setNotes(v.notes || "");
                    }
                  }}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all ${
                    isSelected
                      ? "border-emerald-600 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-500"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <div className="truncate mr-2">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Урок {l.order}</span>
                    {l.title.replace(/^Урок \d+: /, "")}
                  </div>
                  {hasVideo && (
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" title="Видео загружено" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Форма добавления / редактирования видео урока */}
        <div className="md:col-span-2">
          <form
            onSubmit={handleSave}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Привязка видеозаписи к уроку
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">{lesson.title}</h3>
              <p className="text-xs text-slate-500 mt-1">
                Видео будет доступно <strong className="text-emerald-800">только ученикам этой группы ({group.name.split(":")[0]})</strong>.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Ссылка на видео (YouTube / VK Видео / Kinescope / RuTube):
                </label>
                <input
                  type="text"
                  required
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Название записи:
                </label>
                <input
                  type="text"
                  required
                  value={videoTitle}
                  onChange={(e) => setVideoTitle(e.target.value)}
                  placeholder="Например: Запись занятия от 22 ноября (Группа 1)"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Дата и время проведения:
                  </label>
                  <input
                    type="text"
                    value={recordedDate}
                    onChange={(e) => setRecordedDate(e.target.value)}
                    placeholder="Например: 22 ноября, 16:00"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Заметки для учеников этой группы (необязательно):
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Например: Обратите внимание на 34-ю минуту урока..."
                  className="w-full p-3.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              {savedSuccess ? (
                <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-100 px-3.5 py-2 rounded-xl">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Видеозапись успешно сохранена для {group.name.split(":")[0]}!
                </div>
              ) : <div />}

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow transition-all"
              >
                <Save className="w-4 h-4" /> Сохранить видео для группы
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
