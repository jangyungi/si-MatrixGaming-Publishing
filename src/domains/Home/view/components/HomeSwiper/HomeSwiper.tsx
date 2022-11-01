import { css } from "@emotion/react";
import { SwiperSection } from "./swiper";

export const HomeSwiper = () => {
  return (
    <div css={st.root}>
      <SwiperSection />
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    margin-top: 176px;
    margin-bottom: 320px;
  `,
};
