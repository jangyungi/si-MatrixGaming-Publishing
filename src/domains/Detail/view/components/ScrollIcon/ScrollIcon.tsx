import Image from "next/image";
import ArrowIconImage from "@/assets/detail/icon/ic-arrow.png";
import { css, keyframes } from "@emotion/react";
import { useScrollIcon } from "./useScrollIcon";
import { MediaQueries } from "@/common/themes/Limit";
import { Typography } from "@mui/material";

export const ScrollIcon = () => {
  const { isScrollEnded } = useScrollIcon();

  return (
    <div css={st.root}>
      {!isScrollEnded ? (
        <div css={st.scrollDown}>
          <Typography
            fontSize="12px"
            lineHeight={"14px"}
            color={"#FFFFFF"}
            textAlign="center"
          >
            SCROLL
            <br />
            DOWN
          </Typography>
          <div css={st.arrowImage}>
            <Image fill src={ArrowIconImage} alt={"scroll-down"} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

const bounce = keyframes`
0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
40% {transform: translateY(-10px);}
60% {transform: translateY(-5px);}
`;

const st = {
  root: css`
    position: fixed;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    z-index: 99;

    @media ${MediaQueries.md} {
      bottom: 12px;
    }
  `,
  image: css``,

  scrollDown: css`
    position: relative;
    width: 100px;
    height: 100px;
    background: #1d1d1f;
    border: 1px solid #eeeeee;
    border-radius: 80px;
    text-align: center;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding: 20px 20px 14px 20px;

    @media ${MediaQueries.sm} {
      width: 80px;
      height: 80px;
    }
  `,
  arrowImage: css`
    position: relative;
    width: 25px;
    height: 17px;
    animation: ${bounce} 2s ease infinite;
  `,
};
