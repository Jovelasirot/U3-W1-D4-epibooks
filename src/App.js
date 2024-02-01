import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import CustomCard from "./components/CustomCard";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import SingleBook from "./components/SingleBook";
import fantasyData from "./data/fantasy.json";
import BookList from "./components/BookList";

const oneBook = fantasyData[Math.floor(Math.random() * fantasyData.length)];

function App() {
  return (
    <>
      <header>
        <CustomNavbar />
      </header>
      <main className="App-header">
        <Welcome />
        <SingleBook singleBook={oneBook} bookCategory="Fantasy" />
        <BookList allFantasy={fantasyData} />
        <CustomCard titlePart="Fantasy Books" />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
