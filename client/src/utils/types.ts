export type ISlideType = {
  id: number;
  imageUrl: string;
  description: string;
};

export interface IUser {
  _id: string;
  adminStatus: boolean;
  avatarUrl: string;
  borrowedDishes: string[];
  createdAt: string;
  login: string;
  nickname: string;
  ownDishes: string[];
  passwordHash: string;
}

export interface IDish {
  _id: string;
  calorie: string;
  createdAt: string;
  description: string;
  imageUrl: string;
  imagesUrl: string[];
  productList: string;
  status: boolean;
  time: string;
  title: string;
  type: string;
  updatedAt: string;
  user: IUser;
  weight: string;
}

export interface IMessage {
  message: string;
  _id: string;
  user: IUser;
}

export interface IRation {
  _id: string;
  title: string;
  user: IUser;
  dishes: IDish[];
}
