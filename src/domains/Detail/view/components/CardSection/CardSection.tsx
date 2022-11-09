import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { MediaQueries } from "@/common/themes/Limit";
import { ContentsType } from "@/domains/Detail/common/models/type/card.type";

export type CardSectionProps = {
  props: ContentsType;
};

export const CardSection = ({ props }: CardSectionProps) => {
  return (
    <div css={st.root}>
      {props.map((it, index) => (
        <div css={st.container} key={index}>
          <div css={st.wrapper}>
            <Typography
              variant="subtitle1"
              color="secondary"
              fontWeight={700}
              lineHeight={1.2}
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              {it.title}
            </Typography>
            <Typography
              variant="h2"
              fontWeight={400}
              color="primary"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              {it.desc}
            </Typography>
          </div>
          <div
            css={st.image}
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
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
    gap: 160px;
    margin: 0 auto;
    padding: 0 24px 200px 24px;

    @media ${MediaQueries.md} {
      padding: 0 20px 200px 20px;
      gap: 120px;
    }

    @media ${MediaQueries.sm} {
      padding: 0 20px 100px 20px;
      gap: 80px;
    }

    @media ${MediaQueries.xs} {
      gap: 60px;
    }
  `,
  container: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:nth-of-type(even) {
      flex-direction: row-reverse;
    }

    @media ${MediaQueries.md} {
      flex-direction: column-reverse;
      gap: 40px;
      &:nth-of-type(even) {
        flex-direction: column-reverse;
      }
    }

    @media ${MediaQueries.sm} {
      gap: 16px;
    }
    @media ${MediaQueries.xs} {
      gap: 12px;
    }
  `,
  wrapper: css`
    width: 51.6%;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media ${MediaQueries.md} {
      width: 100%;
    }

    @media ${MediaQueries.sm} {
      gap: 16px;
    }

    @media ${MediaQueries.xs} {
      gap: 12px;
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
