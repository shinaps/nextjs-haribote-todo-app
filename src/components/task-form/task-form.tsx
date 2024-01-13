"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Task } from "@/types";

const formSchema = z.object({
  task: z
    .string()
    .min(1, "１文字以上入力して下さい。")
    .max(20, "20文字以内で入力してください。"),
});

interface TaskFormProps {
  editProps?: {
    task: Task;
    closeDialog: () => void;
  };
}

export const TaskForm = ({ editProps }: TaskFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: editProps?.task?.title ?? "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (editProps) {
      const { task, closeDialog } = editProps;
      console.log(`update ${task.title} to ${values.task}`);
      closeDialog();

      return;
    }

    console.log("create", values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="task"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {editProps ? "Update Task" : "Add New Task"}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={editProps ? "update task..." : "add new task..."}
                  {...field}
                />
              </FormControl>
              <FormDescription>20文字以内で入力してください。</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
};
