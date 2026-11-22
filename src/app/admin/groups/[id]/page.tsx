import { DEMO_GROUPS } from "@/lib/demo-courses";
import { AdminGroupVideoManagerView } from "./AdminGroupVideoManagerView";

export function generateStaticParams() {
  return DEMO_GROUPS.map((group) => ({
    id: group.id,
  }));
}

export default async function AdminGroupVideoManagerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <AdminGroupVideoManagerView groupId={id} />;
}
