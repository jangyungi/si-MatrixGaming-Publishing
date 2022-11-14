import { MediaQueries } from "@/common/themes/Limit";
import { useCustomMediaQuery } from "@/common/themes/UseCustomMediaQuery";
import { TitleSection } from "@/domains/Home/common/components/TitleSection";
import { css } from "@emotion/react";
import { CardNews } from "./elements/CardNews";
import LargeCardImage from "@/assets/home/latest/large-card.png";
import SmallCardImage from "@/assets/home/latest/small-card.png";

export const LatestNews = () => {
  const { isMedium } = useCustomMediaQuery();
  return (
    <div css={st.root(isMedium)} id="latest-news">
      <TitleSection title="Latest News" onMobileVisible={true} />
      <div css={st.container(isMedium)}>
        <CardNews src={LargeCardImage} text={"To be updated..."} />
        <CardNews src={SmallCardImage} text={"To be updated..."} />
        <CardNews src={SmallCardImage} text={"To be updated..."} />
        <CardNews src={SmallCardImage} text={"To be updated..."} />
      </div>
    </div>
  );
};

const st = {
  root: (isMedium: boolean) => css`
    width: 100%;
    max-width: 1200px;
    padding: ${isMedium ? "0 16px" : "0 24px"};
    margin: 0 auto;
    padding-bottom: 200px;

    @media ${MediaQueries.md} {
      padding-bottom: 400px;
    }

    @media ${MediaQueries.sm} {
      padding-bottom: 140px;
    }

    @media ${MediaQueries.xs} {
      padding-bottom: 80px;
    }
  `,

  container: (isMedium: boolean) => css`
    width: 100%;
    display: grid;
    grid-template-columns: ${isMedium ? "1fr" : "1fr 1fr"};
    column-gap: 3%;
    row-gap: 3%;
  `,
};
