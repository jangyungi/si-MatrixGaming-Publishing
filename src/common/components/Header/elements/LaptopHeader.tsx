import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { menu } from "../models/Menu.model";
import Logo from "@/assets/images/logo.svg";
import { Color } from "@/common/themes/Colors";

export const LaptopHeader = () => {
  return (
    <div css={st.root}>
      <div css={st.inner}>
        <a href="#" css={st.logoWrapper}>
          <div css={st.logo}>
            <Image fill src={Logo} alt={"logo"} />
          </div>
          <Typography fontWeight={700} color={Color.TextMain}>
            {"MATRIX GAMING"}
          </Typography>
        </a>

        <nav css={st.menuContainer}>
          <ul css={st.menu}>
            {menu.map(({ label, href }) => (
              <li key={label}>
                <Link href={href}>
                  <Typography color={Color.TextMain}>{label}</Typography>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div css={st.loginWrapper}>
          <Button css={st.button}>{"SIGN UP"}</Button>
          <Button
            css={st.button}
            variant="contained"
            color="secondary"
            sx={{ borderRadius: "100px", padding: "10px 24px" }}
          >
            {"SIGN IN"}
          </Button>
        </div>
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
    max-width: 1200px;
    padding: 20px 24px;
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
  logo: css`
    position: relative;
    width: 40px;
    aspect-ratio: 1;
  `,
  menuContainer: css`
    display: flex;
    align-items: center;
  `,

  menu: css`
    display: flex;
    align-items: center;
    gap: 60px;
  `,
  menuItem: css``,
  loginWrapper: css`
    display: flex;
    align-items: center;
    gap: 16px;
  `,
  button: css`
    font-weight: 500;
    border-radius: 100px;
    padding: 10px 24px;
    margin: 0;
    line-height: 1;
  `,
};
