/* Menu Mobile*/

let menu_mobile = document.querySelector("#menu-mobile")
let menu_toggle = document.querySelector(".menu-toggle")

function openMenu(){
    let menu_desktop = document.querySelector("#menu-desktop")
    /* Animation */
    menu_toggle.classList.toggle("active")
    
    /* Open and Close Menu */
    if (menu_toggle.classList.contains("active") == true) {
        /* menu_desktop.style.position = "fixed" */ /* voltar o menu-desktop */

        menu_mobile.style.display = "flex"
        document.body.style.overflow = "hidden"
    }
    else {
        /* menu_desktop.style.position = "sticky" */ /* voltar o menu-desktop */

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

function transitionBenefits(num_benefits){
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

/* Comments */

function transitionComments(num_comments){ /* Slider */
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

/* Read More */

/* let comment = document.querySelectorAll("#comments .comment")
let comment_p = document.querySelectorAll("#comments p")
for(let i = 0; i < comment_p.length; i++){
    if(comment_p[i].clientHeight > 280){

        let read_more = document.createElement("a");
        read_more.innerHTML = "<strong>Leia Mais</strong>";
        comment[i].appendChild(read_more)

        let comment_a = document.querySelectorAll("#comments .comment a")
        let count_comment_p = comment_p[i]

        comment_p[i].classList.add("closed")

        for(let i = 0; i < comment_a.length; i++){
            comment_a[i].addEventListener("click", function(){
                comment_p[i].classList.toggle("closed")
                if(count_comment_p.classList.contains("closed") == true) {
                    count_comment_p.style.height = "280px"
                    count_comment_p.style.overflow = "hidden"
                }
                else if(count_comment_p.classList.contains("closed") == false) {
                    count_comment_p.style.height = "auto"
                    count_comment_p.style.overflow = "unset"
                }
            })
        }

    }
} */

let comment_p = document.querySelectorAll("#comments p");

for (let i = 0; i < comment_p.length; i++) {
    if (comment_p[i].clientHeight > 280) {

        comment_p[i].style.height = "290px";
        comment_p[i].style.overflow = "hidden";

        let read_more = document.createElement("a");
        read_more.innerHTML = "<strong>Ver mais</strong>";
        
        let comment = comment_p[i].closest(".comment");
        comment.appendChild(read_more);

        read_more.addEventListener("click", function () {
            comment_p[i].classList.toggle("open");

            if (comment_p[i].classList.contains("open")) {
                read_more.innerHTML = "<strong>Ver menos</strong>";
                comment_p[i].style.height = "auto";
                comment_p[i].style.overflow = "unset";
            } 
            else {
                read_more.innerHTML = "<strong>Ver mais</strong>";
                comment_p[i].style.height = "290px";
                comment_p[i].style.overflow = "hidden";
            }
        });
    }
}

/* FAQ */
function openAnswer(num_faq){
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
}

/*
let box_question = document.querySelectorAll("#faq .box-question")
    
    box_question.forEach((item) => {
        item.addEventListener("click", () => {
            item.classList.toggle("active")

            let box_answer = document.querySelectorAll("#faq .box-answer")[num]
            let answer_height = document.querySelectorAll("#faq .answer")[num].clientHeight
          
        })
    }) 
*/

/* News */

/* let news_p = document.querySelectorAll(".box-news .text p");

for (let i = 0; i < news_p.length; i++) {
    if (news_p[i].clientHeight > 120) {

        news_p[i].style.height = "50px";
        news_p[i].style.overflow = "hidden";

        let read_more = document.createElement("a");
        read_more.innerHTML = "<strong>Ver mais</strong>";
        
        let box_news = news_p[i].closest(".box-news .text");
        box_news.appendChild(read_more);

        read_more.addEventListener("click", function () {
            news_p[i].classList.toggle("open");

            if (news_p[i].classList.contains("open")) {
                read_more.innerHTML = "<strong>Ver menos</strong>";
                news_p[i].style.height = "15vw";
                news_p[i].style.overflow = "unset";
            } 
            else {
                read_more.innerHTML = "<strong>Ver mais</strong>";
                news_p[i].style.height = "50px";
                news_p[i].style.overflow = "hidden";
            }
        });
    }
} */