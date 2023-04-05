const changeFocus1 = () => {
    let phone1 = document.getElementById("p1").value
    if(phone1.length === 3) {
        document.getElementById("p2").focus()
    }
}

const changeFocus2 = () => {
    let phone2 = document.getElementById("p2").value
    if(phone2.length === 4) {
        document.getElementById("p3").focus()
    }
}


let getToken = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("token").innerText = token
    
    document.getElementById("token__button").style = "background-color: #FFFFFF; cursor: default;"
    document.getElementById("token__button").setAttribute("disabled", "true")
    document.getElementById("token__timer__confirm__button").style="background-color: #0068FF; color: #FFFFFF; cursor: pointer;"
    document.getElementById("token__timer__confirm__button").removeAttribute("disabled")
    getTokenTimer()
}

let timer
let getTokenTimer = () => {

    let time = 10
    timer = setInterval(function() { //setInterval 함수는 timer에 재할당될 때마다 실행 
        if(time >= 0) {
            let min = Math.floor(time/60)
            let sec = String(time % 60).padStart(2,"0")
            document.getElementById("token__timer").innerText = min + ":" + sec
            time = time -1 
        } else {
            document.getElementById("token").innerText = "000000"
            document.getElementById("token__button").style = ""
            document.getElementById("token__button").setAttribute("disabled", "true")

            document.getElementById("token__timer").innerText = "3:00"
            document.getElementById("token__timer__confirm__button").style = ""
            document.getElementById("token__timer__confirm__button").setAttribute("disabled", "true")

            clearInterval(timer) //setInterval 함수 초기화
        }
    },1000)
}
function getTokenTimerConfirm() {
    clearInterval(timer)
    document.getElementById("token__timer__confirm__button").style = ""
    document.getElementById("token__timer__confirm__button").setAttribute("disabled", "true")
    document.getElementById("token__timer__confirm__button").innerText = "인증완료"
    document.getElementById("token__timer").innerText = "3:00"
    alert("인증이 완료되었습니다.")

    document.getElementById("signup__button").style = "background-color: #FFFFFF; color: #0068FF; border: 1px solid #0068FF ;cursor: pointer;"
    document.getElementById("signup__button").removeAttribute("disabled")
}

const signup = function() {

    const email = document.getElementById("email").value
    const name = document.getElementById("name").value
    const pw1 = document.getElementById("password1").value
    const pw2 = document.getElementById("password2").value
    const location = document.getElementById("location").value
    const genderWoman = document.getElementById("gender__woman").checked
    const genderMan = document.getElementById("gender__man").checked

    let isValid = true
    if (email.includes("@") === false) {
        document.getElementById("error__email").innerText = "이메일이 올바르지 않습니다."
        isValid = false
    } else {
        document.getElementById("error__email").innerText = ""
    }
    if (name === "") {
        document.getElementById("error__name").innerText = "이름을 입력해 주세요."
        isValid = false
    } else {
        document.getElementById("error_name").innerText = ""
    }
    if (pw1 === "") {
        document.getElementById("error__password1").innerText = "비밀번호를 입력해 주세요."
        isValid = false
    } else {
        document.getElementById("error__password1").innerText = ""
    }
    if (pw2 !== pw1) {
        document.getElementById("error__password2").innerText = "비밀번호가 일치하지 안습니다."
        isValid = false
    } else {
        document.getElementById("error__password2").innerText = ""
    }
    if (location !== "서울" && location !== "경기" && location !== "인천") {
        document.getElementById("error__location").innerText = "지역을 선택해 주세요."
        isValid = false
    } else {
        document.getElementById("error__location").innerText = ""
    }
    if (genderMan === false && genderWoman === false) {
        document.getElementById("error__gender").innerText = "성별을 선택해 주세요."
        isValid = false
    } else {
        document.getElementById("error__gender").innerText = ""
    }

    if(isValid === true) {
        alert("코드캠프 가입을 축하합니다.")
    }
}
