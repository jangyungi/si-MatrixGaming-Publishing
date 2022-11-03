import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import { Color } from "@/common/themes/Colors";
import { MediaQueries } from "@/common/themes/Limit";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useCustomMediaQuery } from "@/common/themes/UseCustomMediaQuery";

export type SwiperTitleSectionProps = {
  title: string;
  onPrevClick: () => void;
  onNextClick: () => void;
};

export const SwiperTitleSection = (props: SwiperTitleSectionProps) => {
  const { isMedium } = useCustomMediaQuery();

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

      <div css={st.btnContainer}>
        <Button
          onClick={props.onPrevClick}
          color="secondary"
          css={st.btnWrapper}
        >
          <div css={st.btn}>
            <ChevronLeftIcon sx={{ color: Color.TextMain }} />
          </div>
        </Button>
        <Button
          onClick={props.onNextClick}
          color="secondary"
          css={st.btnWrapper}
        >
          <div css={st.btn}>
            <ChevronRightIcon sx={{ color: Color.TextMain }} />
          </div>
        </Button>
      </div>
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

  btnContainer: css`
    display: flex;
    align-items: center;
    gap: 16px;

    @media ${MediaQueries.xs} {
      gap: 12x;
    }
  `,
  btnWrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    min-width: unset;
  `,
  btn: css`
    width: 40px;
    height: 40px;
    background-color: ${Color.Background};
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${MediaQueries.sm} {
      width: 32px;
      height: 32px;
    }

    @media ${MediaQueries.xs} {
      width: 28px;
      height: 28px;
    }
  `,
};
