import { useState } from 'react';

const DoubleClick = () => {
  const [text, setText] = useState('よくある質問・お問い合わせ');

  const handleDoubleClick = () => {
    setText('新しいテキスト');
  };

  return (
    <h1 onDoubleClick={handleDoubleClick}>
      {text}
    </h1>
  );
};

export default DoubleClick;
