import { css } from "@emotion/react";
import Image from "next/image";
import { CardType } from "@/domains/Home/view/components/OnboardedGames/models/card.type";
import { Typography } from "@mui/material";
import { Color } from "@/common/themes/Colors";

export const GameCard = (props: CardType) => {
  return (
    <div css={st.container}>
      <div css={st.image}>
        <Image fill src={props.src} alt="card-img" />
      </div>
      <div css={st.wrapper}>
        <Typography fontWeight={500} color={Color.TextMain} mb={"16px"}>
          {props.title}
        </Typography>
        <Typography fontWeight={300} color={Color.TextMain}>
          {props.desc}
        </Typography>
      </div>
    </div>
  );
};

const st = {
  container: css`
    width: 100%;
  `,
  image: css`
    position: relative;
    width: 100%;
    aspect-ratio: 1/0.561;
  `,
  wrapper: css`
    width: 100%;
    aspect-ratio: 1/0.405;
    background-color: ${Color.Primary};
    padding: 8.8% 8.8% 0 8.8%;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    overflow: hidden;
  `,
};
