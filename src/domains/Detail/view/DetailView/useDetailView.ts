import { useRouter } from "next/router";
import {
  ToyItems,
  SoulHunterItems,
  RaphaelItems,
  BunkerItems,
} from "@/domains/Detail/common/models";
import { CardType } from "../../common/models/type/card.type";

export const useDetailView = () => {
  const router = useRouter();
  const gameName = router.query.game + "";

  const getDatabyGaneName = (v: string): CardType => {
    switch (v) {
      case "toyNight": {
        return ToyItems;
      }
      case "soulHunter": {
        return SoulHunterItems;
      }
      case "raphael": {
        return RaphaelItems;
      }
      case "bunker": {
        return BunkerItems;
      }

      default: {
        return ToyItems;
      }
    }
  };

  const result = getDatabyGaneName(gameName);

  return { result: result };
};
