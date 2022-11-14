type MenuModel = {
  label: string;
  href: string;
  onClick?: () => void;
};

export const menu: MenuModel[] = [
  {
    label: "ONBOARDED GAMES",
    href: "/#onboarded-games",
  },
  { label: "UPCOMING GAMES", href: "/#upcoming-games" },
  { label: "LATEST NEWS", href: "/#latest-news" },
];
