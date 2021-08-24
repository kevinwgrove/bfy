export const reducer = (state, action) => {
  switch (action.type) {
    case "mobileDevice":
      return {
        ...state,
        mobileDevice: action.payload,
      };
    default:
      return state;
  }
};
