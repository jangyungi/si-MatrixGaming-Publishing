import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Color } from "@/common/themes/Colors";
import { MediaQueries } from "@/common/themes/Limit";

export type TitleSectionProps = {
  title: string;
  onMobileVisible?: boolean;
};

export const TitleSection = ({
  title,
  onMobileVisible = false,
}: TitleSectionProps) => {
  return (
    <div css={st.root}>
      <Typography
        variant="subtitle1"
        fontWeight={700}
        lineHeight={1}
        color={Color.TextMain}
      >
        {title}
      </Typography>
      <Button
        variant="contained"
        sx={{ borderRadius: "100px" }}
        css={st.button(onMobileVisible)}
      >
        <div css={st.wrapper}>
          <Typography variant="body2" fontWeight={500} color={Color.TextMain}>
            {"MORE"}
          </Typography>
          <ChevronRightIcon color="secondary" />
        </div>
      </Button>
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    @media ${MediaQueries.sm} {
      margin-bottom: 32px;
    }
  `,

  wrapper: css`
    display: flex;
    align-items: center;
    margin-right: -4px;

    @media ${MediaQueries.md} {
      margin-right: -8px;
    }
  `,

  button: (onMobileVisible: boolean) => css`
    background-color: ${Color.Background};
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${MediaQueries.md} {
      display: ${onMobileVisible ? "block" : "none"};
      height: 36px;
      padding: 0 20px;
    }

    @media ${MediaQueries.sm} {
      display: ${onMobileVisible ? "block" : "none"};
      height: 32px;
      padding: 0 16px;
    }
  `,
};
