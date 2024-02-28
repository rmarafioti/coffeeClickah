import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./store/store";
import CoffeeCount from "./features/CoffeeCount";
import CoffeeList from "./features/CoffeeList";
import CoffeeProducer from "./features/CoffeeProducer";
import CoffeeSecCount from "./features/CoffeeSecCount";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <CoffeeCount />
      <CoffeeSecCount />
      <CoffeeList />
      <CoffeeProducer />
    </Provider>
  </React.StrictMode>
);
