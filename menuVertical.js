function menuVertical() {
    var navbar = document.getElementById('navbar-laterale');
    var main = document.getElementById('le-main');
    navbar.classList.remove("w-0");
    navbar.classList.add("menu-lateral");
    main.classList.add("opacity-30");
    main.addEventListener('click', function() {
        navbar.classList.add("w-0");
        navbar.classList.remove("menu-lateral");
        main.classList.remove("opacity-30");
    });
}
