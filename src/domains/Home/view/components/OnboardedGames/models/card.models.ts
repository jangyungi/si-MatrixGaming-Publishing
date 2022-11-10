import { CardType } from "./card.type";
import ToyKnight from "@/assets/home/onboard/card1.svg";
import ProjectR2 from "@/assets/home/onboard/card2.svg";
import SoulHunter from "@/assets/home/onboard/card3.svg";
import Raphael from "@/assets/home/onboard/card4.svg";
import Bunker from "@/assets/home/onboard/card5.svg";
import Avery from "@/assets/home/onboard/card6.svg";

export const CardItems: CardType[] = [
  {
    href: "/detail/dtoyKnight",
    src: ToyKnight,
    title: "Toy knight",
    desc: `"Become a King and save the kingdom from an obscure conspiracy"`,
  },

  {
    href: "/detail/soulHunter",
    src: SoulHunter,
    title: "Soul Hunter",
    desc: `“ Dive into the underworld “ `,
  },

  {
    href: "/detail/raphael",
    src: Raphael,
    title: "Raphael",
    desc: `"When playing God goes wrong..."`,
  },
  {
    href: "/detail/bunker",
    src: Bunker,
    title: "Bunker-53",
    desc: `"The most dangerous island on the planet is waiting for your guts... Literally"`,
  },
  {
    href: "/#onboarded-games",
    src: ProjectR2,
    title: "Project R2",
    desc: `"When all hope is lost, only a hero can change destiny"`,
  },
  {
    href: "/#onboarded-games",
    src: Avery,
    title: "Avery",
    desc: `"The tale of a young mouse destined for heroics"`,
  },
];
