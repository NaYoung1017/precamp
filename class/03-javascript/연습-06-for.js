let persons = [
    {name: "철수", age: 17},
    {name: "영희", age: 22},
    {name: "도우너", age: 5},
    {name: "루피", age: 15},
    {name: "도비", age: 3}
    ]

for(let count = 0; count < persons.length; count++) {
    if(persons[count].age >= 19) {
        console.log("성인입니다")
    } else {
        console.log("미성년자입니다")
    }
}
// VM3078:5 미성년자입니다
// VM3078:3 성인입니다
// 3VM3078:5 미성년자입니다
// undefined
for(let count = 0; count < persons.length; count++) {
    if(persons[count].age >= 19) {
        console.log(persons[count].name + "님은 성인입니다")
    } else {
        console.log(persons[count].name + "님은 미성년자입니다")
    }
}
// VM3226:5 철수님은 미성년자입니다
// VM3226:3 영희님은 성인입니다
// VM3226:5 도우너님은 미성년자입니다
// VM3226:5 루피님은 미성년자입니다
// VM3226:5 도비님은 미성년자입니다
// undefined


const fruits = [
    { number:  1, title: "레드향"　　　　},
    { number:  2, title: "샤인머스켓"　　},
    { number:  3, title: "산청딸기"　　　},
    { number:  4, title: "한라봉"　　　　},
    { number:  5, title: "사과"　　　　　},
    { number:  6, title: "애플망고"　　　},
    { number:  7, title: "딸기"　　　　　},
    { number:  8, title: "천혜향"　　　　},
    { number:  9, title: "과일선물세트"　},
    { number: 10, title: "귤"　　　　　 },
]
// undefined
for(let count = 0; count < fruits.length; count++) {
    console.log(fruits[count].number + " " + fruits[count].title) 
}
// VM3660:2 1 레드향
// VM3660:2 2 샤인머스켓
// VM3660:2 3 산청딸기
// VM3660:2 4 한라봉
// VM3660:2 5 사과
// VM3660:2 6 애플망고
// VM3660:2 7 딸기
// VM3660:2 8 천혜향
// VM3660:2 9 과일선물세트
// VM3660:2 10 귤
// undefined

for(let count = 0; count < fruits.length; count++) {
    console.log(`${fruits[count].number} ${fruits[count].title}`) 
}
// VM3764:2 1 레드향
// VM3764:2 2 샤인머스켓
// VM3764:2 3 산청딸기
// VM3764:2 4 한라봉
// VM3764:2 5 사과
// VM3764:2 6 애플망고
// VM3764:2 7 딸기
// VM3764:2 8 천혜향
// VM3764:2 9 과일선물세트
// VM3764:2 10 귤
// undefined

for(let count = 0; count < fruits.length; count++) {
    console.log(`과일차트 ${fruits[count].number}위는 ${fruits[count].title}입니다`) 
}
// VM3852:2 과일차트 1위는 레드향입니다
// VM3852:2 과일차트 2위는 샤인머스켓입니다
// VM3852:2 과일차트 3위는 산청딸기입니다
// VM3852:2 과일차트 4위는 한라봉입니다
// VM3852:2 과일차트 5위는 사과입니다
// VM3852:2 과일차트 6위는 애플망고입니다
// VM3852:2 과일차트 7위는 딸기입니다
// VM3852:2 과일차트 8위는 천혜향입니다
// VM3852:2 과일차트 9위는 과일선물세트입니다
// VM3852:2 과일차트 10위는 귤입니다
// undefined


// 비밀번호 생성 예제
Math.floor(Math.random()*1000000)
// 879555
String(Math.floor(Math.random()*1000000))
// '620884'
String(Math.floor(Math.random()*1000000))
// '34666'
String(Math.floor(Math.random()*1000000))
// '968641'
String(Math.floor(Math.random()*1000000))
// '683411'
String(Math.floor(Math.random()*1000000))
// '49046'
let result = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
// undefined
result
// '463928'