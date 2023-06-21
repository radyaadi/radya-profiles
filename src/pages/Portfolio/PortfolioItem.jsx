import React from 'react';
import PropTypes from 'prop-types';
// import { useSearchParams } from 'react-router-dom';

const PortfolioItem = ({
  id,
  name,
  category,
  imgUrl,
  changeSearchParams,
  onModalHandler,
}) => {
  // const [searchParams, setSearchParams] = useSearchParams();

  // const changeSearchParams = (keyword) => {
  //   setSearchParams({ title: keyword });
  // };

  return (
    <div
      onClick={() => {
        changeSearchParams(id);
        onModalHandler(true);
      }}
      className="flex cursor-pointer flex-col rounded-md bg-[--container-color] duration-300 ease-in-out hover:scale-105"
    >
      <div className="h-[80%] w-full">
        <img
          src={imgUrl}
          alt=""
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div className="flex h-fit items-center justify-between px-4 py-5">
        <p className="font-semibold ">{name}</p>
        <p className="text-xs capitalize text-[--secondary-color]">
          {category}
        </p>
      </div>
    </div>
  );
};

PortfolioItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  changeSearchParams: PropTypes.func.isRequired,
  onModalHandler: PropTypes.func.isRequired,
};

export default PortfolioItem;
