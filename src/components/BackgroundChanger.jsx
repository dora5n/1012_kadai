import 'swiper/css';
import 'swiper/css/bundle';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const BackgroundChanger = () => {
  const [backgroundStyle, setBackgroundStyle] = useState({
    width: '1200px',
    height: '660px',
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
      // direction={'horizontal'} // 水平方向にスライド
      // autoplay={{ delay: 2000 }} // 自動再生
    >
      <SwiperSlide>
        <img src="/img/arata.jpg" alt="arata" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/kid.jpg" alt="kid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/seiko.jpg" alt="seiko" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/seiko2.jpg" alt="seiko2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/karerin.jpg" alt="karerin" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/resu.jpg" alt="resu" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </SwiperSlide>

    </Swiper>
  );
};

export default BackgroundChanger;
