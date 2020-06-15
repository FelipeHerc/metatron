const initialState = {
  equipaments: {
    '01be84339ca032a7bf78fedcf9044732': {
      key: '01be84339ca032a7bf78fedcf9044732',
      name: 'ShortSword',
      type: 'shortSword',
      slot: 'rightHand',
      bonus: {
        attack: 300
      }
    },
    '950271c76636e4033d9ba6a11966fe63': {
      key: '950271c76636e4033d9ba6a11966fe63',
      name: 'BFB',
      type: 'longSword',
      slot: 'rightHand',
      bonus: {
        hp: 1000,
        luck: 200
      }
    },
    '7a875445d37d4fb68630a1707649a937': {
      key: '7a875445d37d4fb68630a1707649a937',
      name: 'Jooj',
      type: 'longSword',
      slot: 'armor',
      bonus: {
        defense: 1000,
        knowledge: 200
      }
    },
    '40200da63f1ddcddda2bccac32d07a6c': {
      key: '40200da63f1ddcddda2bccac32d07a6c',
      name: 'Macaco',
      type: 'longSword',
      slot: 'armor',
      bonus: {
        stamina: 1000,
        luck: 200
      }
    },
    '18448aab414003ddbb0d5ed6a8525c3d': {
      key: '18448aab414003ddbb0d5ed6a8525c3d',
      name: 'Cleito',
      type: 'longSword',
      slot: 'helm',
      bonus: {
        stamina: 1000,
        luck: 200
      }
    },
    '2d13f3be3c35960592fb485485a8e8b2': {
      key: '2d13f3be3c35960592fb485485a8e8b2',
      name: 'Jorge',
      type: 'longSword',
      slot: 'helm',
      bonus: {
        stamina: 1000,
        luck: 200
      }
    },
    '0efd99ac7a80069d443b2e3870a5d7aa': {
      key: '0efd99ac7a80069d443b2e3870a5d7aa',
      name: 'Rogerio',
      type: 'longSword',
      slot: 'gloves',
      bonus: {
        stamina: 1000,
        luck: 200
      }
    },
    '66e6af321e7be1d73d6aa37e1655efb1': {
      key: '66e6af321e7be1d73d6aa37e1655efb1',
      name: 'Antonho',
      type: 'longSword',
      slot: 'gloves',
      bonus: {
        stamina: 1000,
        luck: 200
      }
    },
    '1f9a55ead663eb8256d171d3b7e8149a': {
      key: '1f9a55ead663eb8256d171d3b7e8149a',
      name: 'OAdiano',
      type: 'longSword',
      slot: 'boots',
      bonus: {
        stamina: 1000,
        luck: 200
      }
    },
    '4c47d5e605acd43f1ffc41714d298481': {
      key: '4c47d5e605acd43f1ffc41714d298481',
      name: 'Uou',
      type: 'longSword',
      slot: 'boots',
      bonus: {
        stamina: 1000,
        luck: 200
      }
    },
    '4b40546c693b5d2f016415c26049cb7f': {
      key: '4b40546c693b5d2f016415c26049cb7f',
      name: 'Perninha',
      type: 'longSword',
      slot: 'legging',
      bonus: {
        stamina: 1000,
        luck: 200
      }
    },
    '24e8be4abf822e0424764f16556af572': {
      key: '24e8be4abf822e0424764f16556af572',
      name: 'Otaperninha',
      type: 'longSword',
      slot: 'legging',
      bonus: {
        stamina: 1000,
        luck: 200
      }
    }
  },
  consumables: {}
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
