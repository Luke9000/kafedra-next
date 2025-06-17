import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function AddButton() {
  return (
    <div className="flex justify-end">
        <Sheet >
          <SheetTrigger asChild>
            <Button variant="default">+</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Добавить работу</SheetTitle>
              <SheetDescription>
                Заполните поля ниже
              </SheetDescription>
            </SheetHeader>
            <div className="text-xs grid flex-1 auto-rows-min gap-4 px-4 font-def overflow-auto">
              <div className="grid gap-3">
                <Label htmlFor="sheet-demo-name">Название работы</Label>
                <Input id="sheet-demo-name" defaultValue="Baggins Coffee" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="sheet-demo-username">Категория работы</Label>
                <Input id="sheet-demo-username" defaultValue="Разработка веб-сайта" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="sheet-demo-name">ФИО Автора</Label>
                <Input id="sheet-demo-name" defaultValue="Овчинникова Татьяна Петровна" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="sheet-demo-username">Год</Label>
                <Input id="sheet-demo-username" defaultValue="2932" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="sheet-demo-username">Изображения</Label>
                <Textarea id="t5" defaultValue="['https://tukzhejovsuybrreadju.supabase.co/storage/v1/object/public/works-images//ogii_1.jpg','https://tukzhejovsuybrreadju.supabase.co/storage/v1/object/public/works-images//ogii_1.jpg']" />
              </div>
            </div>
            <SheetFooter className="font-def flex flex-row justify-center align-center">
              <Button className="h-7 " type="submit">Добавить</Button>
              <SheetClose asChild>
                <Button className="h-7" variant="outline">Закрыть</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
    </div>
  )
}
