/* 
과제 (2)
주제 : null과 undefined의 차이점을 찾아보기
세부내용
1. 어떨때 값이 null이 되고 undefined으로 저장되는지 가능한 모든 케이스의 js 코드를 작성한다.
2. 각 케이스의 코드상에 저장된 변수가 왜 null이고 undefined인지 원인을 설명한다.
3. 비교연산자를 활용하여 각각의 케이스에 따라 null인지 undefined인지 확인하는 코드를 작성한다.
** 제출 방법 : 작성된 js 파일과 내용을 설명할 수 있는 텍스트를 주석을 활용하여 기입한다.
*/

/* undefined값이 되는 경우 */
//1. 변수에 값을 지정해주지 않을 때(초기화하지 않았을때)
let undefined1;

console.log(undefined1 === null); //false
console.log(undefined1 === undefined); //true

//2. 변수에 undefined 값을 지정해줄 때
let undefined2 = undefined;

console.log(undefined2 === null); //false
console.log(undefined2 === undefined); //true

//3. 함수에서 반환해줄 값이 없을 때
function undefined3(){
    return;
}
let undefined3_1 = undefined3();

console.log(undefined3_1 === null); //false
console.log(undefined3_1 === undefined); //true

//4.객체 속성이 존재하지 않을 때
let pr = { 
    name : "kim", 
    age : 27
};

let pr1 = pr.address;

console.log(pr1 === null); //false
console.log(pr1 === undefined); //true


//5.배열에 존재하지 않을 때
let arr = [1, 2, 3];
let arr1 = arr[5];

console.log(arr1 === null); //false
console.log(arr1 === undefined); //true




/* null값이 되는 경우*/
//1. 변수에 null값을 지정해줄 때
let x = null;

console.log(x === null); //true
console.log(x === undefined); //false

//2. 함수가 null로 리턴할 때
function y(){
    return null;
}
let y1 = y();

console.log(y1 === null); //true
console.log(y1 === undefined); //false

//3. 조건문에서 null로 값이 지정된 경우
let z = false; 
let z1 = z ? 't' : null;

console.log(z1 === null); //true
console.log(z1 === undefined); //false


//수업 내용
var num; // 초기화하지 않았으므로 undefined 값을 반환한다.
var str = null; //object 타입의 null 값
typeof secondNum; //정의되지 않은 변수에 접근하면 undefined값을 반환한다.

//동등 연산자와 일치 연산자
//null과 undefined는 동등 연산자(==)와 일치 연산자(===)로 비교할 때 그 결과값이 다르다.
null == undefined;//true
null === undefined//false


let obj = { name: "John", age: 30 };
let variable4 = obj.address;
console.log(variable4)
