import { MediaQueries } from "@/common/themes/Limit";
import { useCustomMediaQuery } from "@/common/themes/UseCustomMediaQuery";
import { TitleSection } from "@/domains/Home/common/components/TitleSection";
import { css } from "@emotion/react";

export const ContactUs = () => {
  const { isMedium } = useCustomMediaQuery();
  return (
    <div css={st.root(isMedium)} id="contact-us">
      <TitleSection title="Contact Us" onVisible={false} />
      <div css={st.container}>
        <a href="mailto:contact@galileosky.net">contact22@galileosky.net</a>
      </div>
      <div>
        <a href="./policy.html">Privacy Policy</a>
      </div>
      <div>
        <a href="https://www.galileosky.net/service.html">Terms of Service</a>
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
    padding-bottom: 200px;

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
    line-height: 1.5em;
  `,
};
