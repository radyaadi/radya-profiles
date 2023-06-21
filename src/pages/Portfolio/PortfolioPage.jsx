import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllProject } from './project-list';
import ProjectCategories from './ProjectCategories';
import PortfolioDetail from './PortfolioDetail';
import PortfolioList from './PortfolioList';

const PortfolioPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [key, setKey] = useState(() => {
    return searchParams.get('key') || '';
  });

  const [projects, setProjects] = useState([]);
  const [modal, setModal] = useState(false);
  const [filters, setFilters] = useState('all');
  const [loading, setLoading] = useState(true);

  const changeSearchParams = (key) => {
    setKey(key);
    setSearchParams({ key });
    setProjects(getAllProject());
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    setProjects(getAllProject());
  }, [projects]);

  const listCategories = [
    'all',
    ...new Set(
      projects.map((project) => {
        return project.category;
      })
    ),
  ];

  const onFilterHandler = (filter) => {
    setFilters(filter);
  };

  const onModalHandler = (isOpen) => {
    setModal(isOpen);
    isOpen === false && setSearchParams('');
  };

  const filteredProject = projects.filter((project) => {
    return filters === 'all' ? project : project.category === filters;
  });

  const detailProject = projects.filter((project) => {
    return project.id.includes(key);
  });

  return (
    <section className="">
      <div className="container mb-20 pb-16 pt-32">
        <div className="mb-10 w-full text-center">
          <h1 className="text-[--main-color]">Portfolio</h1>
          <p className="text-sm">Here`s some project i already made</p>
        </div>
        <ProjectCategories
          listCategories={listCategories}
          onFilterHandler={onFilterHandler}
          loading={loading}
        />
        <PortfolioList
          filteredProject={filteredProject}
          onModalHandler={onModalHandler}
          changeSearchParams={changeSearchParams}
          loading={loading}
        />
      </div>
      {detailProject.map((detail, index) => {
        return (
          <PortfolioDetail
            {...detail}
            key={index}
            modal={modal}
            onModalHandler={onModalHandler}
          />
        );
      })}
    </section>
  );
};

export default PortfolioPage;
