import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "@/components/Navbar/Navbar";
import { Store } from "./redux/store";
import "./App.scss";

function App() {
  return (
    <>
      <Provider store={Store}>
        <div className="layout">
          <div className="nav">
            <Navbar />
          </div>
          <div className="content px-6 pt-16 pb-16">
            <Outlet />
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
