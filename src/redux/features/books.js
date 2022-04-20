const initialState = {
  items: [],
  error: null,
  loading: false,
};

export default function books(state = initialState, action) {
  switch (action.type) {
    case "books/get/fulfilled":
      return { ...state, items: action.payload };
    case "books/get/pending":
      return { ...state, loading: false };
    case "books/get/rejected":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
export const loadBooks = () => {
  return async (dispatch) => {
    dispatch({ type: "books/get/pending" });
    try {
      const res = await fetch("http://localhost:4000/books");
      const json = await res.json();
      dispatch({ type: "books/get/fulfilled", payload: json });
    } catch (err) {
      dispatch({ type: "books/get/rejected", payload: err.message });
    }
  };
};
