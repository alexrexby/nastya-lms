"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Video, BookOpen, CheckCircle, Upload, Send, Clock } from "lucide-react";
import { DEMO_COURSE_LESSONS, DEMO_GROUPS } from "@/lib/demo-courses";
import { DEMO_TRAINER_QUESTIONS } from "@/lib/demo-data";
import { ChemText } from "@/components/chemistry/ChemFormula";
import { QuizPlayer } from "@/components/quiz/QuizPlayer";

export function StudentLessonView({ lessonId }: { lessonId: string }) {
  const [selectedGroupId, setSelectedGroupId] = useState("group-mon-thu");
  const [hwText, setHwText] = useState("");
  const [hwPhotos, setHwPhotos] = useState<string[]>([
    "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80",
  ]);
  const [hwSubmitted, setHwSubmitted] = useState(false);

  const lesson = DEMO_COURSE_LESSONS.find((l) => l.id === lessonId) || DEMO_COURSE_LESSONS[0];
  const group = DEMO_GROUPS.find((g) => g.id === selectedGroupId) || DEMO_GROUPS[0];
  const groupVideo = group.groupVideos[lesson.id];

  const handleAddSamplePhoto = () => {
    setHwPhotos((prev) => [
      ...prev,
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=80",
    ]);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 sm:space-y-10">
      {/* Навигация и переключатель когорты */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-brandGreen-700 transition-colors min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" /> Назад в личный кабинет
        </Link>

        {/* Переключатель группы */}
        <div className="flex flex-wrap items-center gap-2 bg-slate-100 p-1.5 rounded-2xl text-xs font-semibold">
          <span className="text-slate-500 pl-2 text-[11px]">Просмотр группы:</span>
          {DEMO_GROUPS.map((g) => (
            <button
              key={g.id}
              onClick={() => setSelectedGroupId(g.id)}
              className={`min-h-[36px] px-3.5 py-1.5 rounded-xl transition-all ${
                selectedGroupId === g.id
                  ? "bg-white text-brandGreen-800 shadow-sm font-bold border border-slate-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {g.name.split(":")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Заголовок урока */}
      <div className="space-y-1">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-brandGreen-800">
          <span className="px-2.5 py-0.5 rounded-md bg-brandGreen-100">Урок {lesson.order}</span>
          <span>•</span>
          <span className="text-slate-600">{group.name}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
          {lesson.title}
        </h1>
      </div>

      {/* 1. Блок видеозаписи именно этой группы */}
      <section className="bg-white rounded-3xl p-4 sm:p-7 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <Video className="w-5 h-5 text-brandGreen-700 shrink-0" />
            Запись занятия {group.name.split(":")[0]}
          </h2>
          {groupVideo && (
            <span className="text-xs text-slate-500 font-medium">{groupVideo.recordedAt}</span>
          )}
        </div>

        {groupVideo ? (
          <div className="space-y-3">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
              <iframe
                src={groupVideo.videoUrl}
                title={groupVideo.videoTitle}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {groupVideo.notes && (
              <div className="p-3.5 bg-brandGreen-50/70 border border-brandGreen-200 rounded-2xl text-xs sm:text-sm text-brandGreen-950">
                <strong className="block mb-0.5 text-brandGreen-900">Заметка Насти Повышевой к уроку вашей группы:</strong>
                {groupVideo.notes}
              </div>
            )}
          </div>
        ) : (
          <div className="p-8 sm:p-12 text-center rounded-2xl bg-slate-50 border border-dashed border-slate-300">
            <Clock className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-700">Видеозапись занятия ещё не добавлена</p>
            <p className="text-xs text-slate-500 mt-1">Она появится сразу после проведения живого урока вашей группы.</p>
          </div>
        )}
      </section>

      {/* 2. Конспект и теория мастер-урока */}
      <section className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-brandOchre-700 shrink-0" />
          Конспект и шпаргалка к уроку
        </h2>
        <div className="prose prose-slate max-w-none text-slate-800 text-sm sm:text-base leading-relaxed">
          <ChemText text={lesson.theoryContent} />
        </div>
      </section>

      {/* 3. Проверочный тест к уроку */}
      <section className="bg-white rounded-3xl p-4 sm:p-8 border border-slate-200 shadow-sm">
        <QuizPlayer
          questions={DEMO_TRAINER_QUESTIONS.slice(0, 2)}
          title={`Проверочный тест: ${lesson.title}`}
        />
      </section>

      {/* 4. Домашнее задание 2-й части */}
      <section className="bg-white rounded-3xl p-5 sm:p-8 border-2 border-brandOchre-200 shadow-sm space-y-6">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-brandOchre-900 bg-brandOchre-100 px-3 py-1 rounded-full border border-brandOchre-300">
            Часть 2 • Рукописное решение
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
            Сдача домашнего задания
          </h2>
          <div className="mt-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800">
            <ChemText text={lesson.homeworkPrompt} />
          </div>
        </div>

        {/* Форма сдачи со смартфона */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Фотографии страниц тетради:
            </label>
            <div className="flex flex-wrap gap-3 items-center">
              {hwPhotos.map((url, i) => (
                <div key={i} className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-slate-300 shadow-sm">
                  <img src={url} alt={`Страница ${i + 1}`} className="w-full h-full object-cover" />
                  <span className="absolute bottom-1 right-1 bg-black/75 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                    Стр. {i + 1}
                  </span>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddSamplePhoto}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-2 border-dashed border-brandOchre-400 hover:border-brandGreen-600 bg-brandOchre-50/50 hover:bg-brandGreen-50 flex flex-col items-center justify-center text-brandOchre-800 transition-colors active:scale-95"
              >
                <Upload className="w-5 h-5 mb-1" />
                <span className="text-[11px] font-bold">+ Фото</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Ваш вопрос или комментарий Насте:
            </label>
            <textarea
              rows={3}
              value={hwText}
              onChange={(e) => setHwText(e.target.value)}
              placeholder="Например: В пункте б сомневаюсь насчет степени окисления фосфора..."
              className="w-full p-4 rounded-2xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brandGreen-600"
            />
          </div>

          <div className="pt-2">
            {hwSubmitted ? (
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-brandGreen-900 bg-brandGreen-100 p-4 rounded-2xl border border-brandGreen-300">
                <CheckCircle className="w-5 h-5 text-brandGreen-700 shrink-0" />
                <span>ДЗ успешно отправлено на проверку! Анастасия проверит решение в тетради и выставит баллы.</span>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setHwSubmitted(true)}
                className="min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-2xl bg-brandGreen-700 hover:bg-brandGreen-800 text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <Send className="w-4 h-4" /> Отправить решение на проверку
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
