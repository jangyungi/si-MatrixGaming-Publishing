import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore from "swiper";
import { Autoplay, EffectCoverflow } from "swiper";
import Image from "next/image";
import { useState } from "react";
import { Typography } from "@mui/material";
import { UpcomingSlideItems } from "./models/upcoming.model";
import { MediaQueries } from "@/common/themes/Limit";
import { Color } from "@/common/themes/Colors";
import { SwiperTitleSection } from "./swiperTitle";
import { useCustomMediaQuery } from "@/common/themes/UseCustomMediaQuery";

export const SwiperSection = () => {
  const { isTablet, isLarge, isMedium } = useCustomMediaQuery();
  const [swiper, setSwiper] = useState<SwiperCore>();
  const slideNext = () => swiper?.slideNext();
  const slidePrev = () => swiper?.slidePrev();

  return (
    <div css={st.root}>
      <div css={st.title}>
        <SwiperTitleSection
          title="Upcoming Games"
          onPrevClick={slidePrev}
          onNextClick={slideNext}
        />
      </div>
      <div css={st.container} data-aos="zoom-out" data-aos-delay="300">
        <Swiper
          spaceBetween={isTablet ? 30 : 45}
          slidesPerView={isLarge ? 1.5 : 4}
          initialSlide={1}
          centeredSlides={true}
          loop={true}
          modules={[EffectCoverflow, Autoplay]}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          {UpcomingSlideItems.map((it, index) => (
            <SwiperSlide key={index}>
              <div css={st.image}>
                <Image fill src={it.src} alt="slide" css={st.imageContent} />
                <div css={st.opacity}></div>
                <div css={st.backgruondOpacity}></div>
                <Typography
                  variant="subtitle2"
                  fontWeight={500}
                  color="secondary"
                  css={st.text}
                >
                  {it.title}
                </Typography>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
  `,
  container: css`
    width: 100%;
    position: relative;
  `,

  image: css`
    position: relative;
    width: 100% !important;
    aspect-ratio: 1/0.49;
    border-radius: 8px;
  `,
  imageContent: css`
    border-radius: 8px;
  `,

  opacity: css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.7;
    border-radius: 8px;
  `,

  backgruondOpacity: css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
    border-radius: 8px;
  `,

  text: css`
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 99;

    overflow: hidden;

    @media ${MediaQueries.lg} {
      font-size: 28px;
    }

    @media ${MediaQueries.sm} {
      font-size: 20px;
    }
  `,

  title: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 24px;
    @media ${MediaQueries.md} {
      padding: 0 20px;
    }
  `,
  btnContainer: css`
    width: 74.5%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    display: flex;
    justify-content: space-between;

    @media ${MediaQueries.md} {
      width: 94%;
    }
  `,
  btnWrapper: css`
    width: 3%;
    aspect-ratio: 1;
    min-width: 24px;
    min-height: 24px;
    aspect-ratio: 1;
    padding: 0;
  `,
  btn: css`
    width: 100%;
    height: 100%;
    background-color: black;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 10px #000000;

    @media ${MediaQueries.md} {
      background-color: ${Color.TextMain};
    }
  `,
};
