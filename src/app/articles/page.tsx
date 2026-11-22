import Link from "next/link";
import { BookOpen, Search, ArrowRight, Tag } from "lucide-react";
import { DEMO_ARTICLES } from "@/lib/demo-data";

export default function ArticlesPage() {
  const categories = ["Все темы", "Общая химия", "Неорганика", "Органика", "Задачи"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          База знаний и теория
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Статьи, конспекты и шпаргалки по химии
        </h1>
        <p className="mt-3 text-slate-600 text-base leading-relaxed">
          Понятный разбор теории с химическими формулами, реакциями и интерактивным тестом для самопроверки в конце каждого материала.
        </p>
      </div>

      {/* Категории */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat, idx) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              idx === 0
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-white text-slate-700 border border-slate-200 hover:border-emerald-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Список статей */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DEMO_ARTICLES.map((article) => (
          <article
            key={article.slug}
            className="flex flex-col justify-between bg-white rounded-2xl border border-slate-200 p-6 hover:border-emerald-300 hover:shadow-lg transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                  <Tag className="w-3 h-3" />
                  {article.category}
                </span>
                <span className="text-xs text-slate-400">{article.readTime}</span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-3 leading-snug">
                <Link href={`/articles/${article.slug}`}>{article.title}</Link>
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
              <span>Есть проверочный тест ({article.questions.length})</span>
              <Link
                href={`/articles/${article.slug}`}
                className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                Читать <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
