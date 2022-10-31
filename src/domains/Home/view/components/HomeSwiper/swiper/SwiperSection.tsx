import { css } from "@emotion/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperItem1 from "@/assets/home/swiper/swiper-item-1.svg";
import Image from "next/image";

export const SwiperSection = () => {
  const SwiperItems = [
    SwiperItem1,
    SwiperItem1,
    SwiperItem1,
    SwiperItem1,
    SwiperItem1,
    SwiperItem1,
  ];
  return (
    <div css={st.container}>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
      >
        {SwiperItems.map((it, index) => (
          <SwiperSlide key={index}>
            <div css={st.slideImage}>
              <Image fill src={it} alt="slide" />
            </div>
          </SwiperSlide>
        ))}
        {/*  
        <SwiperSlide>
          <div css={st.slideImage}>
            <Image fill src={SwiperItem1} alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div css={st.slideImage}>
            <Image fill src={SwiperItem1} alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div css={st.slideImage}>
            <Image fill src={SwiperItem1} alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div css={st.slideImage}>
            <Image fill src={SwiperItem1} alt="slide" />
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

const st = {
  container: css`
    width: 100%;
    padding: 96px 0;
  `,

  slideImage: css`
    position: relative;
    width: 1200px;
    aspect-ratio: 1/0.416;
  `,
};
