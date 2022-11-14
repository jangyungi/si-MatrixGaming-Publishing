export type CardType = {
  banner: BannerType;
  main: MainCardType;
  contents: ContentsType;
};

export type BannerType = {
  src: any;
  title: string;
};

export type MainCardType = {
  src: any;
  desc: string;
  info: { developer: string; genre: string; status: string };
};

export type ContentsType = {
  src: any;
  title: string;
  desc: string;
}[];
