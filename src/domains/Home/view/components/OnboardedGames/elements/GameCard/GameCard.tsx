import { css } from "@emotion/react";
import Image from "next/image";
import { CardType } from "@/domains/Home/view/components/OnboardedGames/models/card.type";
import { Typography } from "@mui/material";
import { Color } from "@/common/themes/Colors";
import { MediaQueries } from "@/common/themes/Limit";
import Link from "next/link";

export const GameCard = (props: CardType) => {
  return (
    <Link href={`/detail/${props.name}`}>
      <div css={st.container}>
        <div css={st.image}>
          <Image fill src={props.src} alt="card-img" />
        </div>
        <div css={st.wrapper}>
          <Typography
            variant="subtitle2"
            fontWeight={500}
            color={Color.TextMain}
            mb={1}
            css={st.subtitle}
          >
            {props.title}
          </Typography>
          <Typography
            variant="body1"
            fontWeight={300}
            color={Color.TextMain}
            css={st.body}
          >
            {props.desc}
          </Typography>
        </div>
      </div>
    </Link>
  );
};

const st = {
  root: css`
    cursor: pointer;
  `,
  container: css`
    width: 100%;

    @media ${MediaQueries.md} {
      aspect-ratio: 1/1;
    }
  `,
  image: css`
    position: relative;
    width: 100%;
    aspect-ratio: 1/0.561;
  `,
  wrapper: css`
    width: 100%;
    aspect-ratio: 1/0.5;
    background-color: ${Color.Background};
    padding: 7% 7% 0 7%;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    overflow: hidden;

    @media ${MediaQueries.md} {
      aspect-ratio: 1/0.56;
      padding: 4%;
    }
    @media ${MediaQueries.sm} {
      aspect-ratio: 1/0.35;
    }
    @media ${MediaQueries.xs} {
      aspect-ratio: 1/0.5;
    }
  `,

  subtitle: css`
    @media ${MediaQueries.lg} {
      font-size: 24px;
    }

    @media ${MediaQueries.md} {
      font-size: 56px;
    }

    @media ${MediaQueries.sm} {
      font-size: 24px;
    }
  `,

  body: css`
    overflow: hidden;

    @media ${MediaQueries.lg} {
      font-size: 16px;
    }

    @media ${MediaQueries.md} {
      font-size: 40px;
    }

    @media ${MediaQueries.sm} {
      font-size: 16px;
    }
  `,
};
