import { MediaQueries } from "@/common/themes/Limit";
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
    margin-bottom: 140px;

    @media ${MediaQueries.md} {
      margin-top: 100px;
      margin-bottom: 40px;
    }
    @media ${MediaQueries.sm} {
      margin-top: 76px;
      margin-bottom: 32px;
    }

    @media ${MediaQueries.xs} {
      margin-top: 68px;
    }
  `,
};
