import { getDataDBAction } from "../store/commentsReduser"


export const fetchDataDB = () => {
  return (dispatch) => {
    fetch('http://localhost:8000/comments?_embed=replies')
  .then(response => response.json())
  .then(json => dispatch(getDataDBAction(json)))
  }
}

// export const fetchCustomers1 = () => {
//   return (dispatch) => {
//     fetch('http://localhost:8000/replies')
//   .then(response => response.json())
//   .then(json => dispatch(addManyCusomerAction1(json)))
//   }
// }