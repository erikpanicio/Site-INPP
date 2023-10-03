function openMenu() {
    /* Animation */
    let menu_toggle = document.querySelector(".menu-toggle")
    menu_toggle.classList.toggle("active")
    
    /* Open and Close Menu */
    let menu_mobile = document.querySelector("#menu-mobile")
    if (menu_toggle.classList.contains("active") == true) {
        menu_mobile.style.display = "flex"
        document.body.style.overflow = "hidden"
    }
    else {
        menu_mobile.style.display = "none"
        document.body.style.overflow = "unset"
    }
}

/* Slider */

let slider2 = document.querySelector("#comments .slider2")
let val = 0
function leftTranslateComments() {
    if (val >= 0){
        val -= 11.11
        slider2.style.transform = `translateX(-${val}%)`
    }
}

function rightTranslateComments() {
    if(val <= 66.66) {
        val += 11.11
        slider2.style.transform = `translateX(-${val}%)`
    }
}

/* FAQ */
function openAnswer(num) {
    /* fundo e animação de girar */
    let box_question = document.querySelectorAll("#faq .box-question")
    box_question[num].classList.toggle("active")

    /* texto de baixo */
    let box_answer = document.querySelectorAll("#faq .box-answer")[num]
    let answer_height = document.querySelectorAll("#faq .answer")[num].clientHeight
    if (box_question[num].classList.contains("active") == true) {
        box_answer.style.height = `${answer_height}px`
    }
    else {
        box_answer.style.height = `0px`
    }

/*
let box_question = document.querySelectorAll("#faq .box-question")
    
    box_question.forEach((item) => {
        item.addEventListener("click", () => {
            item.classList.toggle("active")

            let box_answer = document.querySelectorAll("#faq .box-answer")[num]
            let answer_height = document.querySelectorAll("#faq .answer")[num].clientHeight
            if (box_question[num].classList.contains("active") == true) {
                box_answer.style.height = `${answer_height}px`
            }
            else {
                box_answer.style.height = `0px`
            }
        })
    }) 
*/
}