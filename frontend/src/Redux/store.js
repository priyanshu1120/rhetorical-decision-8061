import { legacy_createStore,applyMiddleware , combineReducers,compose} from "redux";
import thunk from "redux-thunk"; 
import {reducer as StudentAuthReducer} from "./StudentAuthReducer/reducer"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({StudentAuthReducer})

const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

export {store}