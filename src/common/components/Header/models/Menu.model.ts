type MenuModel = {
  label: string;
  href: string;
  onClick?: () => void;
};

export const menu: MenuModel[] = [
  {
    label: "ABOUT US",
    href: "/#about-us",
  },

  {
    label: "ONBOARDED GAMES",
    href: "/#onboarded-games",
  },
  {
    label: "UPCOMING GAMES",
    href: "/#upcoming-games",
  },
  {
    label: "CONTACT US",
    href: "/#contact-us",
  },
];
