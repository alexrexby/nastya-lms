import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2.5 text-white font-bold text-lg mb-3">
              <div className="w-8 h-8 rounded-lg bg-brandGreen-700 flex items-center justify-center font-black text-white text-sm">
                НП
              </div>
              Химия с Настей Повышевой • Понять и сдать!
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-4">
              Авторская образовательная платформа Анастасии Повышевой: понятная теория, химические шпаргалки, тренажёр заданий ЕГЭ/ОГЭ и личный кабинет с индивидуальными видеоуроками мини-групп.
            </p>
            <a
              href="https://vk.ru/club201599659"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brandOchre-500 hover:text-brandOchre-400 transition-colors"
            >
              Официальное сообщество ВКонтакте (5 900+ подписчиков) <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3">Обучение</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses" className="hover:text-brandOchre-400 transition-colors">Курс: 8 класс за 2 недели</Link></li>
              <li><Link href="/courses" className="hover:text-brandOchre-400 transition-colors">Курс: 9 класс за 2 недели</Link></li>
              <li><Link href="/courses" className="hover:text-brandOchre-400 transition-colors">Мини-группы ОГЭ и ЕГЭ</Link></li>
              <li><Link href="/dashboard" className="hover:text-brandOchre-400 transition-colors">Кабинет ученика</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3">Материалы</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/articles" className="hover:text-brandOchre-400 transition-colors">Статьи и конспекты</Link></li>
              <li><Link href="/tests" className="hover:text-brandOchre-400 transition-colors">Тренажёр заданий ЕГЭ</Link></li>
              <li><Link href="/admin" className="hover:text-brandOchre-400 transition-colors">Панель учителя</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} Химия с Настей Повышевой. Все права защищены.</div>
          <div>Химия: понять и сдать!</div>
        </div>
      </div>
    </footer>
  );
};
