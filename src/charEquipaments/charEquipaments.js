import { MD5 } from '../utils/GenerateHashes'

const charEquipaments = {
  warrior: {
    helm: {
      key: MD5('Horned Helmet'),
      name: 'Horned Helmet',
      slot: 'helm',
      type: 'lightArmor',
      bonus: {
        defense: 10
      }
    },
    armor: {
      key: MD5('Rusty Armor'),
      name: 'Rusty Armor',
      slot: 'armor',
      type: 'lightArmor',
      bonus: {
        defense: 15,
        hp: 15
      }
    },
    legging: {

      key: MD5('Rusty Leggings'),
      name: 'Rusty Leggings',
      slot: 'legging',
      type: 'lightArmor',
      bonus: {
        defense: 10,
        hp: 5
      }
    },
    gloves: {
      key: MD5('Rusty Gauntlets'),
      name: 'Rusty Gauntlets',
      slot: 'gloves',
      type: 'lightArmor',
      bonus: {
        stamina: 5,
        hp: 5
      }
    },
    boots: {
      key: MD5('Rusty Boots'),
      name: 'Rusty Boots',
      slot: 'boots',
      type: 'lightArmor',
      bonus: {
        stamina: 5,
        defense: 5
      }
    },
    Shortsword: {
      key: MD5('Shortsword'),
      name: 'Shortsword',
      slot: 'rightHand',
      type: 'lightArmor',
      bonus: {
        stamina: 5,
        defense: 5
      }
    }
  }
}

export default charEquipaments
