import { MediaQueries } from "@/common/themes/Limit";
import { css } from "@emotion/react";
import { SwiperSection } from "./swiper";

export const UpcomingGames = () => {
  return (
    <div css={st.root}>
      <SwiperSection />
    </div>
  );
};

const st = {
  root: css`
    margin-bottom: 240px;

    @media ${MediaQueries.md} {
      margin-top: 240px;
    }

    @media ${MediaQueries.sm} {
      margin-top: 0px;
      margin-bottom: 200px;
    }

    @media ${MediaQueries.sm} {
      margin-top: 0px;
      margin-bottom: 160px;
    }
  `,
};
