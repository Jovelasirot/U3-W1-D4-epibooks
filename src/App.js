import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import fantasyData from "./data/fantasy.json";
import CardList from "./components/CardList";

function App() {
  return (
    <>
      <div className="App-header">
        <header>
          <CustomNavbar />
        </header>
        <main>
          <Welcome />
          <CardList
            allFantasy={fantasyData}
            partTittle={fantasyData[0].category.toUpperCase()}
          />
        </main>
      </div>

      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
