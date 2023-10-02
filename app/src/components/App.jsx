import { useState, useCallback, memo } from "react";
import {MemoList} from "./MemoList"
import {useMemoList} from "../hooks/useMemoList";
import {Title} from "./Title"
import { MemoForm } from "./MemoForm"
 
export const App = memo(() =>  {
  
  const { memos, addTodo, deleteTodo } = useMemoList();
  // const [memos, setMemos] = useState([]);
  const [text, setText] = useState("");

  // テキストボックスの値が変更されたときのハンドラ
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  },[]);

  // メモを追加するハンドラ
  const onClickAdd = useCallback(() => {
    // const newMemos = [...memos];
    // newMemos.push(text);
    // setMemos(newMemos);
    addTodo(text);
    setText("");
  },[]);

  
  const onClickDelete = useCallback((index) => {
    deleteTodo(index);
  }, [deleteTodo]);


  return (
    <div>
      <Title title="簡単メモアプリ"/>
      <MemoForm onClickAdd={onClickAdd} onChangeText={onChangeText}/>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </div>
  );
});
