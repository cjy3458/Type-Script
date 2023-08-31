let a = "Jay";
let array = ["재영", "25"];
let obj = { name: "JAE" };
let all = 123;
let my = 123;
//함수 인자와 return값 타입도 지정이 가능
const func = (i) => {
    return Math.pow(i, 2);
};
let john = [25, true];
let jay = { name: "jay", age: "25" };
//클래스도 타입지정 가능
class User {
    constructor(name) {
        this.name = name;
    }
}
let title = document.querySelector("#title");
//innerHTML을 사용하려면 querySelector로 가져온 값이 null일 수도 있기 때문에
//그래서 null이 아니라면! 이라는 코드를 넣어줘야함
// 이런 방식을 narrowing이라고 함
if (title != null) {
    title.innerHTML = "TypeScript";
}
//다른 narrowing방법
// instanceof Element를 이용해도 가능 but 나는 != null이 더 쉬워보임
if (title instanceof Element) {
    title.innerHTML = "TypeScript";
}
// 3번째 narrowing 방법
// as Element로 사기치기!
// 하지만 막 남발하면 안됩니당
let title2 = document.querySelector("#title");
// 4번째 narrowing 방법
// ?. 문법 사용하기 => innerHTML이 있으면 TRUE
// 있으면TRUE 없으면 undefined를 반환하라는 코드
if ((title === null || title === void 0 ? void 0 : title.innerHTML) != undefined) {
}
