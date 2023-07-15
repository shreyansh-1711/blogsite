import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay, Pagination, Navigation } from "swiper";
import {
  Box,
  Image,
  Flex,
  Ring,
  useBreakpointValue,
} from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Carousel() {
  const ringSize = useBreakpointValue({ base: "ring", md: "ring-0" });

  return (
    <Box  w={["100%", "100%", "800px", "1000px"]}
      h={["400px", "500px", "600px", "400px"]}
      mx="auto">
    <Swiper 
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      navigation={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation, Keyboard]}
      className="w-full mb-10 sm:mb-20 p-2"

    >
      <SwiperSlide className="flex justify-center items-center overflow-hidden">
        <Box
          w={["10/12", null, "10/12"]}
          rounded="lg"
          shadow="md"
          className={ringSize}
          ringColor="zinc.200"
        >
          <Image src="/carousal/01.png" alt="image aayegi jald" />
        </Box>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <Box
          w={["10/12", null, "10/12"]}
          rounded="lg"
          shadow="md"
          className={ringSize}
          ringColor="zinc.200"
        >
          <Image src="/carousal/02.png" alt="" />
        </Box>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <Box
          w={["10/12", null, "10/12"]}
          rounded="lg"
          shadow="md"
          className={ringSize}
          ringColor="zinc.200"
        >
          <Image src="/carousal/03.png" alt="" />
        </Box>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <Box
          w={["10/12", null, "10/12"]}
          rounded="lg"
          shadow="md"
          className={ringSize}
          ringColor="zinc.200"
        >
          <Image src="/carousal/04.png" alt="" />
        </Box>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <Box
          w={["10/12", null, "10/12"]}
          rounded="lg"
          shadow="md"
          className={ringSize}
          ringColor="zinc.200"
        >
          <Image src="/carousal/05.png" alt="" />
        </Box>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <Box
          w={["10/12", null, "10/12"]}
          rounded="lg"
          shadow="md"
          className={ringSize}
          ringColor="zinc.200"
        >
          <Image src="/carousal/06.png" alt="" />
        </Box>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <Box
          w={["10/12", null, "10/12"]}
          rounded="lg"
          shadow="md"
          className={ringSize}
          ringColor="zinc.200"
        >
          <Image src="/carousal/07.png" alt="" />
        </Box>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <Box
          w={["10/12", null, "10/12"]}
          rounded="lg"
          shadow="md"
          className={ringSize}
          ringColor="zinc.200"
        >
          <Image src="/carousal/08.png" alt="" />
        </Box>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <Box
          w={["10/12", null, "10/12"]}
          rounded="lg"
          shadow="md"
          className={ringSize}
          ringColor="zinc.200"
        >
          <Image src="/carousal/09.png" alt="" />
        </Box>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <Box
          w={["10/12", null, "10/12"]}
          rounded="lg"
          shadow="md"
          className={ringSize}
          ringColor="zinc.200"
        >
          <Image src="/carousal/10.png" alt="" />
        </Box>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <Box
          w={["10/12", null, "10/12"]}
          rounded="lg"
          shadow="md"
          className={ringSize}
          ringColor="zinc.200"
        >
          <Image src="/carousal/11.png" alt="" />
        </Box>
      </SwiperSlide>
    </Swiper>
    </Box>
  );
}
