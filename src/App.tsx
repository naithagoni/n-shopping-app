import Navbar from "./components/Navbar/Navbar";
import Products from "./pages/Products/Products";
// import Home from "./pages/Home/Home";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Products />
        {/* <Home /> */}
      </main>
    </>
  );
}

export default App;
