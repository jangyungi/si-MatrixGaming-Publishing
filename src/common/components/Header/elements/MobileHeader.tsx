import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import Logo from "@/assets/images/logo.svg";
import { Color } from "@/common/themes/Colors";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

export const MobileHeader = () => {
  return (
    <div css={st.root}>
      <div css={st.inner}>
        <a href="#" css={st.logoWrapper}>
          <Image width={64} height={64} src={Logo} alt={"logo"} />
          <Typography fontSize={40} fontWeight={700} color={Color.TextMain}>
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
  `,
  menuIcon: css`
    font-size: 64px;
  `,
};
