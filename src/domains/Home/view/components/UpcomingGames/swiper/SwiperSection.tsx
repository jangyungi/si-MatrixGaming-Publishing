import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore from "swiper";
import { Autoplay, EffectCoverflow } from "swiper";
import Image from "next/image";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useCustomMediaQuery } from "@/common/themes/UseCustomMediaQuery";
import { MediaQueries } from "@/common/themes/Limit";
import { UpcomingSlideItems } from "./models/upcoming.model";

export const SwiperSection = () => {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const slideNext = () => swiper?.slideNext();
  const slidePrev = () => swiper?.slidePrev();

  return (
    <div css={st.root}>
      <Swiper
        spaceBetween={30}
        slidesPerView={1.5}
        initialSlide={1}
        centeredSlides={true}
        loop={true}
        onSlideChange={(e) => console.log(e)}
        modules={[EffectCoverflow, Autoplay]}
        onSwiper={(swiper) => setSwiper(swiper)}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {UpcomingSlideItems.map((it, index) => (
          <SwiperSlide key={index}>
            <div css={st.image}>
              <Image fill src={it.src} alt="slide" />
              <div css={st.titleWrapper}>
                <Typography
                  variant="subtitle2"
                  fontWeight={500}
                  color="secondary"
                  sx={{ overflow: "hidden" }}
                >
                  {it.title}
                </Typography>
              </div>
              <div className="swiper-image-opacity"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    position: relative;
  `,

  image: css`
    position: relative;
    width: 100%;
    aspect-ratio: 1/0.49;
  `,

  titleWrapper: css`
    width: 100%;
    height: 100%;
    padding: 8.6%;
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    z-index: 99;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  `,
};
