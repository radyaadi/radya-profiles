import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EXPERIENCE_LIST } from '../AboutSection/experience-list';
import ExperienceList from './ExperienceList';

const AboutSection = () => {
  const navigate = useNavigate();

  const onCheckHandler = () => {
    navigate('/portfolio');
  };

  return (
    <section>
      <div className="container flex flex-col gap-10 py-4 min-[400px]:py-6 min-[750px]:py-8 min-[850px]:flex-row min-[900px]:py-10 min-[1000px]:py-14 min-[1100px]:gap-20">
        <div className="w-full">
          <h1 className="mb-7 w-full text-[--main-color]">About Me</h1>
          <p className="mb-2 text-justify indent-10 leading-7">
            I`m an undergraduate computer science student currently studying on
            my final year lectures. As a student, i do spend my time to develop
            more my skill on web development, especially on frontend web
            development.
          </p>
          <p className="relative text-justify indent-10 leading-7">
            I have experience related to web development and design, like
            creating some webs layouts using ReactJs framework, design some web
            layout using css framework like Tailwind or Bootstrap. I also
            studying NextJs framework and some backend development using
            ExpressJs. Please feel free to looking some{' '}
            <span
              onClick={() => {
                onCheckHandler();
              }}
              className="cursor-pointer font-bold text-[--main-color]"
            >
              My Portfolio
            </span>{' '}
            i had created.
          </p>
        </div>
        <div className="w-full">
          <h1 className="mb-7 text-[--main-color]">My Experiences</h1>
          <ExperienceList experiences={EXPERIENCE_LIST} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
