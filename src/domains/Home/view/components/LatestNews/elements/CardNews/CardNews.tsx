import { css } from "@emotion/react";
import { CardNewsType } from "../../models/cardNews.type";
import Image from "next/image";
import { Typography } from "@mui/material";
import { Color } from "@/common/themes/Colors";
import Link from "next/link";
import { MediaQueries } from "@/common/themes/Limit";

export const CardNews = (props: CardNewsType) => {
  return (
    <Link href={"/"}>
      <div css={st.root}>
        <div css={st.imgWrapper}>
          <Image fill src={props.src} alt="card" />
          <div css={st.opacity}></div>
          <Typography variant="body1" color={Color.TextMain} css={st.text}>
            {props.text}
          </Typography>
        </div>
      </div>
    </Link>
  );
};

const st = {
  root: css`
    width: 100%;
  `,

  imgWrapper: css`
    width: 100%;
    aspect-ratio: 1/0.345;
    position: relative;
    z-index: 0;
    flex: 1;
    min-width: 0;
  `,

  opacity: css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(0deg, #000000 34.9%, rgba(0, 0, 0, 0) 100%);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  `,

  text: css`
    width: 100%;
    position: absolute;
    bottom: 32px;
    left: 32px;
    padding-right: 64px;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
};
