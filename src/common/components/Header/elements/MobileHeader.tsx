import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import Logo from "@/assets/header/logo.svg";
import { Color } from "@/common/themes/Colors";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { MediaQueries } from "@/common/themes/Limit";

export const MobileHeader = () => {
  return (
    <div css={st.root}>
      <div css={st.inner}>
        <a href="#" css={st.logoWrapper}>
          <div css={st.image}>
            <Image fill src={Logo} alt={"logo"} />
          </div>
          <Typography variant={"h2"} fontWeight={700} color={Color.TextMain}>
            {"MATRIX GAMING"}
          </Typography>
        </a>
        <IconButton>
          <MenuIcon color="secondary" css={st.menuIcon} />
        </IconButton>
      </div>
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
  `,
  inner: css`
    width: 100%;
    padding: 10px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  `,

  logoWrapper: css`
    display: flex;
    align-items: center;
    gap: 24px;

    @media ${MediaQueries.sm} {
      gap: 20px;
    }
    @media ${MediaQueries.xs} {
      gap: 16px;
    }
  `,

  image: css`
    position: relative;
    width: 64px;
    height: 64px;

    @media ${MediaQueries.sm} {
      width: 40px;
      height: 40px;
    }
    @media ${MediaQueries.xs} {
      width: 32px;
      height: 32px;
    }
  `,

  menuIcon: css`
    font-size: 64px;

    @media ${MediaQueries.sm} {
      font-size: 40px;
    }
    @media ${MediaQueries.xs} {
      font-size: 32px;
    }
  `,
};
