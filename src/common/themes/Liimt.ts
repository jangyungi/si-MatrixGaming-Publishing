export enum ScreenType {
  xs = 376,
  sm = 576, // Mobile
  md = 768,
  lg = 1024, // Tablet
  xl = 1200, // Laptop
  xxl = 1440,
}

export const MediaQueries = {
  xs: `(max-width:${ScreenType.xs}px)`,
  sm: `(max-width:${ScreenType.sm}px)`,
  md: `(max-width:${ScreenType.md}px)`,
  lg: `(max-width:${ScreenType.lg}px)`,
  xl: `(max-width:${ScreenType.xl}px)`,
  xxl: `(max-width:${ScreenType.xxl}px)`,
};

export enum Dimension {
  SectionWidth = "66.667vw",
  ViewPortMaxWidth = "1921px",
}
