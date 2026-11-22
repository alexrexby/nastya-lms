"use client";

import React, { useMemo } from "react";
import katex from "katex";

interface ChemFormulaProps {
  formula: string;
  displayMode?: boolean;
  className?: string;
}

/**
 * Рендерит химические формулы и уравнения через KaTeX
 * Поддерживает синтаксис вида \text{H}_2\text{SO}_4 или mhchem-подобный
 */
export const ChemFormula: React.FC<ChemFormulaProps> = ({
  formula,
  displayMode = false,
  className = "",
}) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(formula, {
        displayMode,
        throwOnError: false,
      });
    } catch {
      return formula;
    }
  }, [formula, displayMode]);

  return (
    <span
      className={`inline-block font-sans ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

/**
 * Рендерит текст с вкраплениями формул, обрамленных в $...$
 */
export const ChemText: React.FC<{ text: string; className?: string }> = ({
  text,
  className = "",
}) => {
  const parts = useMemo(() => {
    // Разбиваем строку по разделителям $formula$
    const regex = /\$([^$]+)\$/g;
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        elements.push(text.substring(lastIndex, match.index));
      }
      const formula = match[1];
      elements.push(
        <ChemFormula key={match.index} formula={formula} className="mx-0.5 text-emerald-800 font-semibold" />
      );
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      elements.push(text.substring(lastIndex));
    }

    return elements;
  }, [text]);

  return <div className={`whitespace-pre-line leading-relaxed ${className}`}>{parts}</div>;
};
