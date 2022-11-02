import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import BannerImg from "@/assets/detail/banner/img-banner.svg";

export const Banner = () => {
  const BannerItem = {
    src: BannerImg,
    caption: "Onboarded Games",
    title: '"Become a King and save the kingdom from an obscure conspiracy"',
  };

  return (
    <div css={st.root}>
      <div css={st.image}>
        <Image
          fill
          src={BannerItem.src}
          alt="img"
          style={{ objectFit: "cover", maxHeight: 600 }}
        />
        <div css={st.opacity}></div>
        <div css={st.textContainer}>
          <Typography variant="caption" color="secondary" mb={0.4}>
            {BannerItem.caption}
          </Typography>
          <Typography
            variant="h1"
            color="secondary"
            fontSize={"40px"}
            fontWeight={700}
            lineHeight={1.2}
          >
            {BannerItem.title}
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
  `,
  image: css`
    position: relative;
    width: 100%;
    height: 600px;

    display: flex;
    justify-content: center;
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
  `,
};
