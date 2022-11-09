import Image from "next/image";
import ScrollIconImage from "@/assets/detail/icon/ic-scroll-down.svg";
import { css } from "@emotion/react";
import { useScrollIcon } from "./useScrollIcon";
import { MediaQueries } from "@/common/themes/Limit";

export const ScrollIcon = () => {
  const { isScrollEnded } = useScrollIcon();
  return (
    <div css={st.root}>
      {!isScrollEnded ? (
        <div css={st.image}>
          <Image fill src={ScrollIconImage} alt={"scroll-down"} />
        </div>
      ) : null}
    </div>
  );
};

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
  image: css`
    position: relative;
    width: 100px;
    height: 100px;

    @media ${MediaQueries.sm} {
      width: 80px;
      height: 80px;
    }
  `,
};
