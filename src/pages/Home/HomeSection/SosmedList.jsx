import React from 'react';
import PropTypes from 'prop-types';

const SosmedList = ({ socialMedia }) => {
  return (
    <div className="flex gap-7 text-2xl">
      {socialMedia.map((media, index) => {
        return (
          <a
            href={media.link}
            key={index}
            target="_blank"
            title={media.name}
            rel="noreferrer"
            className="underline__hover relative duration-300 ease-in-out hover:text-[--main-color]"
          >
            <i className={media.icon}></i>
          </a>
        );
      })}
    </div>
  );
};

SosmedList.propTypes = {
  socialMedia: PropTypes.array.isRequired,
};

export default SosmedList;
