export type MenuType = { name: string; link?: string; sub: MenuType[] | [] };
export type MenuSubType = MenuType[];

export const data: MenuSubType = [
  {
    name: "Products123",
    link: "/products",
    sub: [
      {
        name: "Category 1",
        link: "/test",
        sub: [
          { name: "item 1 lvl1", link: "/test", sub: [ // lvl 1
              { name: "SubItem 1 lvl2", link: "/test", sub: [ // lvl 2
                  { name: "SubItem 1 lvl3", link: "/test", sub: [ // lvl 3
                      { name: "SubItem 1 lvl4", link: "/test", sub: [ // lvl 4
                          { name: "SubItem 1 lvl5", link: "/test", sub: [] }, // lvl 5
                        ] },
                      { name: "SubItem 1 lvl4", link: "/test", sub: [] },// lvl 4
                    ] },
                  { name: "SubItem 1 lvl3", link: "/test", sub: [] },// lvl 3
                  { name: "SubItem 2 lvl3", link: "/test", sub: [] },// lvl 3
                ] },
              { name: "SubItem 2 lvl2", link: "/test", sub: [] },// lvl 2
              { name: "SubItem 3 lvl2", link: "/test", sub: [] },// lvl 2
              { name: "SubItem 4 lvl2", link: "/test", sub: [] },// lvl 2
              { name: "SubItem 5 lvl2", link: "/test", sub: [] },// lvl 2
            ] },
          { name: "item 2", link: "/test", sub: [] },// lvl 1
          { name: "item 3", link: "/test", sub: [] },// lvl 1
          { name: "item 4", link: "/test", sub: [] },// lvl 1
          { name: "item 5", link: "/test", sub: [] },// lvl 1
          { name: "item 6", link: "/test", sub: [] },// lvl 1
          { name: "item 7", link: "/test", sub: [] },// lvl 1
          { name: "item 8", link: "/test", sub: [] },// lvl 1
          { name: "item 9", link: "/test", sub: [] },// lvl 1
          { name: "item 10", link: "/test", sub: [] },// lvl 1
        ],

      },
      {
        name: "Category 2",
        link: "/test",
        sub: [
          { name: "item 1 lvl1", link: "/test", sub: [ // lvl 1
              { name: "SubItem 1 lvl2", link: "/test", sub: [ // lvl 2
                  { name: "SubItem 1 lvl3", link: "/test", sub: [ // lvl 3
                      { name: "SubItem 1 lvl4", link: "/test", sub: [ // lvl 4
                          { name: "SubItem 1 lvl5", link: "/test", sub: [] }, // lvl 5
                        ] },
                      { name: "SubItem 1 lvl4", link: "/test", sub: [] },// lvl 4
                    ] },
                  { name: "SubItem 1 lvl3", link: "/test", sub: [] },// lvl 3
                  { name: "SubItem 2 lvl3", link: "/test", sub: [] },// lvl 3
                ] },
              { name: "SubItem 2 lvl2", link: "/test", sub: [] },// lvl 2
              { name: "SubItem 3 lvl2", link: "/test", sub: [] },// lvl 2
              { name: "SubItem 4 lvl2", link: "/test", sub: [] },// lvl 2
              { name: "SubItem 5 lvl2", link: "/test", sub: [] },// lvl 2
            ] },
          { name: "item 2", link: "/test", sub: [] },// lvl 1
          { name: "item 3", link: "/test", sub: [] },// lvl 1
          { name: "item 4", link: "/test", sub: [] },// lvl 1
          { name: "item 5", link: "/test", sub: [] },// lvl 1
          { name: "item 6", link: "/test", sub: [] },// lvl 1
          { name: "item 7", link: "/test", sub: [] },// lvl 1
          { name: "item 8", link: "/test", sub: [] },// lvl 1
          { name: "item 9", link: "/test", sub: [] },// lvl 1
          { name: "item 10", link: "/test", sub: [] },// lvl 1
        ],

      },
      {
        name: "Category 3",
        link: "/test",
        sub: [
          { name: "item 1 lvl1", link: "/test", sub: [ // lvl 1
              { name: "SubItem 1 lvl2", link: "/test", sub: [ // lvl 2
                  { name: "SubItem 1 lvl3", link: "/test", sub: [ // lvl 3
                      { name: "SubItem 1 lvl4", link: "/test", sub: [ // lvl 4
                          { name: "SubItem 1 lvl5", link: "/test", sub: [] }, // lvl 5
                        ] },
                      { name: "SubItem 1 lvl4", link: "/test", sub: [] },// lvl 4
                    ] },
                  { name: "SubItem 1 lvl3", link: "/test", sub: [] },// lvl 3
                  { name: "SubItem 2 lvl3", link: "/test", sub: [] },// lvl 3
                ] },
              { name: "SubItem 2 lvl2", link: "/test", sub: [] },// lvl 2
              { name: "SubItem 3 lvl2", link: "/test", sub: [] },// lvl 2
              { name: "SubItem 4 lvl2", link: "/test", sub: [] },// lvl 2
              { name: "SubItem 5 lvl2", link: "/test", sub: [] },// lvl 2
            ] },
          { name: "item 2", link: "/test", sub: [] },// lvl 1
          { name: "item 3", link: "/test", sub: [] },// lvl 1
          { name: "item 4", link: "/test", sub: [] },// lvl 1
          { name: "item 5", link: "/test", sub: [] },// lvl 1
          { name: "item 6", link: "/test", sub: [] },// lvl 1
          { name: "item 7", link: "/test", sub: [] },// lvl 1
          { name: "item 8", link: "/test", sub: [] },// lvl 1
          { name: "item 9", link: "/test", sub: [] },// lvl 1
          { name: "item 10", link: "/test", sub: [] },// lvl 1
        ],
      },
      {
        name: "Category 4",
        link: "/test",
        sub: [
          { name: "item 1 lvl1", link: "/test", sub: [ // lvl 1
              { name: "SubItem 1 lvl2", link: "/test", sub: [ // lvl 2
                  { name: "SubItem 1 lvl3", link: "/test", sub: [ // lvl 3
                      { name: "SubItem 1 lvl4", link: "/test", sub: [ // lvl 4
                          { name: "SubItem 1 lvl5", link: "/test", sub: [] }, // lvl 5
                        ] },
                      { name: "SubItem 1 lvl4", link: "/test", sub: [] },// lvl 4
                    ] },
                  { name: "SubItem 1 lvl3", link: "/test", sub: [] },// lvl 3
                  { name: "SubItem 2 lvl3", link: "/test", sub: [] },// lvl 3
                ] },
              { name: "SubItem 2 lvl2", link: "/test", sub: [] },// lvl 2
              { name: "SubItem 3 lvl2", link: "/test", sub: [] },// lvl 2
              { name: "SubItem 4 lvl2", link: "/test", sub: [] },// lvl 2
              { name: "SubItem 5 lvl2", link: "/test", sub: [] },// lvl 2
            ] },
          { name: "item 2", link: "/test", sub: [] },// lvl 1
          { name: "item 3", link: "/test", sub: [] },// lvl 1
          { name: "item 4", link: "/test", sub: [] },// lvl 1
          { name: "item 5", link: "/test", sub: [] },// lvl 1
          { name: "item 6", link: "/test", sub: [] },// lvl 1
          { name: "item 7", link: "/test", sub: [] },// lvl 1
          { name: "item 8", link: "/test", sub: [] },// lvl 1
          { name: "item 9", link: "/test", sub: [] },// lvl 1
          { name: "item 10", link: "/test", sub: [] },// lvl 1
        ],
      },
      {
        name: "Category 5",
        link: "/test",
        sub: [
          { name: "item 1 lvl1", link: "/test", sub: [ // lvl 1
              { name: "SubItem 1 lvl2", link: "/test", sub: [ // lvl 2
                  { name: "SubItem 1 lvl3", link: "/test", sub: [ // lvl 3
                      { name: "SubItem 1 lvl4", link: "/test", sub: [ // lvl 4
                          { name: "SubItem 1 lvl5", link: "/test", sub: [] }, // lvl 5
                        ] },
                      { name: "SubItem 1 lvl4", link: "/test", sub: [] },// lvl 4
                    ] },
                  { name: "SubItem 1 lvl3", link: "/test", sub: [] },// lvl 3
                  { name: "SubItem 2 lvl3", link: "/test", sub: [] },// lvl 3
                ] },
              { name: "SubItem 2 lvl2", link: "/test", sub: [] },// lvl 2
              { name: "SubItem 3 lvl2", link: "/test", sub: [] },// lvl 2
              { name: "SubItem 4 lvl2", link: "/test", sub: [] },// lvl 2
              { name: "SubItem 5 lvl2", link: "/test", sub: [] },// lvl 2
            ] },
          { name: "item 2", link: "/test", sub: [] },// lvl 1
          { name: "item 3", link: "/test", sub: [] },// lvl 1
          { name: "item 4", link: "/test", sub: [] },// lvl 1
          { name: "item 5", link: "/test", sub: [] },// lvl 1
          { name: "item 6", link: "/test", sub: [] },// lvl 1
          { name: "item 7", link: "/test", sub: [] },// lvl 1
          { name: "item 8", link: "/test", sub: [] },// lvl 1
          { name: "item 9", link: "/test", sub: [] },// lvl 1
          { name: "item 10", link: "/test", sub: [] },// lvl 1
        ],
      },
      {
        name: "Category 6",
        link: "/test",
        sub: [
          { name: "item 1 lvl1", link: "/test", sub: [ // lvl 1
              { name: "SubItem 1 lvl2", link: "/test", sub: [ // lvl 2
                  { name: "SubItem 1 lvl3", link: "/test", sub: [ // lvl 3
                      { name: "SubItem 1 lvl4", link: "/test", sub: [ // lvl 4
                          { name: "SubItem 1 lvl5", link: "/test", sub: [] }, // lvl 5
                        ] },
                      { name: "SubItem 1 lvl4", link: "/test", sub: [] },// lvl 4
                    ] },
                  { name: "SubItem 1 lvl3", link: "/test", sub: [] },// lvl 3
                  { name: "SubItem 2 lvl3", link: "/test", sub: [] },// lvl 3
                ] },
              { name: "SubItem 2 lvl2", link: "/test", sub: [] },// lvl 2
              { name: "SubItem 3 lvl2", link: "/test", sub: [] },// lvl 2
              { name: "SubItem 4 lvl2", link: "/test", sub: [] },// lvl 2
              { name: "SubItem 5 lvl2", link: "/test", sub: [] },// lvl 2
            ] },
          { name: "item 2", link: "/test", sub: [] },// lvl 1
          { name: "item 3", link: "/test", sub: [] },// lvl 1
          { name: "item 4", link: "/test", sub: [] },// lvl 1
          { name: "item 5", link: "/test", sub: [] },// lvl 1
          { name: "item 6", link: "/test", sub: [] },// lvl 1
          { name: "item 7", link: "/test", sub: [] },// lvl 1
          { name: "item 8", link: "/test", sub: [] },// lvl 1
          { name: "item 9", link: "/test", sub: [] },// lvl 1
          { name: "item 10", link: "/test", sub: [] },// lvl 1
        ],
      },
      {
        name: "Category 7",
        link: "/test",
        sub: [
          { name: "item 1 lvl1", link: "/test", sub: [ // lvl 1
              { name: "SubItem 1 lvl2", link: "/test", sub: [ // lvl 2
                  { name: "SubItem 1 lvl3", link: "/test", sub: [ // lvl 3
                      { name: "SubItem 1 lvl4", link: "/test", sub: [ // lvl 4
                          { name: "SubItem 1 lvl5", link: "/test", sub: [] }, // lvl 5
                        ] },
                      { name: "SubItem 1 lvl4", link: "/test", sub: [] },// lvl 4
                    ] },
                  { name: "SubItem 1 lvl3", link: "/test", sub: [] },// lvl 3
                  { name: "SubItem 2 lvl3", link: "/test", sub: [] },// lvl 3
                ] },
              { name: "SubItem 2 lvl2", link: "/test", sub: [] },// lvl 2
              { name: "SubItem 3 lvl2", link: "/test", sub: [] },// lvl 2
              { name: "SubItem 4 lvl2", link: "/test", sub: [] },// lvl 2
              { name: "SubItem 5 lvl2", link: "/test", sub: [] },// lvl 2
            ] },
          { name: "item 2", link: "/test", sub: [] },// lvl 1
          { name: "item 3", link: "/test", sub: [] },// lvl 1
          { name: "item 4", link: "/test", sub: [] },// lvl 1
          { name: "item 5", link: "/test", sub: [] },// lvl 1
          { name: "item 6", link: "/test", sub: [] },// lvl 1
          { name: "item 7", link: "/test", sub: [] },// lvl 1
          { name: "item 8", link: "/test", sub: [] },// lvl 1
          { name: "item 9", link: "/test", sub: [] },// lvl 1
          { name: "item 10", link: "/test", sub: [] },// lvl 1
        ],
      },
    ],
  },
  {
    name: "contactUs",
    link: "/contactUs",
    sub: [
        { name: "SubItem 1 lvl4", link: "/test", sub: [] },// lvl 4
    ],
  },
  {
    name: "About",
    link: "",
    sub: [
        { name: "SubItem 1 lvl4", link: "/test", sub: [] },// lvl 4
    ],
  },
];