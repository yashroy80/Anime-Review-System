import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  StyledHeading,
  StyledHomePage,
  StyledSeacrhBox,
} from "./HomePage.style";
import ResultPage from "./result-page/ResultPage";

const searchOptions = ["Title", "Genre", "Description"];

function HomePage() {
  const [animeData, setAnimeData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(searchOptions[0]);
  const [searchInput, setSearchInput] = useState();
  const [resultItems, setResultItems] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = (await axios.get("https://api.aniapi.com/v1/anime/")).data
          .data;
        console.log("data", data);
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
      setResultItems(data);
    }
  };
  return (
    <StyledHomePage>
      <StyledSeacrhBox>
        <StyledHeading>Search Anime</StyledHeading>
        <div className="input-group">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            className="form-control"
            aria-label="Text input with dropdown button"
          />
          <div class="input-group-append">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
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
      {<ResultPage
        resultItems={resultItems}
        searchInput={searchInput}
      ></ResultPage>}
    </StyledHomePage>
  );
}

export default HomePage;
