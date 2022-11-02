import { css } from "@emotion/react";
import Image from "next/image";
import GameImage from "@/assets/images/game/toy/toy-1.png";
import { Typography, TypographyProps } from "@mui/material";
import { Color } from "@/common/themes/Colors";
import { MediaQueries } from "@/common/themes/Limit";
import { CardItems } from "@/domains/Detail/common/model/card.model";

export const MainCardSection = () => {
  const { main } = CardItems;
  return (
    <div css={st.root}>
      <div css={st.imageBox}>
        <div css={st.image}>
          <Image fill src={GameImage} alt="img" />
        </div>
        <div css={st.textBox}>
          <div css={st.row}>
            <Text>{"Developer"}</Text>
            <Text>{main.info.developer}</Text>
          </div>
          <div css={st.row}>
            <Text>{"Genre"}</Text>
            <Text>{main.info.genre}</Text>
          </div>
          <div css={st.row}>
            <Text>{"Status"}</Text>
            <Text>{main.info.status}</Text>
          </div>
        </div>
      </div>
      <div css={st.contentBox}>
        <Typography color="secondary" fontSize={"24px"} lineHeight={"40px"}>
          {main.desc}
        </Typography>
      </div>
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    max-width: 1200px;
    height: 600px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -50px;
    margin-bottom: 200px;
    position: relative;
    z-index: 9;

    @media ${MediaQueries.md} {
      height: unset;
      flex-direction: column;
      justify-content: unset;
      padding: 0 20px;
      margin-top: unset;
      gap: 40px;
    }
  `,

  imageBox: css`
    width: 41.6%;
    align-self: flex-start;
    @media ${MediaQueries.md} {
      width: 100%;
      align-items: unset;
    }
  `,
  image: css`
    position: relative;
    width: 100%;
    aspect-ratio: 1/0.56;
    margin-bottom: 40px;
  `,
  textBox: css`
    width: 100%;
    background-color: ${Color.Background};
    border-radius: 8px;
    padding: 6.4%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  row: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
  contentBox: css`
    width: 54%;
    @media ${MediaQueries.md} {
      width: 100%;
    }
  `,
};

const Text = (p: TypographyProps) => {
  return <Typography lineHeight={1} color="secondary" {...p} />;
};
