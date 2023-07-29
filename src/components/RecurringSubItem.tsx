import { MenuType } from "@/utils/MenuData";
import { MenuItem, SubMenu } from "@szhsin/react-menu";
import { useRouter } from "next/navigation";

export const RecurringSubItem = ({
  navItem,
  index,
}: {
  navItem: MenuType;
  index: number;
}) => {
  const { push } = useRouter();
  return (
    navItem.sub.length !== 0 && (
      <>
        {navItem.sub.map((subItem: MenuType, index) => {
          return subItem.sub.length == 0 ? (
            <MenuItem
              onClick={() => {
                if (subItem.link) push(subItem.link);
              }}
              key={subItem.name + index}
            >
              {subItem.name}
            </MenuItem>
          ) : (
            <SubMenu key={index} label={subItem.name}>
              <RecurringSubItem index={index * 2} navItem={subItem} />{" "}
            </SubMenu>
          );
        })}
      </>
    )
  );
};
