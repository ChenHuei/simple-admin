import { Menu } from "@/types/layout/default";

export const MENU_LIST: Menu[] = [
  {
    title: "訂單管理",
    link: "/",
    isToggle: true,
    children: [
      {
        title: "訂單查詢",
        link: "/",
      },
      {
        title: "新增訂單",
        link: "/add",
      },
    ],
  },
];
