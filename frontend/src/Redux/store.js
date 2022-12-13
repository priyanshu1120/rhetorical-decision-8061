import { legacy_createStore,applyMiddleware , combineReducers,compose} from "redux";
import thunk from "redux-thunk"; 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({})

const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

export {store}