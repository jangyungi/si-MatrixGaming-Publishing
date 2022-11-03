import { css } from "@emotion/react";
import Image from "next/image";
import { Typography, TypographyProps } from "@mui/material";
import { Color } from "@/common/themes/Colors";
import { MediaQueries } from "@/common/themes/Limit";
import { useCustomMediaQuery } from "@/common/themes/UseCustomMediaQuery";
import { MainCardType } from "@/domains/Detail/common/models/type/card.type";

export type MainCardSectionProps = {
  props: MainCardType;
};
export const MainCardSection = ({ props }: MainCardSectionProps) => {
  const { isMedium } = useCustomMediaQuery();
  return (
    <div css={st.root}>
      <div css={st.imageBox}>
        <div css={st.image}>
          <Image fill src={props.src} alt="img" />
        </div>
        <div css={st.textBox}>
          <div css={st.row}>
            <Text>{"Developer"}</Text>
            <Text>{props.info.developer}</Text>
          </div>
          <div css={st.row}>
            <Text>{"Genre"}</Text>
            <Text>{props.info.genre}</Text>
          </div>
          <div css={st.row}>
            <Text>{"Status"}</Text>
            <Text>{props.info.status}</Text>
          </div>
        </div>
      </div>
      <div css={st.contentBox}>
        <Typography
          variant="h2"
          color="secondary"
          fontWeight={400}
          fontSize={"24px"}
          lineHeight={isMedium ? 1.4 : "40px"}
          sx={{ whiteSpace: "pre-wrap" }}
        >
          {props.desc}
        </Typography>
      </div>
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    max-width: 1200px;
    height: 600px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -50px;
    margin-bottom: 200px;
    position: relative;
    z-index: 9;

    @media ${MediaQueries.md} {
      height: unset;
      flex-direction: column;
      justify-content: unset;
      padding: 0 20px;
      margin-top: unset;
      margin-bottom: 240px;
      gap: 50px;
    }

    @media ${MediaQueries.sm} {
      margin-bottom: 160px;
      gap: 16px;
    }

    @media ${MediaQueries.xs} {
      margin-bottom: 120px;
      gap: 12px;
    }
  `,

  imageBox: css`
    width: 41.6%;
    align-self: flex-start;
    @media ${MediaQueries.md} {
      width: 100%;
      align-items: unset;
      margin-top: -6%;
    }
  `,
  image: css`
    position: relative;
    width: 100%;
    aspect-ratio: 1/0.56;
    margin-bottom: 40px;

    @media ${MediaQueries.sm} {
      margin-bottom: 16px;
    }

    @media ${MediaQueries.xs} {
      margin-bottom: 12px;
    }
  `,
  textBox: css`
    width: 100%;
    background-color: ${Color.Background};
    border-radius: 8px;
    padding: 6.4%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  row: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
  contentBox: css`
    width: 54%;
    @media ${MediaQueries.md} {
      width: 100%;
    }
  `,
};

const Text = (p: TypographyProps) => {
  return (
    <Typography variant="caption" lineHeight={1} color="secondary" {...p} />
  );
};
