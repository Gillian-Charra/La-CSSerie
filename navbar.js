function navbaractivation() {
    
    var navbarTitre = document.getElementById('navbar-titre');
    var navbar   =document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset>document.getElementById('pointdaffichagenavbar').offsetTop){
            navbar.classList.remove("display-no")
            navbarTitre.classList.remove("display-no")
        };
        if (window.pageYOffset<document.getElementById('pointdaffichagenavbar').offsetTop){
            navbar.classList.add("display-no")
            navbarTitre.classList.add("display-no")
        };
    });    
  }
  
  if (document.readyState === 'complete') {
    navbaractivation();
  } else {
    document.addEventListener('DOMContentLoaded', function() {
        navbaractivation();
    });
  }