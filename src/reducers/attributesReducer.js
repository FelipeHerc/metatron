import Classes from '../char_specs/Classes';

const initialState = {
  class: "hollow",
  level: 1,
  attributes: {
    vitality: 1,
    energy: 1,
    strength: 1,
    hability: 1,
    intelligence: 1,
    faith: 1,
    mystic: 1,
  },
  stats: {
    hp: 1,
    stamina: 1,
    mana: 1,
    knowledge: 1,
    defense: 1,
    attack: 1,
    luck: 1,
  }
};

export default function char_attributes(state = initialState, action) {
  console.log(Classes);
  switch (action.type) {
    case 'LVL_UP_VITALITY':
      return {
        ...state,
        level: state.level + 1,
        attributes: {
          ...state.attributes,
          vitality: state.attributes.vitality + 1
        },
        stats: {
          ...state.stats,
          hp: state.stats.hp + 1,
          defense: state.stats.defense + 1,
        }
      };

    case 'LVL_UP_ENERGY':
      return {
        ...state,
        level: state.level + 1,
        attributes: {
          ...state.attributes,
          energy: state.attributes.energy + 1
        },
        stats: {
          ...state.stats,
          stamina: state.stats.stamina + 1,
          defense: state.stats.defense + 1,
        }
      };

    case 'LVL_UP_STRENGTH':
      return {
        ...state,
        level: state.level + 1,
        attributes: {
          ...state.attributes,
          strength: state.attributes.strength + 1
        },
        stats: {
          ...state.stats,
          hp: state.stats.hp + 1,
          attack: state.stats.attack + 1,
        }
      };

    case 'LVL_UP_HABILITY':
      return {
        ...state,
        level: state.level + 1,
        attributes: {
          ...state.attributes,
          hability: state.attributes.hability + 1
        },
        stats: {
          ...state.stats,
          stamina: state.stats.stamina + 1,
          attack: state.stats.attack + 1,
        }
      };

    case 'LVL_UP_INTELLIGENCE':
      return {
        ...state,
        level: state.level + 1,
        attributes: {
          ...state.attributes,
          intelligence: state.attributes.intelligence + 1
        },
        stats: {
          ...state.stats,
          mana: state.stats.mana + 1,
          knowledge: state.stats.knowledge + 1,
        }
      };

    case 'LVL_UP_FAITH':
      return {
        ...state,
        level: state.level + 1,
        attributes: {
          ...state.attributes,
          faith: state.attributes.faith + 1
        },
        stats: {
          ...state.stats,
          mana: state.stats.mana + 1,
          knowledge: state.stats.knowledge + 1,
          luck: state.stats.luck + 1,
        }
      };

    case 'LVL_UP_MYSTIC':
      return {
        ...state,
        level: state.level + 1,
        attributes: {
          ...state.attributes,
          mystic: state.attributes.mystic + 1
        },
        stats: {
          ...state.stats,
          knowledge: state.stats.knowledge + 1,
          luck: state.stats.luck + 1,
        }
      };

    case 'LVL_RESET':
      console.log(initialState);
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
