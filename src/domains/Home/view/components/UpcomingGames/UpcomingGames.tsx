import { MediaQueries } from "@/common/themes/Limit";
import { css } from "@emotion/react";
import { SwiperSection } from "./swiper";

export const UpcomingGames = () => {
  return (
    <div css={st.root} id="upcoming-games">
      <SwiperSection />
    </div>
  );
};

const st = {
  root: css`
    padding-top: 100px;
    margin-bottom: 240px;

    @media ${MediaQueries.md} {
      padding-top: 0px;
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
