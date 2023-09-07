import React from "react";
import { Menu } from "../model/resaurant";

//extends로 Menu를 받아오고 확장된 것을 만드는 느낌

interface OwnProps extends Menu {
  showBestMenu(name: string): string;
}

const BestMenu: React.FC<OwnProps> = ({
  name,
  price,
  category,
  showBestMenu,
}) => {
  return <div>{name}</div>;
};

export default BestMenu;
