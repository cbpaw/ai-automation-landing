import React, { useEffect } from 'react';

const MenuScroll = () => {
  useEffect(() => {
    const pageLink = document.querySelectorAll('.menu-scroll');

    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      document.querySelector(target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        offsetTop: 1 - 60,
      });
    };

    pageLink.forEach((elem) => {
      elem.addEventListener('click', handleClick);
    });

    return () => {
      pageLink.forEach((elem) => {
        elem.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return null;
};

export default MenuScroll;