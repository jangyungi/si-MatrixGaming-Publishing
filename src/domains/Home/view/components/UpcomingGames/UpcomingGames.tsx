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
      padding-top: 120px;
      margin-top: 120px;
      margin-bottom: 120px;
    }

    @media ${MediaQueries.sm} {
      margin-top: 100px;
      padding-top: 80px;
      margin-bottom: 120px;
    }

    @media ${MediaQueries.xs} {
      margin-bottom: 80px;
    }
  `,
};
