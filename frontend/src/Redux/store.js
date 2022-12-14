import { legacy_createStore,applyMiddleware , combineReducers,compose} from "redux";
import thunk from "redux-thunk"; 
import { reducer as CompanyAuthReducer } from "./CompanyAuth/Reducer";
import { reducer as StudentAuthReducer } from "./StudentAuthReducer/reducer";
import {reducer as ProfileReducer} from "./CompanyProfile/reducer"
import { reducer as InternShipReducer } from "./InternShipReducer/reducer";
import {reducer as StudentReducer} from "./StudentReducer/reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({StudentAuthReducer,ProfileReducer,StudentReducer,CompanyAuthReducer,InternShipReducer})

const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

export {store}