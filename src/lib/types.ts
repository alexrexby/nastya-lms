export type QuestionType =
  | "SINGLE_CHOICE"
  | "MULTIPLE_CHOICE"
  | "MATCHING"
  | "NUMBER_INPUT";

export interface SingleChoiceData {
  options: { id: string; text: string }[];
  correctOptionId: string;
}

export interface MultipleChoiceData {
  options: { id: string; text: string }[];
  correctOptionIds: string[];
}

export interface MatchingData {
  leftItems: { id: string; label: string; text: string }[]; // А, Б, В, Г
  rightOptions: { id: string; label: string; text: string }[]; // 1, 2, 3, 4, 5
  correctMatches: Record<string, string>; // e.g. { "A": "3", "B": "1", "C": "4", "D": "2" }
}

export interface NumberInputData {
  correctNumber: number;
  tolerance?: number; // e.g. 0.05
  unit?: string; // e.g. "г", "моль", "%", "л"
  placeholder?: string;
}

export interface QuestionItem {
  id: string;
  type: QuestionType;
  prompt: string;
  explanation: string;
  data: SingleChoiceData | MultipleChoiceData | MatchingData | NumberInputData;
}
