const initialState = {
  equipaments: {},
  consumables: {},
  keyItems: {},
  spells: {}
}

export default function chakra (state = initialState, action) {
  const bag = { ...state }
  switch (action.type) {
    case 'REMOVE_EQUIPAMENT':
      delete bag.equipaments[action.key]
      return bag

    case 'ADD_EQUIPAMENT':
      bag.equipaments[action.equipament.key] = action.equipament
      return bag

    default:
      return state
  }
}
