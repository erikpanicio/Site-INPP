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