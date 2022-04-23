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

    case "books/post/pending":
      return {
        ...state,
        loading: true,
      };
    case "books/post/fulfilled":
      return {
        ...state,
        items: [...state.items, action.payload],
        loading: false,
      };

    case "books/post/rejected":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
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

export const postBook = (
  file,
  title,
  description,
  chars,
  tags,
  category,
  text,
  author

) => {
  return async (dispatch) => {
    dispatch({ type: "books/post/pending" });
    try {
      const formData = new FormData();
      formData.append("img", file);
      formData.append("title", title);
      formData.append("description", description);
      formData.append('mainCharacters', chars)
      formData.append("category", category);
    formData.append('tags', tags)
    formData.append("text", text);
    formData.append("author", author);

      // formData.append('condition', condition)
    //   formData.append("author", author);
      const res = await fetch(`http://localhost:4000/books`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      console.log(data);

      dispatch({ type: "books/post/fulfilled", payload: data });
    } catch (error) {
      dispatch({ type: "books/post/rejected", payload: error.message });
    }
  };
};
