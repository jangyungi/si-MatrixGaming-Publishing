import { MediaQueries } from "@/common/themes/Limit";
import { useCustomMediaQuery } from "@/common/themes/UseCustomMediaQuery";
import { TitleSection } from "@/domains/Home/common/components/TitleSection";
import { css } from "@emotion/react";
import { GameCard } from "./elements/GameCard";
import { CardItems } from "./models/card.models";

export const OnboardedGames = () => {
  const { isMedium } = useCustomMediaQuery();
  return (
    <div css={st.root(isMedium)}>
      <TitleSection title="Onboarded Games" onClick={() => alert("click")} />
      <div css={st.container}>
        {CardItems.map((it, index) => (
          <GameCard
            key={index}
            name={it.name}
            src={it.src}
            title={it.title}
            desc={it.desc}
          />
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
    margin-bottom: 240px;

    @media ${MediaQueries.sm} {
      margin-bottom: 200px;
    }

    @media ${MediaQueries.sm} {
      margin-bottom: 160px;
    }
  `,
  container: css`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 3%;
    row-gap: 3%;

    @media ${MediaQueries.lg} {
      grid-template-columns: 1fr 1fr;
    }

    @media ${MediaQueries.md} {
      grid-template-columns: 1fr;
      column-gap: 0px;
      row-gap: 40px;
    }
    @media ${MediaQueries.sm} {
      grid-template-columns: 1fr;
      column-gap: 0px;
      row-gap: 0px;
    }

    @media ${MediaQueries.xs} {
      row-gap: 20px;
    }
  `,
};
