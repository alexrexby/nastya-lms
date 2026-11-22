import { CheckCircle2, Filter, FlaskConical, Sparkles } from "lucide-react";
import { DEMO_TRAINER_QUESTIONS } from "@/lib/demo-data";
import { QuizPlayer } from "@/components/quiz/QuizPlayer";

export default function TestsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-3">
          <FlaskConical className="w-3.5 h-3.5" />
          Интерактивный тренажёр
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Тренажёр заданий ЕГЭ и ОГЭ по химии
        </h1>
        <p className="mt-3 text-slate-600 text-base leading-relaxed">
          Практикуйтесь в решении заданий реального формата: множественный выбор, задания на соответствие (вещества и реагенты), и расчетные задачи. После ответа сразу доступен подробный разбор реакции.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Боковая панель тем */}
        <aside className="lg:col-span-1 space-y-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5" /> Темы заданий
            </h3>
            <ul className="space-y-1.5 text-sm font-medium">
              <li>
                <button className="w-full text-left px-3 py-2 rounded-lg bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                  Все темы ({DEMO_TRAINER_QUESTIONS.length})
                </button>
              </li>
              <li>
                <button className="w-full text-left px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
                  Строение атома (Линия 1)
                </button>
              </li>
              <li>
                <button className="w-full text-left px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
                  Качественные реакции (Линия 7, 24)
                </button>
              </li>
              <li>
                <button className="w-full text-left px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
                  Задачи на растворы (Линия 26)
                </button>
              </li>
            </ul>
          </div>

          <div className="bg-emerald-900 text-white p-5 rounded-2xl shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-emerald-300 mb-2">
              <Sparkles className="w-4 h-4" /> Совет репетитора
            </div>
            <p className="text-xs leading-relaxed text-emerald-100">
              В заданиях на соответствие всегда записывайте уравнения на черновике и сверяйте заряды ионов перед выбором ответа.
            </p>
          </div>
        </aside>

        {/* Основной блок тренажера */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <QuizPlayer
              questions={DEMO_TRAINER_QUESTIONS}
              title="Комплексный блок заданий (Линии 1, 7, 24, 26)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
