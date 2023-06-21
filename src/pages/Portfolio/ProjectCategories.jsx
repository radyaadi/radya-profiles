import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProjectCategories = ({ listCategories, onFilterHandler }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="my-6 flex w-full gap-3 overflow-hidden">
      {listCategories.map((category, index) => {
        return (
          <button
            onClick={() => {
              onFilterHandler(category);
              setActive(index);
            }}
            className={`${
              active === index ? 'bg-[--main-hover-color]' : ''
            } rounded-xl bg-[--container-color] px-3 py-2 text-[.8rem] capitalize duration-200 ease-in-out hover:bg-[--main-hover-color]`}
            key={index}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

ProjectCategories.propTypes = {
  listCategories: PropTypes.array.isRequired,
  onFilterHandler: PropTypes.func.isRequired,
};

export default ProjectCategories;
