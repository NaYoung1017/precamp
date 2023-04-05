// 데이터 형식, 연산자
1+1
// 2
1+"만원"
// '1만원'
1+"1"
// '11'
1-"1"
// 0
"코드"+"캠프"
// '코드캠프'
"123"==123
// true
"123"===123
// false
true && true
// true
true && false
// false
false || true
// true
!false
// true


// 조건문 실습 1
if(1+1 === 2) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM730:2 정답입니다
// undefined
if(true) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM769:2 정답입니다
// undefined
if(!true) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM784:4 틀렸습니다
// undefined
if(0) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM802:4 틀렸습니다
// undefined
if("") {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM815:4 틀렸습니다
// undefined
if(2) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM828:2 정답입니다
// undefined


// 조건문 실습 2
const profile = {
    name : "철수",
    age : 12,
    school : "다람쥐초등학교"
}
// undefined

if (profile.age >= 20) {
    console.log("성인입니다")
} else if (profile.age >= 8 && profile.age <= 19) {
    console.log("학생입니다")
} else if (console.age > 0) {
    console.log("어린이입니다")
}
// 학생입니다

// 코드 최적화
if (profile.age >= 20) {
    console.log("성인입니다")
} else if (profile.age >= 8) {
    console.log("학생입니다")
} else if (console.age > 0) {
    console.log("어린이입니다")
} else {
    console.log("잘못 입력하셨습니다")
}
// 학생입니다