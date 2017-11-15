import { combineReducers } from 'redux'
import { browserReducer } from 'react-router-redux'

export default combineReducers({
	routing: browserReducer
})