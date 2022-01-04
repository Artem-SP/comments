import React from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addCommentAction } from "./store/commentsReduser";
import { removeCommentAction } from "./store/commentsReduser";
import { state } from "./store/commentsReduser";
import { fetchDataDB } from "./asyncAction/getDataDB";

function App() {
  const [value, setValue] = useState("");
  // const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const comments = useSelector((state) => state.comments.comments);
  const currentUser = comments[0];
  // const addCash = (cash) => {

  //   cash = value
  //   dispatch({type:"ADD_CASH", payload: cash})
  // }
  // const getCash = (cash) => {
  //   cash = value
  //   dispatch({type:"GET_CASH", payload: cash})
  // }

  const addComment = (body) => {
    console.log(comments);
    const comment = {
      id: Date.now(),
      body: body,
    };
    fetch("http://localhost:8000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
    dispatch(addCommentAction(comment));
    // dispatch(fetchDataDB())

    // console.log(comment)
    // console.log(comments)

    // dispatch(fetchDataDB())
  };

  const removeComment = (comment) => {
    let id = comment.id;

    fetch(`http://localhost:8000/comments/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });

    dispatch(removeCommentAction(comment.id));
  };

  useEffect(() => {
    dispatch(fetchDataDB());
    console.log(comments);
  }, []);

  return (
    <div className="App">
      {/* <div style={{display: 'flex'}}>
       <button onClick={() => addCash()}>Поплнить счет</button> 
       <button onClick={() => getCash()}>Снять со счета</button>
       <input type="number" value={value} onInput={(e) => {
          setValue(+e.target.value)}}></input>
       <p>Cash: {cash}</p>
       </div> */}

      <div style={{ display: "flex" }}>
        <button onClick={() => addComment(prompt())}>
          Добавить коментарий
        </button>
        <button onClick={() => dispatch(fetchDataDB())}>
          Получить комментарии из базы
        </button>

        {/* <button onClick={() => getCash()}>Удалить клиента</button>
       <input type="text" value={value} onInput={(e) => {
          setValue(+e.target.value)}}></input>
       <p>Cash: {cash}</p> */}
      </div>

      <div>
        {comments.length > 0 ? (
          <div>
            {comments.map((comment) => (
              <div
                onClick={() => {
                  removeComment(comment);
                }}
              >
                {comment.name + ": " + comment.body}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ color: "red", marginTop: 20 }}>No comments</div>
        )}
      </div>

      <div className="container">
        <div className="msg-container">
          <img src={currentUser.avatar} alt="avatar" />
          <input type="text" />
          <button>Send</button>
        </div>
        <hr />
        <div className="comment-container">
        <img src={currentUser.avatar} alt="avatar" />
        <div className="comment">
          <div className="comment-title">
            <div className="comment-name">{currentUser.name}</div>
            <div className="comment-date">{currentUser.date}</div>
          </div>
          <div className="comment-text">{currentUser.body}</div>
          <div className="actions">
            <div>Edit</div>
            <div>Delete</div>
            <div>Replay</div>

          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
