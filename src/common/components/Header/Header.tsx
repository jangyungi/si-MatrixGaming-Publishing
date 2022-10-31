import { css } from "@emotion/react";
import { useCustomMediaQuery } from "@/common/themes/UseCustomMediaQuery";
import { LaptopHeader, MobileHeader } from "./elements";

export const Header = () => {
  const { isMedium } = useCustomMediaQuery();

  return (
    <header css={st.header}>
      {isMedium ? <MobileHeader /> : <LaptopHeader />}
    </header>
  );
};

const st = {
  header: css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  `,
};
