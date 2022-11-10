import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Color } from "@/common/themes/Colors";
import { MediaQueries } from "@/common/themes/Limit";

export type TitleSectionProps = {
  title: string;
};

export const TitleSection = (props: TitleSectionProps) => {
  return (
    <div css={st.root}>
      <Typography
        variant="subtitle1"
        fontWeight={700}
        lineHeight={1}
        color={Color.TextMain}
      >
        {props.title}
      </Typography>
      <Button
        variant="contained"
        sx={{ borderRadius: "100px" }}
        css={st.button}
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
  `,

  button: css`
    background-color: ${Color.Background};
    @media ${MediaQueries.md} {
      display: none;
    }
  `,
};
