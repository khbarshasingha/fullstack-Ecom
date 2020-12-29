import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { HomeScreen } from "./Screens/HomeScreen";
function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Container>
        <main className="py-4">
          {/* <h1> Welcome to my Shop</h1> */}
          <HomeScreen />
        </main>
      </Container>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
