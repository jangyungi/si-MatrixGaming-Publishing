import { MediaQueries } from "@/common/themes/Limit";
import { useCustomMediaQuery } from "@/common/themes/UseCustomMediaQuery";
import { TitleSection } from "@/domains/Home/common/components/TitleSection";
import { css } from "@emotion/react";

export const AboutUs = () => {
  const { isMedium } = useCustomMediaQuery();
  return (
    <div css={st.root(isMedium)} id="about-us">
      <TitleSection title="About Us" onVisible={false} />
      <div css={st.container}>
        Galileo Sky firmly believe that the essence of gaming is pure enjoyment.
        Our confidence springs from a visionary approach, guaranteeing our games
        radiate with unparalleled content, distinguishing themselves in an era
        of boundless possibilities and value. Embark on a captivating journey
        through mobile gaming, where every touch unveils a world of limitless
        enjoyment.
      </div>
    </div>
  );
};

const st = {
  root: (isMedium: boolean) => css`
    width: 100%;
    max-width: 1200px;
    padding: ${isMedium ? "0 16px" : "0 24px"};
    margin: 0 auto;
    margin-bottom: 140px;
    padding-top: 100px;

    @media ${MediaQueries.md} {
      padding-top: 112px;
      margin-bottom: 80px;
    }

    @media ${MediaQueries.sm} {
      padding-top: 92px;
      margin-bottom: 68px;
    }
  `,
  container: css`
    width: 100%;
    color: #eeeeee;
    font-size: 1.3em;
    line-height: 2.6em;
  `,
};
