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
          items: state.items.map(item => {
            if (item._id === action.payload._id) {
              return item = action.payload
            }
            return item
          }),
          loading: false

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
          items: action.payload,
          loading: false

        };
  
      case "avatar/patch/rejected":
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
        // const formData = new FormData();
        // formData.append("img", file);
        // formData.append("description", description);
        
        const res = await fetch(`http://localhost:4000/user/${id}`, {
          method: "PATCH",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({description})
        });
        const data = await res.json();
        console.log(data);
  
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
  