import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import MyFooter from "./components/MyFooter";
import fantasyData from "./data/fantasy.json";
import horrorData from "./data/horror.json";
import historyData from "./data/history.json";
import romanceData from "./data/romance.json";
import scifiData from "./data/scifi.json";
import BookList from "./components/BookList";
import { useState } from "react";
import Home from "./components/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <>
        <div className="d-flex flex-column vh-100">
          <header>
            <CustomNavbar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </header>
          <main className="flex-grow-1">
            <Routes>
              <Route element={<Home />} path="/" />
              <Route
                element={
                  <BookList
                    allFantasy={fantasyData}
                    partTittle={fantasyData[0].category.toUpperCase()}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                  />
                }
                path="Fantasy"
              />
              <Route
                element={
                  <BookList
                    allFantasy={horrorData}
                    partTittle={horrorData[0].category.toUpperCase()}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                  />
                }
                path="Horror"
              />
              <Route
                element={
                  <BookList
                    allFantasy={historyData}
                    partTittle={historyData[0].category.toUpperCase()}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                  />
                }
                path="History"
              />
              <Route
                element={
                  <BookList
                    allFantasy={romanceData}
                    partTittle={romanceData[0].category.toUpperCase()}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                  />
                }
                path="Romance"
              />
              <Route
                element={
                  <BookList
                    allFantasy={scifiData}
                    partTittle={scifiData[0].category.toUpperCase()}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                  />
                }
                path="Scifi"
              />
            </Routes>
          </main>
        </div>

        <footer>
          <MyFooter />
        </footer>
      </>
    </BrowserRouter>
  );
};

export default App;
