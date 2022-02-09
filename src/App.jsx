import React from "react";
import Rotas from "./routes";
import { Provider } from "react-redux";
import reducer from "./store";
import { createStore } from 'redux';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Rotas />
    </Provider>
  );
}

export default App;
