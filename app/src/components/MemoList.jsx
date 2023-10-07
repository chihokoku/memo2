export const MemoList = ({ memos, deleteTodo }) => {
  return (
    <div className="container">
      <p>メモ一覧</p>
      <ul>
        {memos.map((memo, index) => (
          <li key={memo}>
            <p>{memo}</p>
            <button onClick={() => deleteTodo(index)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
