const initialState = {
  rightHand: false,
  helm: false,
  armor: false,
  legging: false,
  gloves: false,
  boots: false
}

export default function equipamentReducer (state = initialState, action) {
  const equips = { ...state }
  switch (action.type) {
    case 'EQUIP':
      equips[action.slot] = action.equipament
      return equips

    case 'UNEQUIP':
      equips[action.slot] = false
      return equips

    default:
      return state
  }
}
