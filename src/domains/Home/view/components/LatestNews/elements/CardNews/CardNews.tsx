import { css } from "@emotion/react";
import Image from "next/image";
import { Typography } from "@mui/material";
import { Color } from "@/common/themes/Colors";
import Link from "next/link";
import { MediaQueries } from "@/common/themes/Limit";

type CardNewsType = {
  src: any;
  text: string;
};

export const CardNews = ({ src, text }: CardNewsType) => {
  return (
    <div
      css={st.root}
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <Link href={"/"}>
        <div className="card-news__wrapper" css={st.imgWrapper}>
          <Image fill src={src} alt="card" />
          <div css={st.opacity}></div>
          <Typography variant="body1" color={Color.TextMain} css={st.text}>
            {text}
          </Typography>
        </div>
      </Link>
    </div>
  );
};

const st = {
  root: css`
    width: 100%;

    &:nth-of-type(1) {
      grid-column: 1 / span 1;
      grid-row: 1 / span 4;

      .card-news__wrapper {
        aspect-ratio: unset;
        height: 97.4%;
      }
    }

    @media ${MediaQueries.md} {
      &:nth-of-type(1) {
        grid-column: unset;
        grid-row: unset;

        .card-news__wrapper {
          aspect-ratio: 1/1.12;
          height: unset;
        }
      }
    }
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
    z-index: 1;
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
    z-index: 2;
  `,
};
