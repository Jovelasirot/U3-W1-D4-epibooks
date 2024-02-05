import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import fantasyData from "./data/fantasy.json";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <div className="App-header">
        <header>
          <CustomNavbar />
        </header>
        <main>
          <Welcome />
          <BookList
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
