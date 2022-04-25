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

    case "books/like/pending":
      return {
        ...state,
        loading: true,
      };
    case "books/like/fulfilled":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item._id === action.payload.id) {
            item.likes = [...item.likes, action.payload.likes];
            return item;
          }
          return item;
        }),
        loading: false,
      };

    case "books/like/rejected":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case "books/unlike/pending":
      return {
        ...state,
        loading: true,
      };
    case "books/unlike/fulfilled":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item._id === action.payload.bookId) {
            item.likes = item.likes.filter((i) => i !== action.payload.likes);
            return item;
          }
          return item;
        }),
        loading: false,
      };

    case "books/unlike/rejected":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case "book/edit/pending":
      return {
        ...state,
        loading: true,
      };
    case "book/edit/fulfilled":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item._id === action.payload.id) {
            item = action.payload.text;
            return item;
          }
          return item;
        }),
        loading: false,
      };

    case "book/edit/rejected":
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
      formData.append("mainCharacters", chars);
      formData.append("category", category);
      formData.append("tags", tags);
      formData.append("text", text);
      formData.append("author", author);

      // formData.append('condition', condition)
      //   formData.append("author", author);
      const res = await fetch(`http://localhost:4000/books`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      dispatch({ type: "books/post/fulfilled", payload: data });
    } catch (error) {
      dispatch({ type: "books/post/rejected", payload: error.message });
    }
  };
};

export const like = (likes, id) => {
  return async (dispatch) => {
    dispatch({ type: "books/like/pending" });
    try {
      const res = await fetch(`http://localhost:4000/book/${id}/like`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({ likes }),
      });
      const json = await res.json();

      dispatch({ type: "books/like/fulfilled", payload: { id, likes } });
    } catch (err) {
      dispatch({ type: "books/like/rejected", payload: err.message });
    }
  };
};

export const unLike = (likes, bookId) => {
  return async (dispatch) => {
    dispatch({ type: "books/unlike/pending" });
    try {
      const res = await fetch(`http://localhost:4000/book/${bookId}/unlike`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({ likes }),
      });
      const json = await res.json();
      dispatch({ type: "books/unlike/fulfilled", payload: { likes, bookId } });
    } catch (err) {
      dispatch({ type: "books/unlike/rejected", payload: err.message });
    }
  };
};

export const continueBook = (text, id) => {
  return async (dispatch) => {
    dispatch({ type: "book/edit/pending" });
    try {
      const res = await fetch(`http://localhost:4000/books/${id}/edit`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      dispatch({ type: "book/edit/fulfilled", payload: { text, id } });
    } catch (error) {
      dispatch({ type: "book/edit/rejected", payload: error.message });
    }
  };
};
