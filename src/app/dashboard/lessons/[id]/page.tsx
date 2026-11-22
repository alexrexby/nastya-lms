import { DEMO_COURSE_LESSONS } from "@/lib/demo-courses";
import { StudentLessonView } from "./StudentLessonView";

export function generateStaticParams() {
  return DEMO_COURSE_LESSONS.map((lesson) => ({
    id: lesson.id,
  }));
}

export default async function StudentLessonDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <StudentLessonView lessonId={id} />;
}
