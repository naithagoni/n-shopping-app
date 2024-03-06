import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import { cartStore } from "./redux/cartStore";
import "./App.scss";

function App() {
  return (
    <>
      <Provider store={cartStore}>
        <Navbar />
        <main className="px-6 pt-20 pb-16">
          <Outlet />
        </main>
      </Provider>
    </>
  );
}

export default App;
