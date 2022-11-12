import { CardType } from "../../type/card.type";
import BgImage from "@/assets/detail/game/raphael/raphael-bg.png";
import ItemImage1 from "@/assets/detail/game/raphael/raphael-1.png";
import ItemImage2 from "@/assets/detail/game/raphael/raphael-2.png";

export const RaphaelItems: CardType = {
  banner: {
    src: BgImage,
    title: `When playing God goes wrong...`,
  },
  main: {
    src: ItemImage1,
    desc: `Science becomes the most dangerous weapon when in the hands of a mad scientist. In a world filled with abominations and heresy, only a ruthless Priest like you can find redemption. This evil has to be stopped, even if it means breaking some commandments.`,
    info: {
      developer: "Matrix Gaming Inc.",
      genre: "Soullike",
      status: "Under Development",
    },
  },
  contents: [
    {
      src: ItemImage2,
      title: "Sometimes, the only cure is death",
      desc: `These monsters’ existence is an insult to your faith. Put them out of their misery and punish the creator of this chaos.`,
    },
  ],
};
