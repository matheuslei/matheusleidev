import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderComponent() {
  return (
    <div className="pb-20">
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
              className="object-fill w-full h-2/5"
              src="https://raw.githubusercontent.com/matheuslei/explorerLab-01/main/.github/project.png"
              alt="image slide 2"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/matheuslei/NLWCopa" target="_blank">
            <img
              className="object-fill w-full h-2/5"
              src="https://user-images.githubusercontent.com/65515537/201481765-e33de3f0-25b7-4d05-9496-f51786dbca43.png"
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
              className="object-fill w-full h-2/5"
              src="https://user-images.githubusercontent.com/65515537/195133183-35fe99cb-4d4b-4752-94c6-153ad93bae33.gif"
              alt="image slide 3"
            />
          </a>
          <p></p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
