"use client";

import React, { useState } from "react";
import { QuestionItem, MatchingData, SingleChoiceData, MultipleChoiceData, NumberInputData } from "@/lib/types";
import { QuestionRenderer } from "./QuestionRenderer";
import { Award, RotateCcw, CheckCircle } from "lucide-react";

interface QuizPlayerProps {
  questions: QuestionItem[];
  title?: string;
  onFinish?: (score: number, maxScore: number) => void;
}

export const QuizPlayer: React.FC<QuizPlayerProps> = ({
  questions,
  title = "Проверочный тест",
  onFinish,
}) => {
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const checkQuestionCorrectness = (q: QuestionItem, userAns: any): boolean => {
    if (!userAns) return false;

    if (q.type === "SINGLE_CHOICE") {
      const data = q.data as SingleChoiceData;
      return userAns === data.correctOptionId;
    }

    if (q.type === "MULTIPLE_CHOICE") {
      const data = q.data as MultipleChoiceData;
      if (!Array.isArray(userAns)) return false;
      if (userAns.length !== data.correctOptionIds.length) return false;
      return data.correctOptionIds.every((id) => userAns.includes(id));
    }

    if (q.type === "MATCHING") {
      const data = q.data as MatchingData;
      return Object.entries(data.correctMatches).every(
        ([leftKey, correctRightLabel]) => userAns[leftKey] === correctRightLabel
      );
    }

    if (q.type === "NUMBER_INPUT") {
      const data = q.data as NumberInputData;
      const num = parseFloat(String(userAns).replace(",", "."));
      if (isNaN(num)) return false;
      const tolerance = data.tolerance ?? 0.01;
      return Math.abs(num - data.correctNumber) <= tolerance;
    }

    return false;
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q) => {
      if (checkQuestionCorrectness(q, answers[q.id])) {
        score += 1;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    const score = calculateScore();
    if (onFinish) {
      onFinish(score, questions.length);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setIsSubmitted(false);
  };

  const score = calculateScore();
  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div>
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
          <p className="text-xs text-slate-500">Вопросов: {questions.length}</p>
        </div>

        {isSubmitted && (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 font-bold text-sm">
              <Award className="w-4 h-4 text-emerald-600" />
              {score} из {questions.length} ({percentage}%)
            </div>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Заново
            </button>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {questions.map((q, idx) => {
          const isCorrect = isSubmitted ? checkQuestionCorrectness(q, answers[q.id]) : undefined;
          return (
            <div key={q.id}>
              <div className="text-xs font-bold text-slate-400 mb-1 ml-1">Задание {idx + 1}</div>
              <QuestionRenderer
                question={q}
                userAnswer={answers[q.id]}
                onAnswerChange={(ans) => setAnswers((prev) => ({ ...prev, [q.id]: ans }))}
                isSubmitted={isSubmitted}
                isCorrect={isCorrect}
              />
            </div>
          );
        })}
      </div>

      {!isSubmitted ? (
        <div className="pt-4 flex justify-end">
          <button
            type="button"
            onClick={handleSubmit}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/30 transition-all hover:scale-[1.01]"
          >
            <CheckCircle className="w-4 h-4" />
            Проверить ответы
          </button>
        </div>
      ) : (
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex items-center justify-between">
          <div>
            <h4 className="text-lg font-extrabold">Тест завершён!</h4>
            <p className="text-sm text-emerald-100">
              Ваш результат: {score} из {questions.length} баллов ({percentage}%). Разбор каждого ответа доступен выше.
            </p>
          </div>
          <button
            onClick={handleReset}
            className="px-4 py-2.5 bg-white text-emerald-900 rounded-xl font-bold text-sm shadow hover:bg-emerald-50 transition-colors"
          >
            Пройти снова
          </button>
        </div>
      )}
    </div>
  );
};
