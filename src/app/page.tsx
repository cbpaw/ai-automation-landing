"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Clients from "./components/clients";
import CTA from "./components/cta";
import Teams from "./components/teams";
import Pricing from "./components/pricing";
import Testimonial from "./components/testimonial";
import Blog from "./components/blog";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
// import "./utils"; // Import the JavaScript code
import MenuScroll from "./components/MenuScroll";
import SectionActive from "./components/SessionActive";



const Home = () => {
  useEffect(() => {
    // ==== for menu scroll
    const pageLink = document.querySelectorAll(".menu-scroll");

    pageLink.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(elem.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
          offsetTop: 1 - 60,
        });
      });
    });

    // section menu active
    function onScroll(event) {
      const sections = document.querySelectorAll(".menu-scroll");
      const scrollPos =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      for (let i = 0; i < sections.length; i++) {
        const currLink = sections[i];
        const val = currLink.getAttribute("href");
        const refElement = document.querySelector(val);
        const scrollTopMinus = scrollPos + 73;
        if (
          refElement.offsetTop <= scrollTopMinus &&
          refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
        ) {
          document.querySelector(".menu-scroll").classList.remove("active");
          currLink.classList.add("active");
        } else {
          currLink.classList.remove("active");
        }
      }
    }

    window.document.addEventListener("scroll", onScroll);

    // Cleanup
    return () => {
      window.document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Agency - Tailwind CSS Portfolio Template</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <body>
        <Navbar />
        <MenuScroll />
        <SectionActive />
        {/* ====== Navbar Section End */}
        <Hero />

        {/* <!-- ====== About Section Start --> */}
        <About />
        {/* <!-- ====== About Section End  --> */}
        {/* <!-- ====== Services Section Start --> */}
        <Services />
        {/* <!-- ====== Services Section End --> */}

        {/* <!-- ====== Portfolio Section Start  --> */}
        <Portfolio />
        {/* <!-- ====== Portfolio Section End  --> */}

        {/* <!-- ====== Clients Section Start  --> */}
        <Clients />
        {/* <!-- ====== Clients Section End  --> */}

        {/* <!-- ====== CTA Section Start  --> */}
        <CTA />
        {/* <!-- ====== CTA Section End  --> */}

        {/* <!-- ====== Team Section Start --> */}
        <Teams />
        {/* <!-- ====== Team Section End --> */}

        {/* <!-- ====== Pricing Section Start --> */}
        <Pricing />
        {/* <!-- ====== Pricing Section End --> */}

        {/* <!-- ====== Testimonial Section Start --> */}
        <Testimonial />
        {/* <!-- ====== Testimonial Section End --> */}

        {/* <!-- ====== Blog Section Start  --> */}
        <Blog />
        {/* <!-- ====== Blog Section End  --> */}

        {/* <!-- ====== Contact Section Start  --> */}
        <Contact />
        {/* <!-- ====== Contact Section End  --> */}

        {/* <!-- ====== Footer Section Start  --> */}
        <Footer />
        {/* <!-- ====== Footer Section End  --> */}
      </body>
    </>
  );
};

export default Home;
