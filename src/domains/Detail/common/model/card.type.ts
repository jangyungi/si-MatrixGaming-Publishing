export type CardType = {
  main: {
    src: any;
    desc: string;
    info: { developer: string; genre: string; status: string };
  };
  contents: { src: any; title: string; desc: string }[];
};
