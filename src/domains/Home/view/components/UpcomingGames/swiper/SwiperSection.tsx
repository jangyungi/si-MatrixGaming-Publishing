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

export const SwiperSection = () => {
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
      <div css={st.container}>
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
