import Navbar from "./components/Navbar/Navbar";
import Products from "./pages/Products/Products";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "1.5rem" }}>
        <Products />
      </div>
    </>
  );
}

export default App;
