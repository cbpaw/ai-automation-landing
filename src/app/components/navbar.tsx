import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const navbar = () => {
  return (
    <header className="header bg-transparent absolute top-0 left-0 z-40 w-full flex items-center transition">
          <div className="container">
            <div className="flex mx-[-16px] items-center justify-between relative">
              <div className="px-4 w-60 max-w-full">
                <Link href="index.html" className="header-logo w-full block py-6 lg:py-8">
                  <Image src="/images/logo/logo.svg" alt="logo" width={100} height={50} />
                </Link>
              </div>
              <div className="flex px-4 justify-between items-center w-full">
                <div>
                  <button
                    id="navbarToggler"
                    name="navbarToggler"
                    aria-label="navbarToggler"
                    className="block absolute right-4 top-1/2 translate-y-[-50%] lg:hidden focus:ring-2 ring-primary px-3 py-[6px] rounded-lg"
                  >
                    <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark"></span>
                    <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark"></span>
                    <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark"></span>
                  </button>
                  <nav
                    id="navbarCollapse"
                    className="absolute py-5 lg:py-0 lg:px-4 xl:px-6 bg-white lg:bg-transparent shadow-lg rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 top-full hidden lg:block lg:static lg:shadow-none"
                  >
                    <ul className="blcok lg:flex">
                      <li className="relative group">
                        <Link href="#home" className="menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0">
                          Home
                        </Link>
                      </li>
                      <li className="relative group">
                        <Link href="#about" className="menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12">
                          About
                        </Link>
                      </li>
                      <li className="relative group">
                        <Link href="#services" className="menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12">
                          Services
                        </Link>
                      </li>
                      <li className="relative group">
                        <Link href="#pricing" className="menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12">
                          Pricing
                        </Link>
                      </li>
                      <li className="relative group">
                        <Link href="#contact" className="menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12">
                          Contact
                        </Link>
                      </li>
                      <li className="relative group submenu-item">
                        <Link
                          href="javascript:void(0)"
                          className="text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:pl-0 lg:pr-4 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12 relative after:absolute after:w-2 after:h-2 after:border-b-2 after:border-r-2 after:border-current after:rotate-45 lg:after:right-0 after:right-1 after:top-1/2 after:translate-y-[-50%] after:mt-[-2px]"
                        >
                          Pages
                        </Link>
                        <div
                          className="submenu hidden relative lg:absolute w-[250px] top-full lg:top-[110%] left-0 rounded-sm lg:shadow-lg p-4 lg:block lg:opacity-0 lg:invisible group-hover:opacity-100 lg:group-hover:visible lg:group-hover:top-full bg-white transition-[top] duration-300"
                        >
                          <Link href="portfolio-details.html" className="block text-sm text-black rounded hover:text-primary py-[10px] px-4">
                            Portfolio Details Page
                          </Link>
                          <Link href="blog-grids.html" className="block text-sm text-black rounded hover:text-primary py-[10px] px-4">
                            Blog Grids Page
                          </Link>
                          <Link href="blog-details.html" className="block text-sm text-black rounded hover:text-primary py-[10px] px-4">
                            Blog Details Page
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="sm:flex justify-end hidden pr-16 lg:pr-0">
                  <Link
                    href="#contact"
                    className="text-base font-bold text-white bg-primary rounded-full py-3 px-8 md:px-9 lg:px-8 xl:px-9 hover:shadow-signUp hover:bg-opacity-90 transition ease-in-out duration-300"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
  )
}

export default navbar