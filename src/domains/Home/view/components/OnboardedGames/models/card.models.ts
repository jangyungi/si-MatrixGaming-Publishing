import { CardType } from "./card.type";
import ToyKnight from "@/assets/home/swiper/mobile/banner-toy.png";
import SoulHunter from "@/assets/home/swiper/mobile/banner-soulhunter.png";
import Raphael from "@/assets/home/swiper/mobile/banner-raphael.png";
import Bunker from "@/assets/home/swiper/mobile/banner-bunker.png";
import ProjectR2 from "@/assets/home/swiper/mobile/banner-projectR2.png";
import Avery from "@/assets/home/swiper/mobile/banner-avery.png";

export const CardItems: CardType[] = [
  {
    href: "/detail/dtoyKnight",
    src: ToyKnight,
    title: "Toy knight",
    desc: `Become a King and save the kingdom from an obscure conspiracy`,
  },

  {
    href: "/detail/soulHunter",
    src: SoulHunter,
    title: "Soul Hunter",
    desc: `Dive into the underworld`,
  },

  {
    href: "/detail/raphael",
    src: Raphael,
    title: "Raphael",
    desc: `When playing God goes wrong...`,
  },
  {
    href: "/detail/bunker",
    src: Bunker,
    title: "Bunker-53",
    desc: `The most dangerous island on the planet is waiting for your guts... Literally`,
  },
  {
    href: "/#onboarded-games",
    src: ProjectR2,
    title: "Project R2",
    desc: `When all hope is lost, only a hero can change destiny`,
  },
  {
    href: "/#onboarded-games",
    src: Avery,
    title: "Avery",
    desc: `The tale of a young mouse destined for heroics`,
  },
];
