import { MemoList } from "./MemoList";
import { useMemoList } from "../hooks/useMemoList";
import { Title } from "./Title";
import { MemoForm } from "./MemoForm";

// 子の値を親で受け取る

const App = () => {
  const { memos, addTodo, deleteTodo } = useMemoList();

  return (
    <div>
      <Title title="簡単メモアプリ" />
      <MemoForm addTodo={addTodo} />
      <MemoList memos={memos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
