import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
