import { useState, useCallback } from "react";
import {MemoList} from "./MemoList"
import {useMemoList} from "../hooks/useMemoList";
import {Title} from "./Title"
import { MemoForm } from "./MemoForm"
 
const App = () =>  {
  
  const { memos, addTodo, deleteTodo } = useMemoList();
  // const [memos, setMemos] = useState([]);
  const [text, setText] = useState("");

  // テキストボックスの値が変更されたときのハンドラ
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  },[]);

  // メモを追加するハンドラ
  const onClickAdd = useCallback(() => {
    addTodo(text);
    // クリック時にformが空にならない
    setText("");
  },[text]);

  
  const onClickDelete = useCallback((index) => {
    deleteTodo(index);
  }, [deleteTodo]);


  return (
    <div>
      <Title title="簡単メモアプリ"/>
      {/* useStateを使用した関数を渡す際にはuseStateの変数と関数を渡す必要あり */}
      <MemoForm text={text} setText={setText} onClickAdd={onClickAdd}  onChangeText={onChangeText}/>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </div>
  );
};

export default App;