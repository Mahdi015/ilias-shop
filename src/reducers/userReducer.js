export const userReducer = (state = null, action) => {
  switch (action.type) {
    case "TOKEN_VERIFIED":
      return action.payload;
    case "INVALID_TOKEN":
      return action.payload;
    default:
      return state;
  }
};
