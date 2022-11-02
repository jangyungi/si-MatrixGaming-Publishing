import { css } from "@emotion/react";
import { CardItems } from "@/domains/Detail/common/model/card.model";
import { Typography } from "@mui/material";
import Image from "next/image";
import { MediaQueries } from "@/common/themes/Limit";

export const CardSection = () => {
  const { contents } = CardItems;
  return (
    <div css={st.root}>
      {contents.map((it, index) => (
        <div css={st.container} key={index}>
          <div css={st.wrapper}>
            <Typography color="secondary">{it.title}</Typography>
            <Typography color="primary">{it.desc}</Typography>
          </div>
          <div css={st.image}>
            <Image fill src={it.src} alt="img" />
          </div>
        </div>
      ))}
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 200px;
    margin: 0 auto;
    padding: 0 24px 200px 24px;

    @media ${MediaQueries.md} {
      padding: 0 20px 200px 20px;
    }
  `,
  container: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }

    @media ${MediaQueries.md} {
      flex-direction: column;
      &:nth-child(even) {
        flex-direction: column;
      }
    }
  `,
  wrapper: css`
    width: 51.6%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media ${MediaQueries.md} {
      width: 100%;
    }
  `,
  image: css`
    position: relative;
    width: 41.6%;
    aspect-ratio: 1/0.56;

    @media ${MediaQueries.md} {
      width: 100%;
    }
  `,
};
