import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderComponent() {
  return (
    <>
      <h1 className="flex items-center justify-center text-9xl pb-40">
        Projetos
      </h1>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>
          <a href="https://github.com/matheuslei/mlinks" target="_blank">
            <img
              className="object-fill w-full h-96"
              src="https://user-images.githubusercontent.com/65515537/203554349-eea4410c-87be-467a-a379-aee7d65cde25.gif"
              alt="image slide 1"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://github.com/matheuslei/explorerLab-01"
            target="_blank"
          >
            <img
              className="object-fill w-full h-96"
              src="https://media.licdn.com/dms/image/C4D22AQE_-PJMdBJujg/feedshare-shrink_800/0/1666483481366?e=1675296000&v=beta&t=ofW5KizjLQffVJc7VcSc2986loaeNoT15hG0VctoBFw"
              alt="image slide 2"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/matheuslei/NLWCopa" target="_blank">
            <img
              className="object-fill w-full h-96 "
              src="https://media.licdn.com/dms/image/C4D22AQG7J9lnOFhTog/feedshare-shrink_800/0/1668267752290?e=1675296000&v=beta&t=zSQu2QS7qPmkinNL8BlrJIchieVo4tBjrwe2wagym6I"
              alt="image slide 3"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://github.com/matheuslei/NaTrave-Codar.Me"
            target="_blank"
          >
            <img
              className="object-fill w-full h-96"
              src="https://media.licdn.com/dms/image/C5622AQEu2DgVXoKggA/feedshare-shrink_800/0/1665502034838?e=1675296000&v=beta&t=rnSOF-EC12G5QlLLFcrVmzI7nwUxxqvTwEER6_mUr10"
              alt="image slide 3"
            />
          </a>
          <p></p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
