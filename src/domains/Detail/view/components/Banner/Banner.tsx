import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { MediaQueries } from "@/common/themes/Limit";
import { BannerType } from "@/domains/Detail/common/models/type/card.type";
import { useCustomMediaQuery } from "@/common/themes/UseCustomMediaQuery";

type BannerSectionProps = {
  props: BannerType;
};

export const Banner = ({ props }: BannerSectionProps) => {
  const { isSmall, isMedium } = useCustomMediaQuery();
  return (
    <div css={st.root}>
      <div css={st.image}>
        <Image
          fill
          src={isMedium ? props.mobileSrc : props.src}
          alt="img"
          style={{ objectFit: "cover", maxHeight: 600 }}
        />
        <div css={st.opacity}></div>
        <div css={st.textContainer}>
          <Typography
            variant="caption"
            color="secondary"
            lineHeight={1}
            css={st.caption}
            mb={isSmall ? "18px" : "24px"}
          >
            {"Onboarded Games"}
          </Typography>
          <Typography
            variant="h1"
            color="secondary"
            fontWeight={700}
            lineHeight={1.2}
            css={st.title}
          >
            {props.title}
          </Typography>
        </div>
      </div>
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    margin-top: 80px;

    @media ${MediaQueries.md} {
      margin-top: 100px;
    }
    @media ${MediaQueries.sm} {
      margin-top: 76px;
    }

    @media ${MediaQueries.xs} {
      margin-top: 68px;
    }
  `,
  image: css`
    position: relative;
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;

    @media ${MediaQueries.sm} {
      height: 400px;
    }
  `,

  caption: css`
    @media ${MediaQueries.lg} {
      font-size: 14px;
    }
    @media ${MediaQueries.md} {
      font-size: 20px;
    }
    @media ${MediaQueries.sm} {
      font-size: 14px;
    }

    @media ${MediaQueries.xs} {
      font-size: 12px;
    }
  `,

  textContainer: css`
    width: 100%;
    max-width: 1200px;
    position: absolute;
    bottom: 12%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    padding: 0 24px;
    z-index: 2;
  `,

  opacity: css`
    width: 100%;
    aspect-ratio: 1/0.2;
    position: absolute;
    left: 0;
    bottom: 0;
    background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
    transform: rotate(180deg);
    z-index: 1;

    @media ${MediaQueries.md} {
      aspect-ratio: 1/0.72;
    }
  `,

  title: css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
  `,
};
