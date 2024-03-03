import { CardType } from "../../type/card.type";
import BgImage from "@/assets/detail/game/soulHunter/soul-bg.png";
import MobileBgImage from "@/assets/detail/game/soulHunter/soul-mb-bg.png";
import ItemImage1 from "@/assets/detail/game/soulHunter/soul-1.png";
import ItemImage2 from "@/assets/detail/game/soulHunter/soul-2.png";
import ItemImage3 from "@/assets/detail/game/soulHunter/soul-3.png";
import ItemImage4 from "@/assets/detail/game/soulHunter/soul-4.png";

export const policy: CardType = {
  banner: {
    src: BgImage,
    mobileSrc: MobileBgImage,
    title: "Dive into the underworld",
  },
  main: {
    src: ItemImage1,
    desc: `Even the Underworld needs a hero, and you’re the ideal candidate for it. Armed with your reaper, fight against the rebels who have declared war on your father, the Underworld’s King. Mercy is for the weak, harvest their souls and make them regret their betrayal!`,
    info: {
      developer: "Matrix Gaming LLC",
      genre: "Action RPG",
      status: "Under Development",
    },
  },
  contents: [
    {
      src: ItemImage2,
      title: "The more the better!",
      desc: `Fight against hordes of creatures where carnage has never been so fun!`,
    },
    {
      src: ItemImage3,
      title: "Innovational ability tree",
      desc: `Customize your character’s attacks and boons to synergize and become unstoppable`,
    },
    {
      src: ItemImage4,
      title: "Challenging encounters",
      desc: `Use the right tactics to adapt to various situations and triumph over your enemies`,
    },
  ],
};
