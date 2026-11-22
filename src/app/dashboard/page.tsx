import Link from "next/link";
import { Users, Video, Calendar, ArrowRight, CheckCircle2, Clock, BookOpen } from "lucide-react";
import { DEMO_GROUPS, DEMO_COURSE_LESSONS } from "@/lib/demo-courses";

export default function StudentDashboardPage() {
  const currentGroup = DEMO_GROUPS[0]; // Группа А

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Шапка профиля ученика */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              Ученик
            </span>
            <span className="text-xs text-slate-400">Личный кабинет</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            Добро пожаловать, Александра! 👋
          </h1>
          <p className="mt-1 text-slate-600 text-sm">
            Ваша активная группа: <strong className="text-slate-900">{currentGroup.name}</strong>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <span className="text-slate-500 block">Расписание:</span>
            <strong className="text-slate-800">{currentGroup.schedule}</strong>
          </div>
          <Link
            href="/admin"
            className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
          >
            Перейти в режим учителя ⚙️
          </Link>
        </div>
      </div>

      {/* Список уроков группы */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            Уроки и видеозаписи вашей группы
          </h2>
          <span className="text-xs text-slate-500">Пройдено: 1 из {DEMO_COURSE_LESSONS.length}</span>
        </div>

        <div className="space-y-4">
          {DEMO_COURSE_LESSONS.map((lesson) => {
            const groupVideo = currentGroup.groupVideos[lesson.id];
            const hasVideo = !!groupVideo;

            return (
              <div
                key={lesson.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-emerald-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                      Урок {lesson.order}
                    </span>
                    {hasVideo ? (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                        <Video className="w-3.5 h-3.5" /> Запись занятия Группы А доступна
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
                        <Clock className="w-3.5 h-3.5" /> Скоро живое занятие
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">{lesson.title}</h3>

                  {hasVideo && (
                    <p className="text-xs text-slate-500">
                      Запись от: <span className="font-semibold text-slate-700">{groupVideo.recordedAt}</span>
                      {groupVideo.notes && ` • «${groupVideo.notes}»`}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href={`/dashboard/lessons/${lesson.id}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all"
                  >
                    Открыть урок <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
