"use client";

import React from "react";
import { QuestionItem, MatchingData, SingleChoiceData, MultipleChoiceData, NumberInputData } from "@/lib/types";
import { ChemText } from "@/components/chemistry/ChemFormula";
import { CheckCircle2, XCircle, HelpCircle } from "lucide-react";

interface QuestionRendererProps {
  question: QuestionItem;
  userAnswer: any;
  onAnswerChange: (answer: any) => void;
  isSubmitted: boolean;
  isCorrect?: boolean;
}

export const QuestionRenderer: React.FC<QuestionRendererProps> = ({
  question,
  userAnswer,
  onAnswerChange,
  isSubmitted,
  isCorrect,
}) => {
  return (
    <div
      className={`p-4 sm:p-6 rounded-3xl border transition-all ${
        isSubmitted
          ? isCorrect
            ? "bg-brandGreen-50/50 border-brandGreen-300"
            : "bg-rose-50/40 border-rose-300"
          : "bg-white border-slate-200/90 shadow-sm"
      }`}
    >
      {/* Шапка вопроса */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
            {question.type === "SINGLE_CHOICE" && "Один ответ"}
            {question.type === "MULTIPLE_CHOICE" && "Выбор 2 из 5 (ЕГЭ)"}
            {question.type === "MATCHING" && "Соответствие (ЕГЭ)"}
            {question.type === "NUMBER_INPUT" && "Расчетная задача"}
          </span>
          {isSubmitted && (
            <span
              className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${
                isCorrect ? "bg-brandGreen-100 text-brandGreen-900" : "bg-rose-100 text-rose-900"
              }`}
            >
              {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
              {isCorrect ? "Верно" : "Неверно"}
            </span>
          )}
        </div>
      </div>

      <div className="mb-5">
        <ChemText text={question.prompt} className="text-base sm:text-lg font-bold text-slate-900" />
      </div>

      {/* Тело вопроса */}
      <div>
        {/* 1. Одиночный выбор */}
        {question.type === "SINGLE_CHOICE" && (
          <div className="space-y-2.5">
            {(question.data as SingleChoiceData).options.map((opt) => {
              const isSelected = userAnswer === opt.id;
              const isThisCorrect = (question.data as SingleChoiceData).correctOptionId === opt.id;

              let borderClass = "border-slate-200 bg-white hover:border-brandGreen-400 hover:bg-slate-50";
              if (isSelected) borderClass = "border-brandGreen-600 bg-brandGreen-50/70 ring-2 ring-brandGreen-600/20";
              if (isSubmitted) {
                if (isThisCorrect) borderClass = "border-brandGreen-500 bg-brandGreen-100 text-brandGreen-950 font-bold";
                else if (isSelected) borderClass = "border-rose-400 bg-rose-100 text-rose-950 line-through";
              }

              return (
                <button
                  type="button"
                  key={opt.id}
                  disabled={isSubmitted}
                  onClick={() => onAnswerChange(opt.id)}
                  className={`w-full text-left min-h-[48px] p-4 rounded-2xl border flex items-center justify-between text-sm sm:text-base font-medium transition-all ${borderClass}`}
                >
                  <ChemText text={opt.text} className="pr-3" />
                  <div
                    className={`w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center ${
                      isSelected ? "border-brandGreen-700 bg-brandGreen-700 text-white" : "border-slate-300"
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* 2. Множественный выбор (2 из 5) */}
        {question.type === "MULTIPLE_CHOICE" && (
          <div className="space-y-2.5">
            {(question.data as MultipleChoiceData).options.map((opt) => {
              const selectedArray = Array.isArray(userAnswer) ? userAnswer : [];
              const isSelected = selectedArray.includes(opt.id);
              const isThisCorrect = (question.data as MultipleChoiceData).correctOptionIds.includes(opt.id);

              let borderClass = "border-slate-200 bg-white hover:border-brandGreen-400 hover:bg-slate-50";
              if (isSelected) borderClass = "border-brandGreen-600 bg-brandGreen-50/70 ring-2 ring-brandGreen-600/20";
              if (isSubmitted) {
                if (isThisCorrect) borderClass = "border-brandGreen-500 bg-brandGreen-100 text-brandGreen-950 font-bold";
                else if (isSelected) borderClass = "border-rose-400 bg-rose-100 text-rose-950";
              }

              return (
                <button
                  type="button"
                  key={opt.id}
                  disabled={isSubmitted}
                  onClick={() => {
                    if (isSelected) {
                      onAnswerChange(selectedArray.filter((x: string) => x !== opt.id));
                    } else {
                      onAnswerChange([...selectedArray, opt.id]);
                    }
                  }}
                  className={`w-full text-left min-h-[48px] p-4 rounded-2xl border flex items-center justify-between text-sm sm:text-base font-medium transition-all ${borderClass}`}
                >
                  <ChemText text={opt.text} className="pr-3" />
                  <div
                    className={`w-5 h-5 rounded-lg border-2 shrink-0 flex items-center justify-center ${
                      isSelected ? "border-brandGreen-700 bg-brandGreen-700 text-white" : "border-slate-300"
                    }`}
                  >
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* 3. Задание на соответствие (Идеальный мобильный UX с кнопками 44x44px!) */}
        {question.type === "MATCHING" && (
          <div className="space-y-6">
            {/* Опорные колонки веществ и вариантов */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  ИСХОДНЫЕ ВЕЩЕСТВА:
                </span>
                {(question.data as MatchingData).leftItems.map((item) => (
                  <div key={item.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm flex items-center gap-3">
                    <span className="w-6 h-6 rounded-md bg-brandGreen-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {item.label}
                    </span>
                    <ChemText text={item.text} />
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  ВАРИАНТЫ ОТВЕТОВ:
                </span>
                {(question.data as MatchingData).rightOptions.map((opt) => (
                  <div key={opt.id} className="p-3 bg-white border border-slate-200 rounded-xl text-sm flex items-center gap-3">
                    <span className="w-6 h-6 rounded-md bg-brandOchre-100 text-brandOchre-900 border border-brandOchre-300 text-xs font-bold flex items-center justify-center shrink-0">
                      {opt.label}
                    </span>
                    <ChemText text={opt.text} />
                  </div>
                ))}
              </div>
            </div>

            {/* Мобильно-адаптивный блок сопоставления: крупные кнопки 1-5 для каждого пункта! */}
            <div className="p-4 sm:p-5 bg-slate-100/80 rounded-2xl border border-slate-200 space-y-4">
              <span className="block text-xs font-extrabold uppercase tracking-wider text-slate-700">
                Выберите соответствие цифрой для каждого пункта:
              </span>

              <div className="space-y-3">
                {(question.data as MatchingData).leftItems.map((item) => {
                  const currentVal = (userAnswer || {})[item.id] || "";
                  const correctVal = (question.data as MatchingData).correctMatches[item.id];
                  const isMatchCorrect = currentVal === correctVal;

                  return (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-brandGreen-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
                          {item.label}
                        </span>
                        <div className="text-sm font-semibold text-slate-800">
                          <ChemText text={item.text} />
                        </div>
                      </div>

                      {/* Ряд крупных тач-кнопок 1, 2, 3, 4, 5 */}
                      <div className="flex items-center gap-1.5 self-end sm:self-center">
                        {(question.data as MatchingData).rightOptions.map((opt) => {
                          const isBtnSelected = currentVal === opt.label;
                          const isThisTheCorrectBtn = correctVal === opt.label;

                          let btnStyle = "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100";
                          if (isBtnSelected) {
                            btnStyle = "border-brandGreen-700 bg-brandGreen-700 text-white font-bold shadow-sm";
                          }
                          if (isSubmitted) {
                            if (isThisTheCorrectBtn) {
                              btnStyle = "border-brandGreen-600 bg-brandGreen-600 text-white font-bold ring-2 ring-brandGreen-300";
                            } else if (isBtnSelected) {
                              btnStyle = "border-rose-500 bg-rose-500 text-white";
                            }
                          }

                          return (
                            <button
                              type="button"
                              key={opt.id}
                              disabled={isSubmitted}
                              onClick={() => {
                                onAnswerChange({
                                  ...(userAnswer || {}),
                                  [item.id]: opt.label,
                                });
                              }}
                              className={`min-h-[40px] min-w-[40px] sm:min-h-[44px] sm:min-w-[44px] rounded-xl border flex items-center justify-center font-bold text-sm transition-all active:scale-95 ${btnStyle}`}
                            >
                              {opt.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* 4. Расчетная задача с вводом числа */}
        {question.type === "NUMBER_INPUT" && (
          <div className="mt-4">
            <div className="flex items-center gap-3 max-w-sm">
              <input
                type="text"
                inputMode="decimal"
                disabled={isSubmitted}
                placeholder={(question.data as NumberInputData).placeholder || "Введите ответ"}
                value={userAnswer || ""}
                onChange={(e) => onAnswerChange(e.target.value)}
                className={`w-full min-h-[48px] px-4 py-3 rounded-2xl border text-lg font-bold focus:outline-none focus:ring-2 focus:ring-brandGreen-600 transition-all ${
                  isSubmitted
                    ? isCorrect
                      ? "border-brandGreen-500 bg-brandGreen-50 text-brandGreen-950"
                      : "border-rose-500 bg-rose-50 text-rose-950"
                    : "border-slate-300 bg-white shadow-inner"
                }`}
              />
              {(question.data as NumberInputData).unit && (
                <span className="text-base font-extrabold text-slate-700 shrink-0">
                  {(question.data as NumberInputData).unit}
                </span>
              )}
            </div>

            {isSubmitted && !isCorrect && (
              <div className="mt-2.5 text-xs sm:text-sm font-bold text-rose-800">
                Правильный ответ: {(question.data as NumberInputData).correctNumber}{" "}
                {(question.data as NumberInputData).unit}
              </div>
            )}
          </div>
        )}

        {/* Мгновенный разбор (Степенин-style) */}
        {isSubmitted && question.explanation && (
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-brandOchre-50/90 border border-brandOchre-200 text-sm">
            <div className="flex items-center gap-2 font-bold text-brandOchre-900 mb-2">
              <HelpCircle className="w-4 h-4 text-brandOchre-700" />
              Пояснение и уравнения реакций:
            </div>
            <ChemText text={question.explanation} className="text-brandOchre-950 leading-relaxed" />
          </div>
        )}
      </div>
    </div>
  );
};
