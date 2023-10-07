import { useState } from "react";

export const MemoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  // テキストボックスの値が変更されたときのハンドラ
  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    addTodo(text);
    setText("");
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChangeText} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
