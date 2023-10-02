import { memo } from "react";


export const MemoList = memo((props) => {

  const { memos, onClickDelete } = props;

  return(
    <div className="container">
        <p>メモ一覧</p>
        <ul>
          {memos.map((memo, index) => (
            <li key={memo}>              
                <p>{memo}</p>
                <button onClick={() => onClickDelete(index)}>削除</button>              
            </li>
          ))}
        </ul>
      </div>
  );
});