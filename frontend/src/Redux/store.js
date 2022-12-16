import { legacy_createStore,applyMiddleware , combineReducers,compose} from "redux";
import thunk from "redux-thunk"; 
import { reducer as CompanyAuthReducer } from "./CompanyAuth/Reducer";
import { reducer as StudentAuthReducer } from "./StudentAuthReducer/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({StudentAuthReducer,CompanyAuthReducer})

const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

export {store}