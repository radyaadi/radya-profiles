import React from 'react';
import { SOCIAL_MEDIA } from './social-media';
import SosmedList from './SosmedList';
// import { styles } from '../../styles/styles.js';

const HomeSection = () => {
  return (
    <section
      id="home"
      className="min-h-fit bg-cover bg-center"
      style={{ backgroundImage: 'url(./black_bg.png)' }}
    >
      <div className="container flex justify-center pb-6 pt-32 min-[400px]:pt-28 min-[750px]:pb-10 min-[750px]:pt-44 min-[900px]:pb-12 min-[1000px]:pb-16">
        <div className="flex h-fit w-full flex-col gap-6 min-[750px]:flex-row min-[750px]:justify-evenly min-[750px]:gap-10 min-[750px]:px-5">
          <div className="hidden justify-center min-[400px]:flex">
            <img
              src="./we.png"
              alt=""
              className="ml-6 h-[15rem] w-auto object-contain min-[750px]:h-auto min-[750px]:max-h-[25rem] min-[750px]:w-[30rem]"
            />
          </div>
          <div className="flex flex-col items-center text-center min-[750px]:items-start min-[750px]:text-start">
            <div className="">
              <div className="text-[--main-color]">
                <h2 className="text-2xl">
                  Hi Everyone!{' '}
                  <span className="text-[--default-color]">I am</span>
                </h2>
                <h1 className="pt-1">Radya Adi Anggara</h1>
                <h4 className="py-3 text-[1rem] text-[--default-color]">
                  Junior Front-End Web Developer
                </h4>
              </div>
              <div className="mx-auto max-w-[30rem] pt-1 text-justify text-sm text-[--secondary-color] min-[350px]:max-w-[40rem]">
                Undergraduate computer science student with knowledge about web
                development, especially in front-end web development
              </div>
            </div>
            <div className="my-9">
              <a
                href={`mailto:adiradya140@gmail.com`}
                title="email"
                className="rounded-lg border-4 border-solid border-transparent bg-[--border-color] px-[.9rem] py-[.5rem] text-sm font-medium duration-200 ease-in-out hover:bg-[#bbbfca44] hover:text-[--main-color]"
              >
                <i className="uil uil-message"></i>
                <span> Say Hello</span>
              </a>
            </div>
            <SosmedList socialMedia={SOCIAL_MEDIA} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
