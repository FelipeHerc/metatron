const initialState = {
  rightHand: false
}

export default function equipamentReducer (state = initialState, action) {
  switch (action.type) {
    case 'EQUIP_RIGHT_HAND':
      return {
        ...state,
        rightHand: action.equipament.name
      }

    case 'UNEQUIP_RIGHT_HAND':
      return {
        ...state,
        rightHand: false
      }

    default:
      return state
  }
}
