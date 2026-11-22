export interface DemoCourseLesson {
  id: string;
  title: string;
  order: number;
  theoryContent: string;
  homeworkPrompt: string;
  testQuestionsCount: number;
}

export interface DemoGroup {
  id: string;
  name: string;
  schedule: string;
  courseTitle: string;
  currentLessonId: string;
  // Видеозаписи по урокам именно для этой группы:
  groupVideos: Record<
    string,
    {
      videoUrl: string;
      videoTitle: string;
      recordedAt: string;
      notes?: string;
    }
  >;
}

export const DEMO_COURSE_LESSONS: DemoCourseLesson[] = [
  {
    id: "lesson-1",
    title: "Урок 1: Строение атома, квантовые числа и проскок электрона",
    order: 1,
    theoryContent: `### Конспект урока
1. **Электронные подуровни:** $s$ (1 орбиталь, макс. 2e), $p$ (3 орбитали, макс. 6e), $d$ (5 орбиталей, макс. 10e).
2. **Проскок электрона:** характерен для хрома $\\text{Cr}$ ($4s^1 3d^5$) и меди $\\text{Cu}$ ($4s^1 3d^{10}$).
3. **Валентные электроны:**
   - Для элементов главных подгрупп (s- и p-элементы) валентными являются только электроны внешнего уровня.
   - Для переходных d-элементов валентными являются электроны внешнего s- и предвнешнего d-подуровня.`,
    homeworkPrompt: `**Домашнее задание (часть 2):**
1. Напишите электронно-графические формулы для атомов фосфора $\\text{P}$ в основном и возбужденном состояниях.
2. Объясните, почему у азота $\\text{N}$ не бывает валентности V, а у фосфора бывает.
*Сфотографируйте решение в тетради и прикрепите в форму ниже.*`,
    testQuestionsCount: 4,
  },
  {
    id: "lesson-2",
    title: "Урок 2: Качественные реакции в неорганике и цвета осадков",
    order: 2,
    theoryContent: `### Главные качественные реакции
- $\\text{Cu}^{2+} + 2\\text{OH}^- \\rightarrow \\text{Cu(OH)}_2\\downarrow$ (ярко-синий осадок)
- $\\text{Fe}^{3+} + 3\\text{OH}^- \\rightarrow \\text{Fe(OH)}_3\\downarrow$ (красно-бурый осадок)
- $\\text{Ba}^{2+} + \\text{SO}_4^{2-} \\rightarrow \\text{BaSO}_4\\downarrow$ (белый кристаллический осадок)
- $\\text{Ag}^+ + \\text{Cl}^- \\rightarrow \\text{AgCl}\\downarrow$ (белый творожистый осадок)`,
    homeworkPrompt: `**Домашнее задание (часть 2):**
Напишите молекулярные и сокращенные ионные уравнения для реакций обнаружения:
а) сульфат-ионов с помощью растворимой соли бария;
б) карбонат-ионов с помощью соляной кислоты.
*Прикрепите фото страницы тетради.*`,
    testQuestionsCount: 5,
  },
];

export const DEMO_GROUPS: DemoGroup[] = [
  {
    id: "group-mon-thu",
    name: "Группа А: Пн / Чт (16:00 МСК)",
    schedule: "Понедельник и четверг в 16:00 по МСК",
    courseTitle: "ЕГЭ Химия 2025/2026 (Мини-группа)",
    currentLessonId: "lesson-1",
    groupVideos: {
      "lesson-1": {
        videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        videoTitle: "Запись живого занятия Группы А от 18 ноября",
        recordedAt: "18 ноября, 16:00",
        notes: "На уроке разобрали вопросы Саши по правилу Хунда и решили дополнительные примеры с ионами железа.",
      },
      "lesson-2": {
        videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        videoTitle: "Запись живого занятия Группы А от 21 ноября",
        recordedAt: "21 ноября, 16:00",
        notes: "Особое внимание уделили отличию Fe(OH)2 от Fe(OH)3.",
      },
    },
  },
  {
    id: "group-tue-fri",
    name: "Группа Б: Вт / Пт (18:30 МСК)",
    schedule: "Вторник и пятница в 18:30 по МСК",
    courseTitle: "ЕГЭ Химия 2025/2026 (Мини-группа)",
    currentLessonId: "lesson-1",
    groupVideos: {
      "lesson-1": {
        videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        videoTitle: "Запись живого занятия Группы Б от 19 ноября",
        recordedAt: "19 ноября, 18:30",
        notes: "В этой группе подробно остановились на d-элементах и проскоке электрона у меди.",
      },
    },
  },
];
