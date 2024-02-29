import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
