import { useEffect, useState } from 'react';

const Index = () => {
  const [backgroundStyle, setBackgroundStyle] = useState({
    width: '1200px',
    height: '660px',
    background: 'url(img/arata.jpg) no-repeat center/cover',
    margin: '50px auto',
    borderRadius: '10px',
  });

  useEffect(() => {
    // locationからパラメーターを取得
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('myParam');
    // パラメーターがある場合、背景画像を変更
    if (myParam) {
      setBackgroundStyle(prevStyle => ({
        ...prevStyle,
        background: `url(img/arata2.jpg) no-repeat center/cover`,
      }));
    }
  }, []);

  return (
    <div
      style={{
        width: backgroundStyle.width,
        height: backgroundStyle.height,
        background: backgroundStyle.background,
        margin: backgroundStyle.margin,
        borderRadius: backgroundStyle.borderRadius,
      }}
    >
      {/* ここにコンテンツを追加 */}
    </div>
  );
};

export default Index;
