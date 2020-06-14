import { combineReducers } from 'redux'
import charAttributes from './attributesReducer'
import chakra from './chakraReducer'
import equipament from './equipamentReducer'
import items from './itemsReducer'

const rootReducer = combineReducers({ charAttributes, chakra, equipament, items })

export default rootReducer
