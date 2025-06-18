import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { Work } from "../../../types";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet";

type UpdateMenuProps = {
  work: Work;
  onUpdate: (data: Omit<Work, "id" | "created_at">) => void;
  onClose: () => void;
};

export function UpdateMenu({ work, onUpdate, onClose }: UpdateMenuProps) {
 const [title, setTitle] = useState<string>(work.title ?? "")
  const [type, setType] = useState<string>(work.type ?? "")
  const [author, setAuthor] = useState<string>(work.author ?? "")
  const [year, setYear] = useState<string>(work.year !== null ? String(work.year) : "")
  const [images, setImages] = useState<string>(JSON.stringify(work.images))

  const handleUpdateClick = () => {
    let parsedImages: string[] = [];
    try {
      parsedImages = JSON.parse(images || "[]");
    } catch {
      toast("Некорректный формат изображений");
      return;
    }

    onUpdate({
      title,
      type,
      author,
      year: Number(year),
      images: parsedImages,
    });
  };

  return (
    <div className="flex justify-end">
      <Sheet open onOpenChange={onClose}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Изменить работу</SheetTitle>
            <SheetDescription>Измените поля ниже</SheetDescription>
          </SheetHeader>
          <div className="text-xs grid flex-1 auto-rows-min gap-4 px-4 font-def overflow-auto">
            <div className="grid gap-3">
              <Label htmlFor="title">Название работы</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="type">Категория работы</Label>
              <Input
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="author">ФИО Автора</Label>
              <Input
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="year">Год</Label>
              <Input
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="images">Изображения (JSON массив)</Label>
              <Textarea
                id="images"
                value={images}
                onChange={(e) => setImages(e.target.value)}
              />
            </div>
          </div>
          <SheetFooter className="font-def flex flex-row justify-center align-center">
            <Button className="h-7" type="button" onClick={handleUpdateClick}>
              Изменить
            </Button>
            <SheetClose asChild>
              <Button className="h-7" variant="outline">
                Закрыть
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
