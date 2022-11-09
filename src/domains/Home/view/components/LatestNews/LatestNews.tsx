import { MediaQueries } from "@/common/themes/Limit";
import { useCustomMediaQuery } from "@/common/themes/UseCustomMediaQuery";
import { TitleSection } from "@/domains/Home/common/components/TitleSection";
import { css } from "@emotion/react";
import { CardNews } from "./elements/CardNews";
import { CardNewsItems } from "./models/cardNews.model";

export const LatestNews = () => {
  const { isMedium } = useCustomMediaQuery();
  return (
    <div css={st.root(isMedium)} id="latest-news">
      <TitleSection title="Latest News" onClick={() => alert("click")} />
      <div css={st.container(isMedium)}>
        {CardNewsItems.map((it, index) => (
          <CardNews key={index} src={it.src} text={it.text} />
        ))}
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
