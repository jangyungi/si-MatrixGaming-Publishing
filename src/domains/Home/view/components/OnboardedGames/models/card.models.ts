import { CardType } from "./card.type";
import Card1 from "@/assets/home/onboard/card1.svg";
import Card2 from "@/assets/home/onboard/card2.svg";
import Card3 from "@/assets/home/onboard/card3.svg";
import Card4 from "@/assets/home/onboard/card4.svg";
import Card5 from "@/assets/home/onboard/card5.svg";
import Card6 from "@/assets/home/onboard/card6.svg";

export const CardItems: CardType[] = [
  {
    src: Card1,
    title: "Toy knight",
    desc: `"Become a King and save the kingdom from an obscure conspiracy"`,
  },
  {
    src: Card2,
    title: "Project R2",
    desc: `"When all hope is lost, only a hero can change destiny"`,
  },
  { src: Card3, title: "Soul Hunter", desc: `“ Dive into the underworld “ ` },
  { src: Card4, title: "Rafael", desc: `"When playing God goes wrong..."` },
  {
    src: Card5,
    title: "Bunker-53",
    desc: `"The most dangerous island on the planet is waiting for your guts... Literally"`,
  },
  {
    src: Card6,
    title: "Avery",
    desc: `"The tale of a young mouse destined for heroics"`,
  },
];
