const initialState = {
  comments: [],
  loading: true,
  error: null,
};

export default function comments(state = initialState, action) {
  switch (action.type) {
    case "comments/get/fulfilled":
      return {
        ...state,
        comments: action.payload,
        loading: false,
      };
    case "comments/get/pending":
      return {
        ...state,
        loading: true,
      };
    case "comments/get/rejected":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case "comments/post/fulfilled":
      return {
        ...state,
        comments: [action.payload, ...state.comments],
        load: false,
      };
    case "comments/post/rejected":
      return {
        ...state,
        error: action.error,
        load: false,
      };
    case "comments/post/pending":
      return {
        ...state,
        loading: true,
      };

    case "comments/remove/fulfilled":
      return {
        ...state,
        comments: [...action.payload],
        load: false,
      };
    case "comments/remove/rejected":
      return {
        ...state,
        error: action.error,
        load: false,
      };
    case "comments/remove/pending":
      return {
        ...state,
        load: true,
      };

    default:
      return state;
  }
}

export const getComments = () => {
  return async (dispatch) => {
    dispatch({ type: "comments/get/pending" });
    try {
      const res = await fetch("http://localhost:4000/comments");
      const json = await res.json();

      const reverserd = json.reverse();
      dispatch({ type: "comments/get/fulfilled", payload: reverserd });
    } catch (err) {
      dispatch({ type: "comments/get/rejected", payload: err.message });
    }
  };
};

export const addComment = (comment, bookId, user) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "comments/post/pending" });
    try {
      const res = await fetch(`http://localhost:4000/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.application.token}`,
        },
        body: JSON.stringify({ text: comment, books: bookId, user }),
      });
      const json = await res.json();
      dispatch({ type: "comments/post/fulfilled", payload: json });
    } catch (err) {
      dispatch({ type: "comments/post/rejected", error: err.toString() });
    }
  };
};

export const removeComment = (id, filtered) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "comments/remove/pending" });
    try {
      const res = await fetch(`http://localhost:4000/comments/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${state.application.token}`,
        },
      });
      dispatch({ type: "comments/remove/fulfilled", payload: filtered });
    } catch (err) {
      dispatch({ type: "comments/remove/rejected", error: err.toString() });
    }
  };
};
