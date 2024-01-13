import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTableRowActions } from "@/components/data-table/data-table-row-actions";
import { Task } from "@/types";

interface DataTableProps {
  data: Task[];
}

export const DataTable = ({ data }: DataTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Task</TableHead>
          <TableHead>CreatedAt</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((task) => (
          <TableRow key={task.id}>
            <TableCell>{task.title}</TableCell>
            <TableCell className="w-36">{task.created_at}</TableCell>
            <TableCell className="w-4">
              <DataTableRowActions row={task} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
