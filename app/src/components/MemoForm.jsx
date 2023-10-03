// import { memo } from "react";


export const MemoForm = (props) => {

  return(
    <form>
      <input type="text" value={props.text} onChange={props.onChangeText} />
      <button onClick={props.onClickAdd}>追加</button>
    </form>
  );
};