import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const SkillList = ({ skillList }) => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        500: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {skillList.map((skill, index) => {
        return (
          <SwiperSlide
            className="inline-flex h-min w-full items-center justify-center gap-x-2 rounded-xl bg-[--container-color] px-5 py-6"
            key={index}
          >
            <i className={`${skill.icon} text-[2.5rem]`}></i>
            <h3>{skill.name}</h3>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

SkillList.propTypes = {
  skillList: PropTypes.array.isRequired,
};

export default SkillList;
