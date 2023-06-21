import React from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from './PortfolioItem';
import Skeleton from './Skeleton';

const PortfolioList = ({
  filteredProject,
  changeSearchParams,
  onModalHandler,
  loading,
}) => {
  return (
    <div className="mx-auto grid w-full auto-cols-max grid-cols-1 gap-5 min-[450px]:w-[80%] min-[610px]:w-full min-[610px]:grid-cols-2 min-[1050px]:w-[80%] min-[1250px]:w-full min-[1250px]:grid-cols-3">
      {filteredProject.map((project, index) => {
        return loading ? (
          <Skeleton key={index} />
        ) : (
          <PortfolioItem
            {...project}
            key={project.id}
            changeSearchParams={changeSearchParams}
            onModalHandler={onModalHandler}
          />
        );
      })}
    </div>
  );
};

PortfolioList.propTypes = {
  filteredProject: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeSearchParams: PropTypes.func.isRequired,
  onModalHandler: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default PortfolioList;
