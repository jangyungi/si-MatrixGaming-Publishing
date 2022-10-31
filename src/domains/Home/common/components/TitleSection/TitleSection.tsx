import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Color } from "@/common/themes/Colors";

export type TitleSectionProps = {
  title: string;
  onClick: () => void;
};

export const TitleSection = (props: TitleSectionProps) => {
  return (
    <div css={st.root}>
      <Typography fontWeight={700} color={Color.TextMain}>
        {props.title}
      </Typography>
      <Button
        onClick={props.onClick}
        variant="contained"
        color="primary"
        sx={{ borderRadius: "100px" }}
      >
        <div css={st.wrapper}>
          <Typography fontWeight={500} color={Color.TextMain}>
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
  `,

  wrapper: css`
    display: flex;
    align-items: center;
  `,
};
