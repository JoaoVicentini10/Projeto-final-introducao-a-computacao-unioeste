import "./App.css";
import Footer from "./componentes/Footer";
import NavBar from "./componentes/NavBar";
import Content from "./layout/Content";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Content />
      <Footer />
    </Router>
  );
}

export default App;
