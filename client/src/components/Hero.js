import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Hero = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      id: 1,
      title: "Talk about anything & everything",
      link: "/",
      img: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Latest Posts",
      link: "/blog",
      img: "https://images.pexels.com/photos/1464230/pexels-photo-1464230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Join Us!",
      link: "/register",
      img: "https://images.pexels.com/photos/2538121/pexels-photo-2538121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className="w-full h-full overflow-hidden">
      <Slider {...settings} className="h-full">
        {slides.map((slide) => (
          <div key={slide.id} className="slide relative w-full h-full">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <Link to={slide.link}>
              <div className="slide-caption absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
                <h2 className="text-lg font-bold">{slide.title}</h2>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
