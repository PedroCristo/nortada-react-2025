import React, { useEffect } from 'react';

function Preloader() {
  useEffect(() => {
    const preloader = document.querySelector('#preloader');

    const removePreloader = () => {
      preloader?.remove();
    };

    window.addEventListener('load', removePreloader);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('load', removePreloader);
    };
  }, []);

  return <div id="preloader"></div>;
}

export default Preloader;
