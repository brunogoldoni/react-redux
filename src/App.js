import React from "react";
import { Provider } from "react-redux";

import SideBar from "./components/Sidebar";
import Video from "./components/Video";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Video />
      <SideBar />
    </Provider>
  );
}

export default App;
