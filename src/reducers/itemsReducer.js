import { MD5 } from '../utils/GenerateHashes'

const initialState = {
  equipaments: {
    ShortSword: {
      key: MD5('ShortSword'),
      name: 'ShortSword',
      type: 'shortSword',
      slot: 'rightHand',
      bonus: {
        attack: 300
      }
    },
    BFB: {
      key: MD5('BFB'),
      name: 'BFB',
      type: 'longSword',
      slot: 'rightHand',
      bonus: {
        hp: 1000,
        luck: 200
      }
    },
    Jooj: {
      key: MD5('Jooj'),
      name: 'Jooj',
      type: 'longSword',
      slot: 'armor',
      bonus: {
        defense: 1000,
        knowledge: 200
      }
    },
    Macaco: {
      key: MD5('Macaco'),
      name: 'Macaco',
      type: 'longSword',
      slot: 'armor',
      bonus: {
        stamina: 1000,
        luck: 200
      }
    },
    Cleito: {
      key: MD5('Cleito'),
      name: 'Cleito',
      type: 'longSword',
      slot: 'helm',
      bonus: {
        stamina: 1000,
        luck: 200
      }
    },
    Jorge: {
      key: MD5('Jorge'),
      name: 'Jorge',
      type: 'longSword',
      slot: 'helm',
      bonus: {
        stamina: 1000,
        luck: 200
      }
    },
    Rogerio: {
      key: MD5('Rogerio'),
      name: 'Rogerio',
      type: 'longSword',
      slot: 'gloves',
      bonus: {
        stamina: 1000,
        luck: 200
      }
    },
    Antonho: {
      key: MD5('Antonho'),
      name: 'Antonho',
      type: 'longSword',
      slot: 'gloves',
      bonus: {
        stamina: 1000,
        luck: 200
      }
    },
    OAdiano: {
      key: MD5('OAdiano'),
      name: 'OAdiano',
      type: 'longSword',
      slot: 'boots',
      bonus: {
        stamina: 1000,
        luck: 200
      }
    },
    Uou: {
      key: MD5('Uou'),
      name: 'Uou',
      type: 'longSword',
      slot: 'boots',
      bonus: {
        stamina: 1000,
        luck: 200
      }
    },
    Perninha: {
      key: MD5('Perninha'),
      name: 'Perninha',
      type: 'longSword',
      slot: 'legging',
      bonus: {
        stamina: 1000,
        luck: 200
      }
    },
    Otaperninha: {
      key: MD5('Otaperninha'),
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
  switch (action.type) {
    case 'RESET_CURRENCY':
      return {
        ...state,
        chakra: 0
      }

    default:
      return state
  }
}
