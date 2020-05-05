const initialState = {
  HP: 5,
  Defense: 1
};

export default function levelUp(state = initialState, action) {
    console.log(action.type);

  switch (action.type) {
    case 'LVL_UP_VITALITY':
      return {
        ...state,
        HP: state.HP + action.HP,
        Defense: action.Defense,
      };

    default:
      return state;
  }
};
