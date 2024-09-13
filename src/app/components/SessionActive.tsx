import React, { useEffect } from 'react';

const SectionActive = () => {
  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll('.menu-scroll');
      const scrollPos =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      for (let i = 0; i < sections.length; i++) {
        const currLink = sections[i];
        const val = currLink.getAttribute('href');
        const refElement = document.querySelector(val);
        const scrollTopMinus = scrollPos + 73;
        if (
          refElement.offsetTop <= scrollTopMinus &&
          refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
        ) {
          document.querySelector('.menu-scroll').classList.remove('active');
          currLink.classList.add('active');
        } else {
          currLink.classList.remove('active');
        }
      }
    };

    window.document.addEventListener('scroll', onScroll);

    return () => {
      window.document.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null;
};

export default SectionActive;