let isStarted = false //타이머 상태

let auth = () => {

    if(isStarted === false) {
        //타이머 작동 중 x
        isStarted = true
        document.getElementById("finish").disabled = false
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        document.getElementById("target").innerText = token
        document.getElementById("target").style.color = "#" + token;
    
        let time = 10
        let timer

        timer = setInterval(function() { //setInterval 함수는 timer에 재할당될 때마다 실행 

            if(time >= 0) {
                let min = Math.floor(time/60)
                let sec = String(time % 60).padStart(2,"0")
                document.getElementById("timer").innerText = min + ":" + sec
                time = time -1 
            } else {
                document.getElementById("finish").disabled = true
                isStarted = false
                clearInterval(timer) //setInterval 함수 초기화
            }
        },1000)

    } else {
        //타이머 작동 중일때
    }


}
