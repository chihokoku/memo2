// import { useState } from "react";


export const MemoForm = (props) => {

  // const [text, setText] = useState("");

  return(
    <div>
      <input type="text" value={props.text} onChange={props.onChangeText} />
      <button onClick={props.onClickAdd}>追加</button>
    </div>
  );
};