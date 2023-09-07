export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

// Omit은 빼는거 Pick은 지정하는거!
export type RestaurantOnlyCategory = Pick<Restaurant, "category">;

//type과 interface의 차이
//비슷한데 type의 기능이 있음
//Omit기능이 있음

export type Address = {
  city: string;
  detail: string;
  zipCode: number;
};

//<타입, "제외할 내용"> 하면 해당 부분을 제외한 타입이 생성됨
// type의 기능!

export type AddressWithoutZip = Omit<Address, "zipCode">;

export type Menu = {
  name: string;
  price: number;
  category: string;
};

//extends는 타입을 확장하는것
