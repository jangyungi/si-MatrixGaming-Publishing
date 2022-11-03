import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperItem1 from "@/assets/home/swiper/swiper-item-1.svg";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useCustomMediaQuery } from "@/common/themes/UseCustomMediaQuery";
import { MediaQueries } from "@/common/themes/Limit";
import { Color } from "@/common/themes/Colors";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const SwiperSection = () => {
  const SwiperItems = [
    SwiperItem1,
    SwiperItem1,
    SwiperItem1,
    SwiperItem1,
    SwiperItem1,
    SwiperItem1,
  ];

  const [swiper, setSwiper] = useState<SwiperCore>();
  const slideNext = () => swiper?.slideNext();
  const slidePrev = () => swiper?.slidePrev();

  const { isMedium } = useCustomMediaQuery();
  return (
    <div css={st.root}>
      <Swiper
        spaceBetween={isMedium ? 0 : 50}
        slidesPerView={isMedium ? 1 : 1.5}
        initialSlide={1}
        centeredSlides={true}
        pagination={{ clickable: true }}
        loop={true}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
          scale: 0.8,
        }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {SwiperItems.map((it, index) => (
          <SwiperSlide key={index}>
            <div css={st.image}>
              <Image fill src={it} alt="slide" />
              <div className="swiper-image-background"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div css={st.btnContainer}>
        <Button onClick={slidePrev} color="secondary" css={st.btnWrapper}>
          <div css={st.btn}>
            <ChevronLeftIcon color={isMedium ? "primary" : "secondary"} />
          </div>
        </Button>
        <Button onClick={slideNext} color="secondary" css={st.btnWrapper}>
          <div css={st.btn}>
            <ChevronRightIcon color={isMedium ? "primary" : "secondary"} />
          </div>
        </Button>
      </div>
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
    aspect-ratio: 1/0.416;
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
