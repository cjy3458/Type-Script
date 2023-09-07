import React from "react";
import { Restaurant } from "../model/resaurant";

//interface로 타입 정해주기
// 여기서만 쓰이는 props의 타입이다

interface OwnProps {
  info: Restaurant;
}

//props 타입을 정해줄땐 또 제네릭 문법
const Store: React.FC<OwnProps> = (props) => {
  return <div>store</div>;
};

export default Store;
