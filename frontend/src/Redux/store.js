import { legacy_createStore,applyMiddleware , combineReducers,compose} from "redux";
import thunk from "redux-thunk"; 
import { reducer as CompanyAuthReducer } from "./CompanyAuth/Reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({CompanyAuthReducer})

const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

export {store}