import React from 'react';
import { SERVICE_LIST } from './service-list';

const ServiceSection = () => {
  return (
    <section>
      <div className="container mb-20 py-4 min-[400px]:py-6 min-[750px]:py-8 min-[900px]:py-10 min-[1000px]:py-14">
        <div className="mb-7 text-center">
          <h1 className="mb-1 text-[--main-color]">My Service</h1>
          <p className="text-sm">Here`s the services i offer to you</p>
        </div>
        <div className="grid auto-rows-fr grid-cols-1 gap-5 min-[750px]:grid-cols-2 min-[1200px]:grid-cols-3">
          {SERVICE_LIST.map((service, index) => {
            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg bg-[--container-color] p-8 duration-300 ease-in-out hover:translate-y-[-1rem]"
              >
                <h3 className="mb-5 text-[--main-color]">{service.name}</h3>
                <p className="text-justify indent-6 text-sm leading-6 text-[--secondary-color] ">
                  {service.description}
                </p>
                <img
                  src="./shape.png"
                  alt=""
                  className="absolute right-0 top-0 w-[30%] opacity-10 invert-[--invert-value]"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
