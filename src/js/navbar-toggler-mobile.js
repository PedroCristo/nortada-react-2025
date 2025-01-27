function applyNavbarFunctionality (){
    // Helper function to select elements
    const select = (selector) => document.querySelector(selector);
  
    // Mobile nav toggle
    const mobileNavToggle = select('.mobile-nav-toggle');
    const navbar = select('#navbar');
  
    if (mobileNavToggle && navbar) {
      mobileNavToggle.addEventListener('click', (e) => {
        navbar.classList.toggle('navbar-mobile');
        mobileNavToggle.classList.toggle('bi-list');
        mobileNavToggle.classList.toggle('bi-x');
      });
    }
  
    // Mobile nav dropdowns activate
    const dropdownLinks = document.querySelectorAll('.navbar .dropdown > a');
    dropdownLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        if (navbar.classList.contains('navbar-mobile')) {
          e.preventDefault();
          const dropdownMenu = link.nextElementSibling;
          dropdownMenu.classList.toggle('dropdown-active');
        }
      });
    });
  };

  export default applyNavbarFunctionality;
  