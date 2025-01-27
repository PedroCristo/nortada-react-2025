import React, { useEffect } from 'react';

function BackToTop() {
  useEffect(() => {
    const backToTop = document.querySelector('.back-to-top');

    const toggleBackToTop = () => {
      if (window.scrollY > 100) {
        backToTop?.classList.add('active');
      } else {
        backToTop?.classList.remove('active');
      }
    };

    const smoothScrollToTop = (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    // Add smooth scroll listener
    backToTop?.addEventListener('click', smoothScrollToTop);

    // Add scroll listener
    window.addEventListener('scroll', toggleBackToTop);

    // Cleanup listeners on component unmount
    return () => {
      backToTop?.removeEventListener('click', smoothScrollToTop);
      window.removeEventListener('scroll', toggleBackToTop);
    };
  }, []);

  return (
    <div>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
}

export default BackToTop;
