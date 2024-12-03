import React from 'react';
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    { id: 1, title: "Talk about anything & everything", link: "/", image: "https://images.pexels.com/photos/1464230/pexels-photo-1464230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 2, title: "Trending Posts", link: "/blog", image: "/images/slide2.jpg" },
    { id: 3, title: "Join Us!", link: "/register", image: "/images/slide3.jpg" },
  ];

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <Link to={slide.link}>
              <img src={slide.image} alt={slide.title} className="slide-image" />
              <div className="slide-caption text-gray-400">
                <h2>{slide.title}</h2>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;

