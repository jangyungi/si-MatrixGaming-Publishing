import { TypographyOptions } from "@mui/material/styles/createTypography";
import { TypographyMediaQueries } from "./Limit";

const baseTypographyOptions: TypographyOptions = {
  fontFamily: "Exo",
  h1: {
    fontSize: "40px",
    fontWeight: 700,
    [TypographyMediaQueries.xl]: {
      fontSize: "38px",
    },
    [TypographyMediaQueries.lg]: {
      fontSize: "36px",
    },
    [TypographyMediaQueries.md]: {
      fontSize: "64px",
    },
    [TypographyMediaQueries.sm]: {
      fontSize: "60px",
    },
  },
  h2: {
    fontSize: "24px",
    fontWeight: 700,
    [TypographyMediaQueries.xl]: {
      fontSize: "22px",
    },
    [TypographyMediaQueries.lg]: {
      fontSize: "20px",
    },
    [TypographyMediaQueries.md]: {
      fontSize: "40px",
    },
    [TypographyMediaQueries.sm]: {
      fontSize: "24px",
    },
    [TypographyMediaQueries.xs]: {
      fontSize: "20px",
    },
  },

  subtitle1: {
    fontSize: "40px",
    fontWeight: 700,
    [TypographyMediaQueries.xl]: {
      fontSize: "38px",
    },
    [TypographyMediaQueries.md]: {
      fontSize: "36px",
    },
    [TypographyMediaQueries.md]: {
      fontSize: "48px",
    },
    [TypographyMediaQueries.sm]: {
      fontSize: "32px",
    },
  },
  subtitle2: {
    fontSize: "24px",
    fontWeight: 500,
    [TypographyMediaQueries.xl]: {
      fontSize: "22px",
    },
    [TypographyMediaQueries.lg]: {
      fontSize: "20px",
    },
    [TypographyMediaQueries.md]: {
      fontSize: "56px",
    },
    [TypographyMediaQueries.sm]: {
      fontSize: "24px",
    },
  },
  body1: {
    fontSize: "16px",
    fontWeight: 400,
    [TypographyMediaQueries.xl]: {
      fontSize: "14px",
    },
    [TypographyMediaQueries.lg]: {
      fontSize: "14px",
    },
    [TypographyMediaQueries.md]: {
      fontSize: "32px",
    },
    [TypographyMediaQueries.sm]: {
      fontSize: "16px",
    },
  },
  body2: {
    fontSize: "14px",
    [TypographyMediaQueries.xl]: {
      fontSize: "12px",
    },
    [TypographyMediaQueries.lg]: {
      fontSize: "10px",
    },
    [TypographyMediaQueries.md]: {
      fontSize: "14px",
    },
    [TypographyMediaQueries.sm]: {
      fontSize: "10px",
    },
  },
  caption: {
    fontSize: "16px",
    [TypographyMediaQueries.xl]: {
      fontSize: "14px",
    },
    [TypographyMediaQueries.lg]: {
      fontSize: "12px",
    },
    [TypographyMediaQueries.md]: {
      fontSize: "32px",
    },
    [TypographyMediaQueries.sm]: {
      fontSize: "22px",
    },
    [TypographyMediaQueries.xs]: {
      fontSize: "16px",
    },
  },
};

export const typographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
};
