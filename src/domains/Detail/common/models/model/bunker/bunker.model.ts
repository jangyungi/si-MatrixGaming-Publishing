import { CardType } from "../../type/card.type";
import ItemImage3 from "@/assets/detail/game/bunker/bunker-bg.svg";
import BgImage from "@/assets/detail/game/bunker/bunker-1.svg";
import ItemImage1 from "@/assets/detail/game/bunker/bunker-2.svg";
import ItemImage2 from "@/assets/detail/game/bunker/bunker-3.svg";

export const BunkerItems: CardType = {
  banner: {
    src: BgImage,
    title: "“ Survive the most dangerous island on the planet “",
  },
  main: {
    src: ItemImage1,
    desc: `Embark on an island where the only thing harder than surviving is to find something that won’t try to kill you. Make your way through the jungle with your squad and fight hordes of bizarre creatures that have evolved to become even deadlier. Perhaps could you use that to your advantage?`,
    info: {
      developer: "Matrix Gaming Inc.",
      genre: "Survival",
      status: "Under Development",
    },
  },
  contents: [
    {
      src: ItemImage2,
      title: "If it moves, it’s probably dangerous",
      desc: `Fight against a hostile ecosystem and survive the unceasing attacks of these abominations`,
    },
    {
      src: ItemImage3,
      title: "Hell in Paradise",
      desc: `Get ready to witness terror and chaos as you progress through the deadly jungle`,
    },
  ],
};
