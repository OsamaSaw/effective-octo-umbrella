import {
  ControlledMenu,
  MenuItemProps,
  useHover,
  useMenuState,
} from "@szhsin/react-menu";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export const CustomMenu = ({
  name,
  children,
  link,
}: {
  children?: any;
  name: string;
  link?: string;
}) => {
  const ref = useRef(null);
  const [menuState, toggle] = useMenuState({ transition: true });
  const { anchorProps, hoverProps } = useHover(menuState.state, toggle);
  const { push } = useRouter();

  return (
    <>
      <div
        className="cursor-pointer"
        ref={ref}
        {...(!children ? [] : anchorProps)}
      >
        {name}
      </div>

      <ControlledMenu
        onClick={() => {
          if (!children && link) push(link);
        }}
        {...hoverProps}
        {...menuState}
        anchorRef={ref}
        onClose={() => toggle(false)}
      >
        {children}
      </ControlledMenu>
    </>
  );
};
