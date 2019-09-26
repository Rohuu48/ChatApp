const initialState = {
  theme: "light"
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.theme };

    default:
      return state;
  }
};

export default settingsReducer;
