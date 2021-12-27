const defaultState = {
  comments: []
}


const ADD_COMMENT = 'ADD_COMMENT'
const GET_DATA_DB = 'GET_DATA_DB'
const REMOVE_COMMENT = "REMOVE_COMMENT"

export const commentsReducer = (state = defaultState, action) => {
  switch (action.type) {

    case GET_DATA_DB:
      // return{...state, comments: [...state.comments, ...action.payload]}
      return{...state, comments: [...action.payload]}

    case ADD_COMMENT:
      return{...state, comments: [... state.comments, action.payload]}
    
      case REMOVE_COMMENT:
      return{...state, comments: state.comments.filter(comment => comment.id !== action.payload)}
    default: 
    return state
  }
}


export const addCommentAction = (payload) => ({type: ADD_COMMENT, payload})
export const getDataDBAction = (payload) => ({type: GET_DATA_DB, payload})
export const removeCommentAction = (payload) => ({type: REMOVE_COMMENT, payload})