import StatsOnLevelUp from "../char_specs/StatsOnLevelUp";

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
    hp: 50,
    stamina: 20,
    mana: 10,
    knowledge: 10,
    defense: 10,
    attack: 20,
    luck: 10,
  },
};

export default function char_attributes(state = initialState, action) {
  switch (action.type) {
    case "LVL_UP_VITALITY":
      console.log(state);
      return {
        ...state,
        level: state.level + 1,
        attributes: {
          ...state.attributes,
          vitality: state.attributes.vitality + 1,
        },
        stats: {
          ...state.stats,
          hp: state.stats.hp + StatsOnLevelUp.vitality[state.attributes.vitality + 1].hp,
          defense:
            state.stats.defense +
            StatsOnLevelUp.vitality[state.attributes.vitality + 1].defense,
        },
      };

    case "LVL_UP_ENERGY":
      return {
        ...state,
        level: state.level + 1,
        attributes: {
          ...state.attributes,
          energy: state.attributes.energy + 1,
        },
        stats: {
          ...state.stats,
          stamina:
            state.stats.stamina +
            StatsOnLevelUp.energy[state.attributes.energy + 1].stamina,
          defense:
            state.stats.defense +
            StatsOnLevelUp.energy[state.attributes.energy + 1].defense,
        },
      };

    case "LVL_UP_STRENGTH":
      return {
        ...state,
        level: state.level + 1,
        attributes: {
          ...state.attributes,
          strength: state.attributes.strength + 1,
        },
        stats: {
          ...state.stats,
          hp: state.stats.hp + StatsOnLevelUp.strength[state.attributes.strength + 1].hp,
          attack:
            state.stats.attack +
            StatsOnLevelUp.strength[state.attributes.strength + 1].attack,
        },
      };

    case "LVL_UP_HABILITY":
      return {
        ...state,
        level: state.level + 1,
        attributes: {
          ...state.attributes,
          hability: state.attributes.hability + 1,
        },
        stats: {
          ...state.stats,
          stamina:
            state.stats.stamina +
            StatsOnLevelUp.hability[state.attributes.hability + 1].stamina,
          attack:
            state.stats.attack +
            StatsOnLevelUp.hability[state.attributes.hability + 1].attack,
        },
      };

    case "LVL_UP_INTELLIGENCE":
      return {
        ...state,
        level: state.level + 1,
        attributes: {
          ...state.attributes,
          intelligence: state.attributes.intelligence + 1,
        },
        stats: {
          ...state.stats,
          mana:
            state.stats.mana +
            StatsOnLevelUp.intelligence[state.attributes.intelligence + 1].mana,
          knowledge:
            state.stats.knowledge +
            StatsOnLevelUp.intelligence[state.attributes.intelligence + 1].knowledge,
        },
      };

    case "LVL_UP_FAITH":
      return {
        ...state,
        level: state.level + 1,
        attributes: {
          ...state.attributes,
          faith: state.attributes.faith + 1,
        },
        stats: {
          ...state.stats,
          mana: state.stats.mana + StatsOnLevelUp.faith[state.attributes.faith + 1].mana,
          luck: state.stats.luck + StatsOnLevelUp.faith[state.attributes.faith + 1].luck,
        },
      };

    case "LVL_UP_MYSTIC":
      return {
        ...state,
        level: state.level + 1,
        attributes: {
          ...state.attributes,
          mystic: state.attributes.mystic + 1,
        },
        stats: {
          ...state.stats,
          knowledge:
            state.stats.knowledge +
            StatsOnLevelUp.mystic[state.attributes.mystic + 1].knowledge,
          luck: state.stats.luck + StatsOnLevelUp.mystic[state.attributes.mystic + 1].luck,
        },
      };

    case "CHOOSE_CLASS":
      return {
        ...state,
        class: action.class,
      };

    case "LVL_RESET":
      console.log(initialState);
      return {
        ...initialState,
      };

    default:
      return state;
  }
}
