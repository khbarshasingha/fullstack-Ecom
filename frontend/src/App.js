import "./App.css";
import { Container } from "react-bootstrap";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { HomeScreen } from "./Screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ProductScreen } from "./Screens/ProductScreen";

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <Container>
        <main className="py-4">
          {/* <h1> Welcome to my Shop</h1> */}
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
        </main>
      </Container>

      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
