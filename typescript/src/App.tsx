import React, { useState } from "react";
import "./App.css";
import Store from "./components/Store";
import { Address, Restaurant } from "./model/resaurant";
import BestMenu from "./components/BestMenu";

// 객체 타입 정의가 안되니까 타입을 직접 만들어주기

let data: Restaurant = {
  name: "Restaurant",
  category: "western",
  address: {
    city: "Seoul",
    detail: "somewhere",
    zipCode: 23425634,
  },
  menu: [
    { name: "Pasta", price: 4500, category: "PASTA" },
    { name: "Steat", price: 5000, category: "STEAK" },
  ],
};

const App: React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
  // 제네릭문법: useState함수의 타입을 정해주는 것

  const changeAd = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address });
  };

  const showBestMenu = (name: string) => {
    return name;
  };
  return (
    <div className="App">
      <Store info={myRestaurant} changeAd={changeAd} />
      <BestMenu
        name="Pizza"
        category="PIZZA"
        price={2200}
        showBestMenu={showBestMenu}
      />
    </div>
  );
};

export default App;
