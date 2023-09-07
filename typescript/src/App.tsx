import React, { useState } from "react";
import "./App.css";
import Store from "./components/Store";
import { Restaurant } from "./model/resaurant";

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
  return (
    <div className="App">
      <Store info={myRestaurant} />
    </div>
  );
};

export default App;
