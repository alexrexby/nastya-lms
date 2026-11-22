import Link from "next/link";
import { CheckCircle, Users, ArrowRight, Sparkles, Award, Star, ExternalLink } from "lucide-react";
import { DEMO_ARTICLES, DEMO_TRAINER_QUESTIONS } from "@/lib/demo-data";
import { QuizPlayer } from "@/components/quiz/QuizPlayer";

export default function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-20 pb-16">
      {/* 1. Главный экран (Hero) в фирменном стиле Насти Повышевой */}
      <section className="relative overflow-hidden pt-6 pb-12 sm:pt-14 sm:pb-20 bg-gradient-to-b from-brandGreen-50/70 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Текстовая колонка */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
              <div className="inline-flex flex-wrap items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brandOchre-100/90 text-brandOchre-900 text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-brandOchre-300 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brandOchre-700 shrink-0" />
                <span className="whitespace-nowrap">Химия: понять и&nbsp;сдать!</span>
                <span className="text-brandOchre-400">•</span>
                <span className="whitespace-nowrap">ОГЭ и&nbsp;ЕГЭ 2025/2026</span>
              </div>

              {/* Заголовок: выверенная ритмика без висячих слов */}
              <h1 className="text-[28px] sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.18] sm:leading-[1.12]">
                Химию можно <span className="text-brandGreen-700 whitespace-nowrap">понять и&nbsp;сдать</span> без&nbsp;зубрёжки
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                На&nbsp;связи Анастасия Олеговна Повышева&nbsp;— преподаватель, автор курсов и&nbsp;наглядных пособий. Здесь собраны открытые конспекты, тренажёр реакций и&nbsp;личный кабинет для&nbsp;мини-групп с&nbsp;персональными видеозаписями каждого урока.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  href="/tests"
                  className="inline-flex items-center justify-center min-h-[48px] px-7 py-3.5 rounded-2xl bg-brandGreen-700 hover:bg-brandGreen-800 text-white font-bold text-base shadow-lg shadow-brandGreen-700/20 transition-all active:scale-95 text-center"
                >
                  Решать тренажёр заданий
                </Link>
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center min-h-[48px] gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border-2 border-brandOchre-400 shadow-sm transition-all active:scale-95 text-center"
                >
                  <Users className="w-5 h-5 text-brandOchre-700 shrink-0" />
                  <span>Выбрать группу</span>
                </Link>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold text-slate-600">
                <span className="flex items-center gap-1.5 whitespace-nowrap">
                  <Star className="w-4 h-4 text-brandOchre-600 fill-brandOchre-600 shrink-0" />
                  <span>Рейтинг 5.0&nbsp;★</span>
                  <span className="text-slate-400 font-normal">(5&nbsp;900+ в&nbsp;ВК)</span>
                </span>
                <span className="flex items-center gap-1.5 whitespace-nowrap">
                  <CheckCircle className="w-4 h-4 text-brandGreen-700 shrink-0" />
                  <span>Видеозапись для&nbsp;каждой группы</span>
                </span>
              </div>
            </div>

            {/* Карточка-баннер */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-5 sm:p-7 border-2 border-brandGreen-100 shadow-xl shadow-brandGreen-700/5 space-y-5">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-brandGreen-700 text-white flex items-center justify-center font-black text-base border-2 border-brandOchre-400 shrink-0">
                    НП
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-base">Анастасия Повышева</h3>
                    <p className="text-xs text-slate-500 font-medium">Репетитор по&nbsp;химии • 14&nbsp;отзывов 5.0&nbsp;★</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <div className="p-3.5 rounded-2xl bg-brandOchre-50 border border-brandOchre-200">
                    <span className="font-bold text-brandOchre-900 block mb-1">🎯 Формат мини-групп:</span>
                    Занятия 2&nbsp;раза в&nbsp;неделю. У&nbsp;каждой группы своё расписание, чат и&nbsp;персональная запись каждого урока в&nbsp;личном кабинете.
                  </div>
                  <div className="p-3.5 rounded-2xl bg-brandGreen-50 border border-brandGreen-200">
                    <span className="font-bold text-brandGreen-900 block mb-1">📖 Практика и&nbsp;тренажёр:</span>
                    Тесты с&nbsp;мгновенным разбором реакций, формулами и&nbsp;ручной проверкой 2-й&nbsp;части.
                  </div>
                </div>

                <a
                  href="https://vk.ru/club201599659"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] w-full inline-flex items-center justify-center gap-2 text-xs font-bold text-brandGreen-800 hover:text-brandGreen-900 py-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors"
                >
                  <span>Открыть сообщество ВКонтакте</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Популярные программы и товары */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left sm:text-center max-w-2xl sm:mx-auto mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brandOchre-700 bg-brandOchre-50 px-3 py-1 rounded-full border border-brandOchre-200">
            Каталог направлений
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
            Курсы, мини-группы и&nbsp;учебные пособия
          </h2>
          <p className="mt-1.5 text-slate-600 text-xs sm:text-sm">
            Выберите подходящую программу для&nbsp;устранения пробелов или&nbsp;подготовки к&nbsp;экзаменам
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* Курс 8 класс */}
          <div className="bg-white rounded-3xl border-2 border-brandOchre-200 p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow h-full">
            <div>
              <div className="w-full min-h-[120px] rounded-2xl bg-gradient-to-tr from-brandOchre-600 to-amber-500 p-4 sm:p-5 text-white flex flex-col justify-between mb-4">
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-black/20 self-start px-2 py-0.5 rounded-full">
                  Экспресс-курс
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-black leading-tight">
                    Химия. 8&nbsp;класс за&nbsp;2&nbsp;недели
                  </h3>
                  <p className="text-xs text-amber-100 mt-0.5">Закрой пробелы 1&nbsp;четверти со&nbsp;мной</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Базовые понятия: строение атома, химические формулы, валентность, составление уравнений реакций и&nbsp;первые расчёты.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-lg font-black text-slate-900 whitespace-nowrap">5&nbsp;000&nbsp;₽</span>
              <Link
                href="/courses"
                className="min-h-[44px] inline-flex items-center gap-1 text-xs font-bold text-brandOchre-700 hover:text-brandOchre-800"
              >
                <span>Подробнее</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Группы ОГЭ */}
          <div className="bg-white rounded-3xl border-2 border-brandGreen-200 p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow h-full">
            <div>
              <div className="w-full min-h-[120px] rounded-2xl bg-gradient-to-tr from-brandGreen-800 to-brandGreen-700 p-4 sm:p-5 text-white flex flex-col justify-between mb-4">
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-white/20 self-start px-2 py-0.5 rounded-full">
                  Мини-группы
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-black leading-tight">
                    Химия: Группы ОГЭ
                  </h3>
                  <p className="text-xs text-brandGreen-100 mt-0.5">с&nbsp;Анастасией Повышевой</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Системная подготовка к&nbsp;ОГЭ на&nbsp;оценку «5». Живые занятия 2&nbsp;раза в&nbsp;неделю, индивидуальные видеозаписи для&nbsp;каждой группы в&nbsp;кабинете.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-lg font-black text-slate-900 whitespace-nowrap">
                от&nbsp;1&nbsp;600&nbsp;₽ <span className="text-xs font-normal text-slate-500">/ занятие</span>
              </span>
              <Link
                href="/courses"
                className="min-h-[44px] inline-flex items-center gap-1 text-xs font-bold text-brandGreen-700 hover:text-brandGreen-800"
              >
                <span>Подробнее</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Карточки по неорганике */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow h-full">
            <div>
              <div className="w-full min-h-[120px] rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-700 p-4 sm:p-5 text-white flex flex-col justify-between mb-4">
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-white/20 self-start px-2 py-0.5 rounded-full">
                  Пособия
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-black leading-tight">
                    Карточки: Неорганика
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">Номенклатура солей и&nbsp;кислот</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Наглядные двусторонние карточки для&nbsp;запоминания кислотных остатков, тривиальных названий и&nbsp;цветов осадков.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-lg font-black text-slate-900 whitespace-nowrap">500&nbsp;₽</span>
              <a
                href="https://vk.ru/club201599659"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-slate-900"
              >
                <span>Заказать в&nbsp;ВК</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Интерактивный пробный тренажёр (Степенин-style) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-4 sm:p-8 border-2 border-brandGreen-200 shadow-xl shadow-brandGreen-700/5">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-brandGreen-800 bg-brandGreen-50 px-3 py-1 rounded-full border border-brandGreen-200">
                Попробуйте прямо сейчас
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                Тренажёр реакций: Проверьте себя
              </h2>
            </div>
            <Award className="w-8 h-8 text-brandGreen-700 hidden sm:block shrink-0" />
          </div>

          <QuizPlayer
            questions={DEMO_TRAINER_QUESTIONS.slice(0, 2)}
            title="Качественные признаки реакций и цвета осадков"
          />
        </div>
      </section>

      {/* 4. Популярные статьи и конспекты */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 sm:mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Шпаргалки и&nbsp;статьи по&nbsp;химии
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Конспекты сложных тем с&nbsp;уравнениями реакций и&nbsp;цветами осадков
            </p>
          </div>
          <Link
            href="/articles"
            className="min-h-[44px] text-xs sm:text-sm font-bold text-brandGreen-700 hover:text-brandGreen-800 inline-flex items-center gap-1"
          >
            <span>Все статьи ({DEMO_ARTICLES.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {DEMO_ARTICLES.map((art) => (
            <Link
              key={art.slug}
              href={`/articles/${art.slug}`}
              className="group block p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-brandGreen-300 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2 mb-2.5">
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-brandGreen-50 text-brandGreen-800 border border-brandGreen-200">
                  {art.category}
                </span>
                <span className="text-xs text-slate-400">• {art.readTime}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brandGreen-700 transition-colors mb-2">
                {art.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                {art.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
