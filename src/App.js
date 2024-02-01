import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import fantasyData from "./data/fantasy.json";
import CardList from "./components/CardList";

// const oneBook = fantasyData[Math.floor(Math.random() * fantasyData.length)];

function App() {
  return (
    <>
      <header>
        <CustomNavbar />
      </header>
      <main className="App-header">
        <Welcome />
        <CardList allFantasy={fantasyData} partTittle="Fantasy" />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
