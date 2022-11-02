import { CardType } from "./card.type";
import Toy1 from "@/assets/images/game/toy/toy-1.png";
import Toy2 from "@/assets/images/game/toy/toy-2.png";
import Toy3 from "@/assets/images/game/toy/toy-3.png";
import Toy4 from "@/assets/images/game/toy/toy-4.png";

export const CardItems: CardType = {
  main: {
    src: Toy1,
    desc: `As the King of Rivellon, your authority and charisma had no equals. Your reign has brought peace and prosperity to your realm, making it seem as if nothing could ever go wrong... until that terrible day.\n\nThe court Sorceress has betrayed you by turning you to the size of a child, greatly damaging your credibility as a powerful ruler.\n\nA cunning conspiracy is taking place as your quest to the throne begins, with the help of your faithful companions.`,
    info: {
      developer: "Matrix Gaming Inc.",
      genre: "Actions / Adventures",
      status: "Alive",
    },
  },
  contents: [
    {
      src: Toy2,
      title: "Breathtaking combats",
      desc: `Fight legendary creatures and get your hands on their treasures!`,
    },
    {
      src: Toy3,
      title: "Strategy is the key",
      desc: `Your quest to the throne is filled with dangerous encounters and obstacles. Learn to overcome them by wisely using your resources!`,
    },
    {
      src: Toy4,
      title: "Explore forgotten ruins",
      desc: `"You might awake angry ghouls in the process... Beware, they're usually quite grumpy before their morning coffee!"`,
    },
  ],
};
