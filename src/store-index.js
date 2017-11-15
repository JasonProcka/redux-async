import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'

export const history = createHistory() // We're keeping track of our react-router history with redux

const initialState = {} // Empty object, as your initial state is always empty
const enhancers = [] // Will have devToolsExtension pushed to if in dev
const middleware = [
	thunk,
	routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
	const devToolsExtension = window.devToolsExtension

	if (typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension)
	}
}

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
)

const store = createStore( // In this example, our createStore function takes an initial state, the root reducer, and composed enhancers
	initialState,
	rootReducer,
	composedEnhancers
)

export default store // We'll need to export our store as the default module to be used later