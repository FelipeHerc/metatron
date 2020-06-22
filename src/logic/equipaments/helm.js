import { MD5 } from '../../utils/GenerateHashes'

const helm = {
  'Horned Helmet': {
    key: MD5('Horned Helmet'),
    name: 'Horned Helmet',
    slot: 'helm',
    type: 'lightArmor',
    bonus: {
      defense: 10
    }
  }
}

export default helm
