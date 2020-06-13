import { combineReducers } from 'redux'
import charAttributes from './attributesReducer'
import chakra from './chakraReducer'
import equipament from './equipamentReducer'

const rootReducer = combineReducers({ charAttributes, chakra, equipament })

export default rootReducer
