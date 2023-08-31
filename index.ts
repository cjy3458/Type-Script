let a: string = "Jay";

let array: string[] = ["재영", "25"];

let obj: { name: string } = { name: "JAE" };

let all: string | number = 123;

//타입을 변수에 담아서 사용도 가능

type MyType = string | number;

let my: MyType = 123;

//함수 인자와 return값 타입도 지정이 가능
const func = (i: number): number => {
  return i ** 2;
};

type Member = [number, boolean];

let john: Member = [25, true];

type Name = {
  [key: string]: string;
};

let jay: Name = { name: "jay", age: "25" };

//클래스도 타입지정 가능

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
