/* Menu Mobile*/

let menu_mobile = document.querySelector("#menu-mobile")
let menu_toggle = document.querySelector(".menu-toggle")

function openMenu() {
    /* Animation */
    menu_toggle.classList.toggle("active")
    
    /* Open and Close Menu */
    if (menu_toggle.classList.contains("active") == true) {
        menu_mobile.style.display = "flex"
        document.body.style.overflow = "hidden"
    }
    else {
        menu_mobile.style.display = "none"
        document.body.style.overflow = "unset"
    }
}

let link = document.querySelectorAll("#menu-mobile .menu li a")
for(let i = 0; i < link.length; i++){ /* Se algum botão for clicado fechar menu e tirar o overflow */
    link[i].addEventListener("click", function(){
        menu_toggle.classList.remove("active") /* Volta a animação para o padrão */

        menu_mobile.style.display = "none"
        document.body.style.overflow = "unset"
    })
}

/* Slider Benefits */

function transitionBenefits(num_benefits) {
    /* Transition Slider */
    let slider2_benefits = document.querySelector("#benefits .slider2")
    let transition_porcent = num_benefits * 33.33
    slider2_benefits.style.transform = `translateX(-${transition_porcent}%)`

    /* Color button */
    let transition_button = document.querySelectorAll("#benefits .box-button button")
    for(let i = 0; i < 3; i++){
        transition_button[i].style.backgroundColor = "transparent"
    }
    transition_button[num_benefits].style.backgroundColor = "#F205CB"
}

/* Slider Comments */

function transitionComments(num_comments) {
    /* Transition Slider */
    let slider2_comments = document.querySelector("#comments .slider2")
    let transition_porcent = num_comments * 33.33
    slider2_comments.style.transform = `translateX(-${transition_porcent}%)`

    /* Color button */
    let transition_button = document.querySelectorAll("#comments .box-button button")
    for(let i = 0; i < 3; i++){
        transition_button[i].style.backgroundColor = "transparent"
    }
    transition_button[num_comments].style.backgroundColor = "white"
}

/* FAQ */
function openAnswer(num_faq) {
    /* fundo e animação de girar */
    let box_question = document.querySelectorAll("#faq .box-question")
    box_question[num_faq].classList.toggle("active")

    /* texto de baixo */
    let box_answer = document.querySelectorAll("#faq .box-answer")[num_faq]
    let answer_height = document.querySelectorAll("#faq .answer")[num_faq].clientHeight
    if (box_question[num_faq].classList.contains("active") == true) {
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