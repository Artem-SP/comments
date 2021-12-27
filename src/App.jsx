import React from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import { useState, useEffect } from 'react';
import {addCommentAction} from './store/commentsReduser'
import {removeCommentAction} from './store/commentsReduser'
import {state} from './store/commentsReduser'
import { fetchDataDB } from './asyncAction/getDataDB';



function App() {

  const [value, setValue] = useState("");
  // const [comment, setValue] = useState("");
  const dispatch = useDispatch()
  
 const comments = useSelector(state => state.comments.comments)

  // const addCash = (cash) => {

  //   cash = value
  //   dispatch({type:"ADD_CASH", payload: cash})
  // }
  // const getCash = (cash) => {
  //   cash = value
  //   dispatch({type:"GET_CASH", payload: cash})
  // }

  const addComment = (body) => {
console.log(comments)
    const comment = {
      id: Date.now(),
      body: body
    }

    fetch('http://localhost:8000/comments', {      method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
    
  } )
  // dispatch(addCommentAction(comment))


    // console.log(comment)
    // console.log(comments)
  
    // dispatch(fetchDataDB())
    }

    const removeComment = (comment) => {
      dispatch(removeCommentAction(comment.id))
    }


useEffect(() => {
  dispatch(fetchDataDB())
  console.log(comments)
}, [])

    return (
    <div className="App">
     {/* <div style={{display: 'flex'}}>
       <button onClick={() => addCash()}>Поплнить счет</button> 
       <button onClick={() => getCash()}>Снять со счета</button>
       <input type="number" value={value} onInput={(e) => {
          setValue(+e.target.value)}}></input>
       <p>Cash: {cash}</p>
       </div> */}

       <div style={{display: 'flex'}}>
       <button onClick={() => addComment(prompt())}>Добавить коментарий</button> 
       <button onClick={() => dispatch(fetchDataDB())}>Получить комментарии из базы</button> 
       
       {/* <button onClick={() => getCash()}>Удалить клиента</button>
       <input type="text" value={value} onInput={(e) => {
          setValue(+e.target.value)}}></input>
       <p>Cash: {cash}</p> */}
       </div>

<div>
  {comments.length > 0 ? 
<div>
{comments.map(comment => <div onClick={()=> {removeComment(comment)}}>{comment.name +": "+ comment.body }</div>)}
</div>
:
<div style={{color: 'red', marginTop: 20}}>No comments</div>
}
</div>
    </div>
  );
}

export default App;
