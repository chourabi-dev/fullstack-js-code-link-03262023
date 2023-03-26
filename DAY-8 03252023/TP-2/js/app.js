const body = document.getElementById("body");

const modeBtn = document.getElementById("mode-btn");


let mode = 0;





modeBtn.addEventListener("click",function(){
    body.className=    mode == 0 ? "dark-mode" : ""

    mode= mode == 0 ? 1 : 0

    // we must save user pref !!!

    if (mode == 0) {
        localStorage.setItem("mode","0")
    }else{
        localStorage.setItem("mode","1")
    }
})



function initMode(){
    const mode = localStorage.getItem("mode");

    if (mode != null) {
        if (mode == "1") {
            body.className="dark-mode"
        }
    }
}

initMode();