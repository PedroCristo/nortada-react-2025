function applyScrollEffect() {
    const select = (selector) => document.querySelector(selector);
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
  }

  export default applyScrollEffect;