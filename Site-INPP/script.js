function openMenu() {
     document.body.style.overflow = "hidden"

    /* Animation */
    let menu_toggle = document.querySelector(".menu-toggle")
    menu_toggle.classList.toggle("active")
    
    /* Open Menu */
    let menu_mobile = document.querySelector("#menu-mobile")
    if (menu_toggle.classList.contains("active") == true) {
        menu_mobile.style.display = "flex"
    }
    else {
        menu_mobile.style.display = "none"
    }
}