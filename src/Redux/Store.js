import {createStore, applyMiddleware,compose} from "redux"
import reducer from "./reducer"
import thunkMiddleware from "redux-thunk"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta linea nos sirve
// para conectarnos con la exrension del navegador => redux devtools 


const store = createStore (
    reducer,
    composeEnhancer (applyMiddleware(thunkMiddleware)) //esta linea sirve para pododer peticiones a la API
)

export default store