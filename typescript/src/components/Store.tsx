import React from "react";
import { Address, Restaurant } from "../model/resaurant";

//interface로 타입 정해주기
// 여기서만 쓰이는 props의 타입이다

interface OwnProps {
  info: Restaurant;
  changeAd(address: Address): void;
  //함수는 이런식으로 타입을 정의
  //return 값을: 뒤에 넣어주는건데 return값이 없으면 void써줘
  //changeAd 함수에 return값 타입이 있다면 void가 아닌 그 타입을 써줘
}

//props 타입을 정해줄땐 또 제네릭 문법
const Store: React.FC<OwnProps> = ({ info }) => {
  return <div>{info.name}</div>;
};

export default Store;
