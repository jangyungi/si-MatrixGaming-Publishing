import { MediaQueries } from "@/common/themes/Limit";
import { TitleSection } from "@/domains/Home/common/components/TitleSection";
import { css } from "@emotion/react";
import { SwiperSection } from "./swiper";

export const UpcomingGames = () => {
  return (
    <div css={st.root}>
      <div css={st.title}>
        <TitleSection title="Upcoming Games" onClick={() => alert("click")} />
      </div>
      <SwiperSection />
    </div>
  );
};

const st = {
  root: css`
    margin-bottom: 240px;

    @media ${MediaQueries.md} {
      margin-top: 900px;
    }
  `,

  title: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 24px;
    @media ${MediaQueries.md} {
      padding: 0 20px;
    }
  `,
};
