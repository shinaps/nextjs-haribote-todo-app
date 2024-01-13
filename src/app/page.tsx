import { DataTable } from "@/components/data-table/data-table";
import { Task } from "@/types";
import { TaskForm } from "@/components/task-form/task-form";

export default function Home() {
  // サーバーサイドでデータを取得していると仮定
  const data: Task[] = [
    {
      id: "TASK-ID-1",
      title: "hop",
      created_at: "2024-01-01",
    },
    {
      id: "TASK-ID-2",
      title: "step",
      created_at: "2024-01-01",
    },
    {
      id: "TASK-ID-3",
      title: "jump",
      created_at: "2024-01-01",
    },
  ];

  return (
    <main className="max-w-screen-sm mx-auto">
      <div className="flex flex-col gap-12 mt-20">
        <TaskForm />
        <DataTable data={data} />
      </div>
    </main>
  );
}
