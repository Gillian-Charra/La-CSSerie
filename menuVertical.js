function menuVertical() {
    var navbar = document.getElementById('navbar-laterale');
    var main = document.getElementById('le-main');
    navbar.classList.remove("w-0");
    main.classList.add("opacity-30");
    main.addEventListener('click', function() {
        navbar.classList.add("w-0");
        main.classList.remove("opacity-30");
    });
}
