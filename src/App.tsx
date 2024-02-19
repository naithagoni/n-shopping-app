import Navbar from "./components/Navbar/Navbar";
import Products from "./pages/Products/Products";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16 pl-6 pr-6 pb-6">
        <Products />
      </div>
    </>
  );
}

export default App;
