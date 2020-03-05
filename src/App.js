import React from "react";
import "./styles.css";
import INCREMENT from "./Increment";
import store from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <INCREMENT />
      </Provider>
    </div>
  );
}
