export const reducer = (state, action) => {
  switch (action.type) {
    case "mobileDevice":
      return {
        ...state,
        mobileDevice: action.payload,
      };
    case "elementOne":
      return {
        ...state,
        elementOne: action.payload,
      }
    case "elementTwo":
      return {
        ...state,
        elementTwo: action.payload
      }
    default:
      return state;
  }
};
