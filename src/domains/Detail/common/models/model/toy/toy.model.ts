import { CardType } from "../../type/card.type";
import BgImage from "@/assets/detail/game/toy/toy-bg.svg";
import ItemImage1 from "@/assets/detail/game/toy/toy-1.svg";
import ItemImage2 from "@/assets/detail/game/toy/toy-2.svg";
import ItemImage3 from "@/assets/detail/game/toy/toy-3.svg";
import ItemImage4 from "@/assets/detail/game/toy/toy-4.svg";

export const ToyItems: CardType = {
  banner: {
    src: BgImage,
    title: `"Become a King and save the kingdom from an obscure conspiracy"`,
  },
  main: {
    src: ItemImage1,
    desc: `As the King of Rivellon, your authority and charisma had no equals. Your reign has brought peace and prosperity to your realm, making it seem as if nothing could ever go wrong... until that terrible day. \n\nThe court Sorceress has betrayed you by turning you to the size of a child, greatly damaging your credibility as a powerful ruler.\n\nA cunning conspiracy is taking place as your quest to the throne begins, with the help of your faithful companions.`,
    info: {
      developer: "Matrix Gaming Inc.",
      genre: "Actions / Adventures",
      status: "Under Development",
    },
  },
  contents: [
    {
      src: ItemImage2,
      title: "Breathtaking combats",
      desc: `Fight legendary creatures and get your hands on their treasures!`,
    },
    {
      src: ItemImage3,
      title: "Strategy is the key",
      desc: `Your quest to the throne is filled with dangerous encounters and obstacles. Learn to overcome them by wisely using your resources!`,
    },
    {
      src: ItemImage4,
      title: "Explore forgotten ruins",
      desc: "You might awake angry ghouls in the process... Beware, they're usually quite grumpy before their morning coffee!",
    },
  ],
};
