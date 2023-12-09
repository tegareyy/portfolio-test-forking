import {
  CodeIcon,
  CoffeeIcon,
  HomeIcon,
  PhoneIcon,
  UserIcon,
} from "lucide-react";

interface INavigationChild {
  name: string;
  path: string;
}

export interface INavigation {
  title: string;
  path: string;
  content: string;
  icon: any;
  children?: INavigationChild[];
}

export const NAVIGATION: INavigation[] = [
  {
    title: "Home",
    path: "/",
    content: "_Home",
    icon: HomeIcon,
  },
  {
    title: "About",
    path: "/about",
    content: "_About",
    icon: UserIcon,
  },
  {
    title: "Work",
    path: "/work",
    content: "_Work",
    icon: CoffeeIcon,
  },
  {
    title: "Project",
    path: "/project",
    content: "_Project",
    icon: CodeIcon,
    children: [
      {
        name: "All Projects",
        path: "/projects",
      },
      {
        name: "React",
        path: "/projects?tag=react",
      },
      {
        name: "Next",
        path: "/projects?tag=next",
      },
      {
        name: "HTML",
        path: "/projects?tag=html",
      },
    ],
  },
  {
    title: "Contact",
    path: "/contact",
    content: "_Contact",
    icon: PhoneIcon,
    children: [
      {
        name: "Email",
        path: "mailto:wwicaksono96@gmail.com",
      },
      {
        name: "Upwork",
        path: "https://www.upwork.com/freelancers/~01df34d78e05fa69bf",
      },
      {
        name: "WhatsApp",
        path: "https://wa.me/+6287885002327",
      },
      {
        name: "LinkedIn",
        path: "https://www.linkedin.com/in/wiscaksono/",
      },
      {
        name: "Instagram",
        path: "https://www.instagram.com/amachoker/",
      },
    ],
  },
];