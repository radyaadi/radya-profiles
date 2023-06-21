import React from 'react';

const Skeleton = () => {
  return (
    <div className="relative flex animate-pulse flex-col rounded-md bg-[--container-color]">
      <div className="h-[14rem] w-full">
        <div className="h-full w-full rounded-md bg-[--secondary-color] object-cover"></div>
      </div>
      <div className="flex h-fit items-center justify-between px-4 py-5">
        <div className="mb-4 h-2.5 w-[20%] rounded-full bg-[--secondary-color]"></div>
        <div className="mb-4 h-2.5 w-48 rounded-full bg-[--secondary-color]"></div>
      </div>
    </div>
  );
};

export default Skeleton;
