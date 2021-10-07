import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  StyledHeading,
  StyledHomePage,
  StyledSeacrhBox,
} from "./HomePage.style";
import ResultPage from "./result-page/ResultPage";

const searchOptions = ["Title", "Genre", "Description"];

function HomePage(props) {
  const [animeData, setAnimeData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(searchOptions[0]);
  const [searchInput, setSearchInput] = useState();
  const [resultItems, setResultItems] = useState([]);
  const [searchClick, setSearchlick] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = (await axios.get("https://api.aniapi.com/v1/anime/")).data
          .data;
        console.log(data.documents);
        setAnimeData(data.documents);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const searchHandler = () => {
    if (searchInput) {
      const data = animeData.filter((item) => {
        if (selectedOption === searchOptions[0]) {
          return item.titles.en
            .toLowerCase()
            .includes(searchInput.toLowerCase());
        }
        if (selectedOption === searchOptions[1]) {
          let flag = false;
          item.genres.forEach((i) => {
            if (i.toLowerCase() === searchInput.toLowerCase()) {
              flag = true;
            }
          });
          return flag;
        }
        if (selectedOption === searchOptions[2]) {
          return item.descriptions.en
            .toLowerCase()
            .includes(searchInput.toLowerCase());
        }
        return false;
      });
      setSearchlick(true);
      setResultItems(data);
    } else {
      alert("Empty Seacrh Box!");
    }
  };
  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
    props.setIsLoggedIn(false);
  };
  return (
    <StyledHomePage>
      <StyledSeacrhBox className="search-box">
        <button className="btn btn-danger logout-btn" onClick={logoutHandler}>
          Log Out
        </button>
        <div className="input-group search-bar">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            placeholder="Search Anime..."
            className="form-control"
            aria-label="Text input with dropdown button"
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary btn-outline-primary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {selectedOption}
            </button>
            <div className="dropdown-menu">
              {searchOptions.map((item) => {
                return (
                  <span
                    key={item}
                    className="dropdown-item"
                    onClick={() => {
                      setSelectedOption(item);
                    }}
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <button className="btn btn-primary search-btn" onClick={searchHandler}>
          Search
        </button>
      </StyledSeacrhBox>
      {searchClick && (
        <ResultPage
          resultItems={resultItems}
          searchInput={searchInput}
        ></ResultPage>
      )}
    </StyledHomePage>
  );
}

export default HomePage;
