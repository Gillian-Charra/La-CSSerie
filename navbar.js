function navbaractivation() {
    
    var navbar   =document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        console.log(document.getElementById('pointdaffichagenavbar').offsetTop);
        if (window.pageYOffset>document.getElementById('pointdaffichagenavbar').offsetTop){
            navbar.classList.add("navbarOn")
        };
        if (window.pageYOffset<document.getElementById('pointdaffichagenavbar').offsetTop){
            navbar.classList.remove("navbarOn")
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