import { useState } from "react";

const DoubleClick = () => {
  const [text, setText] = useState("よくある質問・お問い合わせ");

  const handleDoubleClick = () => {
    setText((prevText) =>
      prevText === "よくある質問・お問い合わせ"
        ? "新しいテキスト"
        : "よくある質問・お問い合わせ"
    );
  };

  return (
    <h1
      onDoubleClick={handleDoubleClick}
      style={{
        marginLeft: "200px",
        color: "white",
        fontWeight: "bold",
        fontSize: "40px",
        width: "1200px",
        margin: "40px auto",
      }}
    >
      {text}
    </h1>
  );
};

export default DoubleClick;
