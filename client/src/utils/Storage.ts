import Pasta from "../assets/images/pasta.svg";
import HotDish from "../assets/images/hot-dish.svg";
import SimpleDish from "../assets/images/simple-dish.svg";
import Pudding from "../assets/images/pudding.svg";
import { ISlideType } from "./types";

export const CategoriesDishes: ISlideType[] = [
  {
    id: 1,
    imageUrl: Pasta,
    description: "Паста",
  },
  {
    id: 2,
    imageUrl: HotDish,
    description: "Гарячі страви",
  },
  {
    id: 3,
    imageUrl: SimpleDish,
    description: "Прості страви",
  },
  {
    id: 4,
    imageUrl: Pudding,
    description: "Десерт",
  },
];
