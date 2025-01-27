// Toggle .header-scrolled class to #header when page is scrolled

function applyScrollEffect() {
    const select = (selector, all = false) => {
      selector = selector.trim();
      return all ? [...document.querySelectorAll(selector)] : document.querySelector(selector);
    };
  
    // Header scroll effect
    const selectHeader = select('#header');
    const selectTopbar = select('#topbar');
  
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled');
          if (selectTopbar) {
            selectTopbar.classList.add('topbar-scrolled');
          }
        } else {
          selectHeader.classList.remove('header-scrolled');
          if (selectTopbar) {
            selectTopbar.classList.remove('topbar-scrolled');
          }
        }
      };
  
      window.addEventListener('load', headerScrolled);
      document.addEventListener('scroll', headerScrolled);
    }
  
    // Navbar links active state on scroll
    const navbarlinks = select('#navbar .scrollto', true);
    const navbarlinksActive = () => {
      const position = window.scrollY + 200;
  
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
  
        const section = select(navbarlink.hash);
        if (!section) return;
  
        if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
      });
    };
  
    window.addEventListener('load', navbarlinksActive);
    document.addEventListener('scroll', navbarlinksActive);
  }
  
  export default applyScrollEffect;
  