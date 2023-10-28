import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import '../styles/BackgroundChanger.css';

const settings = {
  dots: false,
  infinite: true,
  speed: 3000, // 2秒ごとのスピードに設定
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // 自動再生を有効化
  autoplaySpeed: 3000, // 2秒ごとの自動再生速度
  vertical: true, // 垂直方向にスライド
};

const BackgroundChanger = () => {
  const defaultImages = [
    "/img/arata.jpg",
    "/img/kid.jpg",
    "/img/seiko.jpg",
    "/img/seiko2.jpg"
  ];

  const [images, setImages] = useState(defaultImages);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('myParam');
    if (myParam) {
      setImages([
        "/img/arata2.jpg",
        "/img/kid.jpg",
        "/img/seiko.jpg",
        "/img/seiko2.jpg"
      ]);
    }
  }, []);

  return (
    <div className="background-changer-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="background-slide">
            <img src={image} alt={`slide ${index}`} className="background-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BackgroundChanger;
