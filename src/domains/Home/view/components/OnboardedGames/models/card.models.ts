import { CardType } from "./card.type";
import ToyKnight from "@/assets/home/onboard/card1.svg";
import ProjectR2 from "@/assets/home/onboard/card2.svg";
import SoulHunter from "@/assets/home/onboard/card3.svg";
import Rafael from "@/assets/home/onboard/card4.svg";
import Bunker from "@/assets/home/onboard/card5.svg";
import Avery from "@/assets/home/onboard/card6.svg";

export const CardItems: CardType[] = [
  {
    name: "toyKnight",
    src: ToyKnight,
    title: "Toy knight",
    desc: `"Become a King and save the kingdom from an obscure conspiracy"`,
  },

  {
    name: "soulHunter",
    src: SoulHunter,
    title: "Soul Hunter",
    desc: `“ Dive into the underworld “ `,
  },

  {
    name: "raphael",
    src: Rafael,
    title: "Rafael",
    desc: `"When playing God goes wrong..."`,
  },
  {
    name: "bunker",
    src: Bunker,
    title: "Bunker-53",
    desc: `"The most dangerous island on the planet is waiting for your guts... Literally"`,
  },
  {
    name: "projectR2",
    src: ProjectR2,
    title: "Project R2",
    desc: `"When all hope is lost, only a hero can change destiny"`,
  },
  {
    name: "avery",
    src: Avery,
    title: "Avery",
    desc: `"The tale of a young mouse destined for heroics"`,
  },
];
