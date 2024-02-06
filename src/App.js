import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import fantasyData from "./data/fantasy.json";
import BookList from "./components/BookList";
import { useState } from "react";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className="App-header">
        <header>
          <CustomNavbar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </header>
        <main>
          <Welcome />
          <BookList
            allFantasy={fantasyData}
            partTittle={fantasyData[0].category.toUpperCase()}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </main>
      </div>

      <footer>
        <MyFooter />
      </footer>
    </>
  );
};

export default App;
