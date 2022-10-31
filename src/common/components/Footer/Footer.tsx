import { css } from "@emotion/react";
import { useCustomMediaQuery } from "@/common/themes/UseCustomMediaQuery";

export const Footer = () => {
  const { isMedium } = useCustomMediaQuery();

  return (
    <footer css={st.footer}>
      {isMedium ? <PcFooter /> : <MobileFooter />}
    </footer>
  );
};

const PcFooter = () => {
  return <div></div>;
};

const MobileFooter = () => {
  return <div></div>;
};

const st = {
  footer: css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  `,
};
