import { combineReducers } from "redux";
import ReducerUsuario from "./reducers/ReducerUsuario";
import ReducerCarrinho from "./reducers/ReducerCarrinho";

export default combineReducers({
  ReducerUsuario,
  ReducerCarrinho,
});
