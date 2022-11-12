import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import Logo from "@/assets/header/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { MediaQueries } from "@/common/themes/Limit";
import Link from "next/link";

export const MobileHeader = () => {
  return (
    <div css={st.root}>
      <div css={st.inner}>
        <Link href="/" css={st.logoWrapper}>
          <div css={st.image}>
            <Image fill src={Logo} alt={"logo"} />
          </div>
        </Link>
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
    height: 100px;
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
    width: 200px;
    height: 60px;

    @media ${MediaQueries.sm} {
      width: 200px;
      height: 60px;
    }
    @media ${MediaQueries.xs} {
      width: 120px;
      aspect-ratio: 1/0.36;
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
