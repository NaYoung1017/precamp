let classmates = ["철수", "영희", "훈이"]
undefined
classmates
// (3) ['철수', '영희', '훈이']
classmates[0]
// '철수'
classmates[1]
// '영희'
classmates[2]
// '훈이'
classmates.includes("훈이")
// true
classmates.length
// 3
classmates.push("맹구")
// 4
classmates.length
// 4
classmates.includes("맹구")
// true
classmates.pop()
// '맹구'
classmates.length
// 3
classmates
// (3) ['철수', '영희', '훈이']


let developer
// undefined
developer = ["돈", "열정", "희망", "끈기", "성실" ]
// (5) ['돈', '열정', '희망', '끈기', '성실']
developer[3]
// '끈기'
let dream = ["커리어점프", "성공", "할수있다"]
// undefined
developer.concat(dream)
// (8) ['돈', '열정', '희망', '끈기', '성실', '커리어점프', '성공', '할수있다']
developer
// (5) ['돈', '열정', '희망', '끈기', '성실']
dream
// (3) ['커리어점프', '성공', '할수있다']
let result = developer.concat(dream)
// undefined
result
// (8) ['돈', '열정', '희망', '끈기', '성실', '커리어점프', '성공', '할수있다']