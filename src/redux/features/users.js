const initialState = {
  items: [],
  error: null,
  loading: false,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case "users/get/fulfilled":
      return { ...state, items: action.payload };
    case "users/get/pending":
      return { ...state, loading: false };
    case "users/get/rejected":
      return { ...state, error: action.payload };

    case "users/patch/pending":
      return {
        ...state,
        loading: true,
      };
    case "users/patch/fulfilled":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item._id === action.payload._id) {
            return (item = action.payload);
          }
          return item;
        }),
        loading: false,
      };

    case "users/patch/rejected":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case "avatar/patch/pending":
      return {
        ...state,
        loading: true,
      };
    case "avatar/patch/fulfilled":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item._id === action.payload._id) {
            item = action.payload;
            return item;
          }
          return item;
        }),
        loading: false,
      };

    case "avatar/patch/rejected":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case "users/follow/pending":
      return {
        ...state,
        loading: true,
      };
    case "users/follow/fulfilled":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item._id === action.payload.id) {
            item.followers = [...item.followers, action.payload.followers];
            return item
          }
          return item;
        }),
        loading: false,
      };

    case "users/follow/rejected":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case "users/unfollow/pending":
      return {
        ...state,
        loading: true,
      };
    case "users/unfollow/fulfilled":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item._id === action.payload.id) {
            item.followers = item.followers.filter(
              (i) => i !== action.payload.followers
            );
            return item;
          }
          return item;
        }),
        loading: false,
      };

    case "users/unfollow/rejected":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
export const loadUsers = () => {
  return async (dispatch) => {
    dispatch({ type: "users/get/pending" });
    try {
      const res = await fetch("http://localhost:4000/users");
      const json = await res.json();
      dispatch({ type: "users/get/fulfilled", payload: json });
    } catch (err) {
      dispatch({ type: "users/get/rejected", payload: err.message });
    }
  };
};

export const editProfile = (description, id) => {
  return async (dispatch) => {
    dispatch({ type: "users/patch/pending" });
    try {
      const res = await fetch(`http://localhost:4000/user/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description }),
      });
      const data = await res.json();
      dispatch({ type: "users/patch/fulfilled", payload: data });
    } catch (error) {
      dispatch({ type: "users/patch/rejected", payload: error.message });
    }
  };
};

export const editAvatar = (file, id) => {
  return async (dispatch) => {
    dispatch({ type: "avatar/patch/pending" });
    try {
      const formData = new FormData();
      formData.append("img", file);
      // formData.append("description", description);

      const res = await fetch(`http://localhost:4000/user/avatar/${id}`, {
        method: "PATCH",
        body: formData,
      });
      const data = await res.json();

      dispatch({ type: "avatar/patch/fulfilled", payload: data });
    } catch (error) {
      dispatch({ type: "avatar/patch/rejected", payload: error.message });
    }
  };
};

export const subscribe = (followers, id) => {
  return async (dispatch) => {
    dispatch({ type: "users/follow/pending" });
    try {
      const res = await fetch(`http://localhost:4000/user/${id}/follow`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({ followers }),
      });
      const json = await res.json();
      dispatch({ type: "users/follow/fulfilled", payload: { followers, id } });
    } catch (err) {
      dispatch({ type: "users/follow/rejected", payload: err.message });
    }
  };
};

export const unSubscribe = (followers, id) => {
  return async (dispatch) => {
    dispatch({ type: "users/unfollow/pending" });
    try {
      const res = await fetch(`http://localhost:4000/user/${id}/unfollow`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({ followers }),
      });
      const json = await res.json();
      dispatch({
        type: "users/unfollow/fulfilled",
        payload: { id, followers },
      });
    } catch (err) {
      dispatch({ type: "users/unfollow/rejected", payload: err.message });
    }
  };
};
