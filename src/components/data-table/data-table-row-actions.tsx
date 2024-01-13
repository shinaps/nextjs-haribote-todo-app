"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Task } from "@/types";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { TaskForm } from "@/components/task-form/task-form";
import { useState } from "react";

interface DataTableRowActionsProps {
  row: Task;
}

export function DataTableRowActions({ row }: DataTableRowActionsProps) {
  const [open, setOpen] = useState(false);
  const onClickDelete = () => {
    console.log(`delete ${row.title}`);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DialogTrigger asChild>
            <DropdownMenuItem>Edit</DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem
            onClick={onClickDelete}
            className="text-destructive"
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent className="sm:max-w-[425px]">
        <TaskForm editProps={{ task: row, closeDialog }} />
      </DialogContent>
    </Dialog>
  );
}
