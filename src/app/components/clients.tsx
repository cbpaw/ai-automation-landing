import React from "react";

const clients = () => {
  return (
    <section id="clients" className="pt-20 pb-[250px] bg-black relative">
      <div className="container">
        <div className="flex flex-wrap mx-[-16px]">
          <div className="w-full px-4">
            <div className="max-w-[570px] mx-auto mb-12 text-center">
              <h2 className="font-bold text-3xl md:text-4xl text-white mb-4">
                Some of Our Happy Clients
              </h2>
              <p className="font-medium text-lg text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
          <div className="w-full px-4">
            <div
              className="flex flex-wrap items-center justify-center wow fadeInUp"
              data-wow-delay=".1s"
            >
              <a
                href="https://uideck.com"
                target="_blank"
                rel="nofollow noreferrer"
                className="flex items-center justify-center max-w-[120px] lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[15px] grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition"
              >
                <img src="images/brands/uideck.svg" alt="uideck" />
              </a>
              <a
                href="https://tailgrids.com"
                target="_blank"
                rel="nofollow noreferrer"
                className="flex items-center justify-center max-w-[120px] lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[15px] grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition"
              >
                <img src="images/brands/tailgrids.svg" alt="tailgrids" />
              </a>
              <a
                href="https://lineicons.com"
                target="_blank"
                rel="nofollow noreferrer"
                className="flex items-center justify-center max-w-[120px] lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[15px] grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition"
              >
                <img src="images/brands/lineicons.svg" alt="lineicons" />
              </a>
              <a
                href="https://ayroui.com"
                target="_blank"
                rel="nofollow noreferrer"
                className="flex items-center justify-center max-w-[120px] lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[15px] grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition"
              >
                <img src="images/brands/ayroui.svg" alt="ayroui" />
              </a>
              <a
                href="https://plainadmin.com"
                target="_blank"
                rel="nofollow noreferrer"
                className="flex items-center justify-center max-w-[120px] lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[15px] grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition"
              >
                <img src="images/brands/plainadmin.svg" alt="plainadmin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default clients;
