import 'swiper/css';
import 'swiper/css/bundle';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/styles.css';

const BackgroundChanger = () => {
  const [backgroundStyle, setBackgroundStyle] = useState({
    width: '1200px',
    height: '680px',
    margin: '50px auto',
    borderRadius: '10px',
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('myParam');
    if (myParam) {
      setBackgroundStyle(prevStyle => ({
        ...prevStyle,
        background: `url(img/arata2.jpg) no-repeat center/cover`,
      }));
    }
  }, []);

  useEffect(() => {
    console.log(backgroundStyle); // 背景スタイルをログに出力
  }, [backgroundStyle]);

  return (
    <Swiper
      style={{
        width: backgroundStyle.width,
        height: backgroundStyle.height,
        margin: backgroundStyle.margin,
        borderRadius: backgroundStyle.borderRadius,
      }}
      slidesPerView={1} // 1枚ずつ表示
      direction={'horizontal'} // 水平方向にスライド
    >
      <SwiperSlide>
        <img src="/img/arata.jpg" alt="arata" className="swiper-image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/kid.jpg" alt="kid" className="swiper-image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/seiko.jpg" alt="seiko" className="swiper-image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/seiko2.jpg" alt="seiko2" className="swiper-image" />
      </SwiperSlide>    </Swiper>
  );
};

export default BackgroundChanger;
