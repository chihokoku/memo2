
export const MemoForm = (props) => {


  return(
    <div>
      <input type="text" value={props.text} onChange={props.onChangeText} />
      <button onClick={props.onClickAdd}>追加</button>
    </div>
  );
};