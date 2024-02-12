import React from 'react';
import PropTypes from 'prop-types';

const ExperienceList = ({ experiences }) => {
  return (
    <>
      {experiences.map((experience, index) => {
        return (
          <div
            key={index}
            className="relative flex flex-col border-l border-[--main-color]"
          >
            <div className="mb-5 ml-4">
              <div className="absolute -left-1.5 mt-2 h-3 w-3 rounded-full bg-[--main-color]"></div>
              <h2 className="text-base font-medium">{experience.name}</h2>
              <div className="text-[.9rem]">
                {experience.company}{' '}
                <div className="leading-2 relative bottom-0.5 mx-1 inline-block h-1.5 w-1.5 rounded-full bg-[--default-color]"></div>{' '}
                {experience.type}
              </div>
              <div className="text-sm text-[--secondary-color]">
                {experience.startYear}{' '}
                <div className="leading-2 relative bottom-0.5 mx-1 inline-block h-1 w-1 rounded-full bg-[--default-color]"></div>{' '}
                {experience.duration}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

ExperienceList.propTypes = {
  experiences: PropTypes.array.isRequired,
};

export default ExperienceList;
