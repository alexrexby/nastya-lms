import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, Tag, Share2, Sparkles } from "lucide-react";
import { DEMO_ARTICLES } from "@/lib/demo-data";
import { ChemText } from "@/components/chemistry/ChemFormula";
import { QuizPlayer } from "@/components/quiz/QuizPlayer";

export function generateStaticParams() {
  return DEMO_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = DEMO_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Навигация назад */}
      <Link
        href="/articles"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-emerald-700 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Ко всем статьям
      </Link>

      <article className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-sm mb-12">
        {/* Шапка статьи */}
        <header className="mb-8 pb-8 border-b border-slate-100">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
              <Tag className="w-3 h-3" />
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <Clock className="w-3.5 h-3.5" />
              Время чтения: {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            {article.excerpt}
          </p>
        </header>

        {/* Текст статьи с поддержкой формул */}
        <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed space-y-4">
          <ChemText text={article.content} className="text-base sm:text-lg" />
        </div>
      </article>

      {/* Интерактивный тест по материалу статьи (как у Степенина!) */}
      {article.questions && article.questions.length > 0 && (
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-200 shadow-lg shadow-emerald-500/5 mb-12">
          <div className="flex items-center gap-2.5 text-emerald-800 font-extrabold text-sm uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            Закрепление материала
          </div>
          <QuizPlayer
            questions={article.questions}
            title={`Проверочный тест к статье: «${article.title}»`}
          />
        </section>
      )}

      {/* Баннер записи в мини-группу */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-700 to-teal-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <h3 className="text-xl font-black mb-1">Хотите системно разобрать всю химию?</h3>
          <p className="text-emerald-100 text-sm">
            Запишитесь в мини-группу подготовки к ЕГЭ. Индивидуальный подход, видеозаписи каждого урока и проверка домашних заданий.
          </p>
        </div>
        <Link
          href="/courses"
          className="whitespace-nowrap px-6 py-3 rounded-xl bg-white text-emerald-900 font-bold text-sm hover:bg-emerald-50 transition-colors shadow"
        >
          Узнать о группах
        </Link>
      </div>
    </div>
  );
}
