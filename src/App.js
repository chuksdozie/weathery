import logo from "./logo.svg";
import Header from "./components/molecules/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <About /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;
