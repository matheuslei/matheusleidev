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
      <h1 className="flex items-center justify-center text-6xl pb-10">
        Projetos
      </h1>

      <Swiper
        spaceBetween={50}
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
              className="object-fill w-full h-2/5"
              src="./imgs/mlinks.gif"
              alt="Projeto de links personalizado"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://github.com/matheuslei/explorerLab-01"
            target="_blank"
          >
            <img
              className="object-fill w-full h-2/5"
              src="./imgs/explorerLab-01.gif"
              alt="Projeto realizado no evento ExplorerLab da Rocketseat"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/matheuslei/NLWCopa" target="_blank">
            <img
              className="object-fill w-full h-2/5"
              src="./imgs/NLWCopa.jpg"
              alt="Projeto realizado no evento da Rocketseat sobre a copa"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://github.com/matheuslei/NaTrave-Codar.Me"
            target="_blank"
          >
            <img
              className="object-fill w-full h-2/5"
              src="./imgs/NaTrave.gif"
              alt="Projeto realizado no evento da CodarMe sobre a copa"
            />
          </a>
          <p></p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
