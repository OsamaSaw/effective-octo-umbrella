export type MenuType = { name: string; link?: string; sub: MenuType[] | [] };
export type MenuSubType = MenuType[];

export const data: MenuSubType = [
  {
    name: "About",
    link: "/about",
    sub: [
      {
        name: "test",
        link: "/test",
        sub: [{ name: "test", link: "/test", sub: [] }],
      },
    ],
  },
  {
    name: "contactUs",
    link: "/contactUs",
    sub: [],
  },
  {
    name: "About",
    link: "",
    sub: [],
  },
];
