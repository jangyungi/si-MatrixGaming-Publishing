import { css } from "@emotion/react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import Logo from "@/assets/header/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { MediaQueries } from "@/common/themes/Limit";
import Link from "next/link";
import { menu } from "../models/Menu.model";
import { Color } from "@/common/themes/Colors";
import { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useCustomMediaQuery } from "@/common/themes/UseCustomMediaQuery";
import { useRecoilState, useSetRecoilState } from "recoil";
import { menuState } from "@/utils/recoil/menu.recoil";

export const MobileHeader = () => {
  const setMenuState = useSetRecoilState(menuState);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isSmall } = useCustomMediaQuery();

  const onMenuOpen = () => {
    setMenuOpen(true);
    setMenuState(true);
  };

  const onMenuClose = () => {
    setMenuOpen(false);
    setMenuState(false);
  };

  return (
    <AppBar>
      <Toolbar sx={{ backgroundColor: "black", padding: "0px !important" }}>
        <div css={st.root}>
          <div css={st.inner}>
            <Link href="/" css={st.logoWrapper}>
              <div css={st.image}>
                <Image fill src={Logo} alt={"logo"} />
              </div>
            </Link>
            <IconButton onClick={onMenuOpen}>
              <MenuIcon color="secondary" css={st.menuIcon} />
            </IconButton>
          </div>
          <nav css={st.menuBackground(menuOpen)}>
            <ul css={st.menuContainer(menuOpen)}>
              <IconButton css={st.closeBtn} onClick={onMenuClose}>
                <CloseIcon
                  sx={{ color: "white", fontSize: isSmall ? "32px" : "40px" }}
                />
              </IconButton>
              {menu.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} onClick={onMenuClose}>
                    <Typography variant={"caption"} color={Color.TextMain}>
                      {label}
                    </Typography>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Toolbar>
    </AppBar>
  );
};

const st = {
  root: css`
    width: 100%;
    height: 100px;
    background-color: black;
    display: flex;
    justify-content: center;

    @media ${MediaQueries.sm} {
      height: 76px;
    }

    @media ${MediaQueries.xs} {
      height: 68px;
    }
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
      width: 160px;
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

  menuBackground: (isMenuOpen: boolean) => css`
    position: absolute;
    width: 100%;
    height: ${isMenuOpen ? "100vh" : "0px"};
    background-color: black;
    overflow: hidden;
    z-index: 999;
    transition: 0.5s;
  `,

  menuContainer: (isMenuOpen: boolean) => css`
    width: 100%;
    height: 100%;

    display: ${isMenuOpen ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: -60px;
  `,

  closeBtn: css`
    position: absolute;
    top: 3%;
    right: 3%;
  `,
};
