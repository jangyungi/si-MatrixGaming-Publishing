import { TitleSection } from "@/domains/Home/common/components/TitleSection";
import { css } from "@emotion/react";
import { SwiperSection } from "./swiper";

export const UpcomingGames = () => {
  return (
    <div css={st.root}>
      <TitleSection title="Upcoming Games" onClick={() => alert("click")} />
      <SwiperSection />
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 240px;
  `,
};
