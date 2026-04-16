"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { clients } from "@/data/clients";
import Badge from "@/components/ui/Badge";

import "swiper/css";
import "swiper/css/free-mode";

export default function ClientsLogoCarousel() {
  return (
    <div className="clients_logo_carousel section_space text-center">
      <Badge>Happy Users</Badge>
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={40}
        slidesPerView="auto"
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={5000}
        allowTouchMove={false}
        className="clients_swiper"
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="image_block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={client.logo} alt={client.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}