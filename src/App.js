import "./App.css";
import Card from "./components/box-quote/index.jsx";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <h1> Generate quote</h1>
      <div>
        <Card />
        <Footer />
      </div>
    </div>
  );
}

export default App;
