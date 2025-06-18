"use client";

import { deleteWork } from "./actions";
import { ColumnDef } from "@tanstack/react-table";
import { MoreVertical } from "lucide-react";
import { DELETE_ROW } from "./responses";
import { Work } from "../../../types";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

export const columns: ColumnDef<Work>[] = [
  {
    accessorKey: "id",
    header: () => {
      return <div className="hidden"></div>;
    },
    cell: () => {
      return <div className="hidden"></div>;
    },
  },
  {
    accessorKey: "title",
    header: "Название",
  },
  {
    accessorKey: "type",
    header: "Категория",
  },
  {
    accessorKey: "author",
    header: "Автор",
  },
  {
    accessorKey: "year",
    header: "Год",
  },
  {
    accessorFn: (row) => row.images.join(", "),
    id: "images",
    header: "Изображения",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const work = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-1 p-0 dark">
              <span className="sr-only">Открыть меню</span>
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="bg-violet-200 font-def flex-col"
            align="end"
          >
            {/* <DropdownMenuLabel className="">Действия</DropdownMenuLabel>
            <DropdownMenuSeparator /> */}
            <DropdownMenuItem
              className="sm:my-12 md:my-3 lg:my-0"
              onClick={async () => {
                const result = await deleteWork(work.id);
                if (result.success) {
                  toast(DELETE_ROW.success);
                } else {
                  toast(`${DELETE_ROW.error}: ${result.error}`);
                }
              }}
            >
              Удалить
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              // onClick={() => props.onEdit(work)}
              className="sm:my-12 md:my-3 lg:my-0"
            >
              Изменить
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
