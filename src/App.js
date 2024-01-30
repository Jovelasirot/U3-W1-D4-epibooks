import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import CustomCard from "./components/CustomCard";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <header>
        <CustomNavbar />
      </header>
      <main className="App-header">
        <Welcome />
        <CustomCard titlePart="Fantasy Books" />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
