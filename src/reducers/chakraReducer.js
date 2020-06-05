const initialState = {
  chakra: 0,
};

export default function chakra(state = initialState, action) {
  switch (action.type) {
    case "EARN_CURRENCY":
      return {
        ...state,
        chakra: state.chakra + action.quantity,
      };

    case "LOSE_CURRENCY":
      return {
        ...state,
        chakra: Math.max(0, state.chakra - action.quantity),
      };

    case "RESET_CURRENCY":
      return {
        ...state,
        chakra: 0,
      };

    default:
      return state;
  }
}
