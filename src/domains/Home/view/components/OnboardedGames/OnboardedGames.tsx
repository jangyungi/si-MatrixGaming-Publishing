import { TitleSection } from "@/domains/Home/common/components/TitleSection";
import { css } from "@emotion/react";
import { GameCard } from "./elements/GameCard";
import { CardItems } from "./models/card.models";

export const OnboardedGames = () => {
  return (
    <div css={st.root}>
      <TitleSection title="Onboarded Games" onClick={() => alert("click")} />
      <div css={st.container}>
        {CardItems.map((it, index) => (
          <GameCard key={index} src={it.src} title={it.title} desc={it.desc} />
        ))}
      </div>
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 240px;
  `,
  container: css`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 3%;
    row-gap: 3%;
  `,
};
