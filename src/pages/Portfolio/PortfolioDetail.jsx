import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../../utils/date-formatter';
import { Dialog, Transition } from '@headlessui/react';

const PortfolioDetail = ({
  name,
  category,
  repoUrl,
  siteUrl,
  description,
  imgUrl,
  createdAt,
  modal,
  tags,
  onModalHandler,
}) => {
  return (
    <Transition appear show={modal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[1000]"
        onClose={() => onModalHandler(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#000000d8]" />
        </Transition.Child>

        <div
          className={`${
            modal ? 'overflow-y-auto' : 'overflow-y-hidden'
          } fixed inset-0`}
        >
          <div className="mx-auto flex h-fit w-[90%] items-center justify-center py-20 min-[600px]:w-[80%] min-[1000px]:w-[70%]">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative overflow-hidden rounded-md bg-[--container-color]">
                <button
                  onClick={() => {
                    onModalHandler(false);
                  }}
                  className="absolute right-4 top-4 z-[10] h-10 w-10 rounded-full bg-[--container-color] font-bold text-[--default-color] outline outline-white duration-300 ease-in-out hover:bg-[--default-color] hover:text-[--bg-color]"
                >
                  x
                </button>
                <div className="h-[80%] w-full">
                  <img
                    src={imgUrl}
                    alt=""
                    className="h-full w-full rounded-t-md object-cover"
                  />
                </div>
                <div className="lg:px-18 px-8 py-8 sm:px-14">
                  <h1 className="text-[--main-color]">{name}</h1>
                  <div className="mt-1 flex text-sm capitalize text-[--secondary-color] min-[350px]:gap-10">
                    <h5>
                      <i className="bx bx-duplicate block min-[350px]:inline"></i>{' '}
                      {category}
                    </h5>
                    <h5>
                      <i className="bx bx-calendar block min-[350px]:inline"></i>{' '}
                      {showFormattedDate(createdAt)}
                    </h5>
                  </div>
                  <div className="my-6 flex w-full flex-wrap gap-3">
                    <a
                      href={siteUrl}
                      className="rounded-xl bg-[--bg-color] px-4 py-2 text-[.8rem] capitalize duration-200 ease-in-out hover:bg-[--main-hover-color]"
                      target="_blank"
                      title={name}
                      rel="noreferrer"
                    >
                      Site
                    </a>
                    <a
                      href={repoUrl}
                      className="rounded-xl bg-[--bg-color] px-4 py-2 text-[.8rem] capitalize duration-200 ease-in-out hover:bg-[--main-hover-color]"
                      target="_blank"
                      title={name}
                      rel="noreferrer"
                    >
                      Repository
                    </a>
                  </div>
                  <p className="text-[.9rem] min-[280px]:text-justify min-[400px]:indent-6 min-[700px]:indent-10">
                    {description}
                  </p>
                  <div className="my-6 flex flex-wrap gap-2">
                    {tags?.map((tag) => (
                      <span
                        className="rounded-2xl bg-[--main-hover-color] px-3 py-1 text-xs"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

PortfolioDetail.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  siteUrl: PropTypes.string,
  repoUrl: PropTypes.string,
  description: PropTypes.string,
  imgUrl: PropTypes.string,
  onModalHandler: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};

export default PortfolioDetail;
