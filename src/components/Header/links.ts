import {
  CalendarDays,
  BookCopy,
  GraduationCap,
  IdCard,
  LandPlot,
  LucideIcon,
} from "lucide-react";
import Logo from '../icons/Logo'
import { ComponentType, SVGProps } from "react";

type NavLink = {
  name: string;
  href: string;
  icon: LucideIcon | ComponentType<SVGProps<SVGSVGElement>>; 
};

const links: NavLink[] = [
  {
    name: "",
    href: "/",
    icon: Logo,
  },
  {
    name: "ПРЕПОДАВАТЕЛИ",
    href: "/teachers",
    icon: IdCard,
  },
  {
    name: "РАБОТЫ СТУДЕНТОВ",
    href: "/works",
    icon: BookCopy,
  },
  {
    name: "КАРТА КАФЕДРЫ",
    href: "/map",
    icon: LandPlot,
  },
  {
    name: "РАСПИСАНИЕ",
    href: "/shedule",
    icon: CalendarDays,
  },
  {
    name: "ВКР",
    href: "/thesis",
    icon: GraduationCap,
  },
];

export default links;
