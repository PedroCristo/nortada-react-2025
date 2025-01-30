import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;

    // Adding a small delay to ensure the DOM is fully loaded
    setTimeout(() => {
      if (!hash) {
        // Scroll to the top if there is no hash
        window.scrollTo(0, 0);
      } else {
        // If there's a hash, scroll to the element with that ID
        const element = document.getElementById(hash.slice(1));  // Remove the '#' symbol
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 50);  // Small delay to ensure DOM elements are loaded
  }, [location]);  // Dependency array to track location changes

  return <>{children}</>;
};

ScrollToTop.propTypes = {
  children: PropTypes.node.isRequired,  // Allow any valid React element
};

export default ScrollToTop;
