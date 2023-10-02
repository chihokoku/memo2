import { useState, useCallback } from "react";
import {MemoList} from "./MemoList"
import {useMemoList} from "../hooks/useMemoList";
 
export default function App() {
  
  const { memos, addTodo, deleteTodo } = useMemoList();
  // const [memos, setMemos] = useState([]);
  const [text, setText] = useState("");

  // テキストボックスの値が変更されたときのハンドラ
  const onChangeText = (e) => {
    setText(e.target.value);
  };

  // メモを追加するハンドラ
  const onClickAdd = () => {
    // const newMemos = [...memos];
    // newMemos.push(text);
    // setMemos(newMemos);
    addTodo(text);
    setText("");
  };

  // メモを削除するハンドラ
  // const onClickDelete = useCallback((index) => {
  //   const newMemos = [...memos];
  //   newMemos.splice(index, 1);
  //   setMemos(newMemos);
  // }, [memos]);

  const onClickDelete = useCallback((index) => {
    deleteTodo(index);
  }, [deleteTodo]);


  return (
    <div>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <button onClick={onClickAdd}>追加</button>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
      {/* <div className="container">
        <p>メモ一覧</p>
        <ul>
          {memos.map((memo, index) => (
            <li key={memo}>              
                <p>{memo}</p>
                <button onClick={() => onClickDelete(index)}>削除</button>              
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};
