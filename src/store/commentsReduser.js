const defaultState = {
  comments: [],
};

const GET_DATA_DB = "GET_DATA_DB";
const ADD_COMMENT = "ADD_COMMENT";
const CHANGE_COMMENT = "CHANGE_COMMENT";
const REMOVE_COMMENT = "REMOVE_COMMENT";

export const commentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_DATA_DB:
      // return{...state, comments: [...state.comments, ...action.payload]}
      return { ...state, comments: [...action.payload] };

    case ADD_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };

    case CHANGE_COMMENT:
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === action.payload.id) {
            comment.body = action.payload.body;
          }
          return comment;
        })
      };

    case REMOVE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const getDataDBAction = (payload) => ({ type: GET_DATA_DB, payload });
export const addCommentAction = (payload) => ({ type: ADD_COMMENT, payload });
export const cangeCommentAction = (payload) => ({ type: CHANGE_COMMENT, payload });
export const removeCommentAction = (payload) => ({ type: REMOVE_COMMENT, payload });
