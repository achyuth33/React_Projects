import { Component } from "react";
// import Loader from 'react-loader-spinner'
import ButtonsGet from "../buttonsGet";
import Responsive from "../sliderForm";
import Songs from "../listTheSongs";
import data from "../songs.json";
import DetailsPage from "../detailsPage";

import "./index.css";

const songFiltersData = [
  { id: "All", filter: "All" },
  { id: "trending", filter: "Trending" },
  { id: "new", filter: "New Release" },
  { id: "favorited", filter: "Favorite" },
];

class MainPage extends Component {
  state = {
    activeTabId: songFiltersData[0].id,
    dataAll: data,
    filterData: [],
    heading: "Top Songs",
    nameFilter: "All",
    trendingData: [],
    inputSearch: "",
    searchedData: [],
    notFound: false,
    details: "All Songs",
    sendSingleData: [],
  };
  componentDidMount() {
    this.dataFilter();
  }
  onclickHome = () => {
    this.setState({ details: "All Songs" });
  };
  onclickSong = (id) => {
    const { dataAll } = this.state;
    const topData = dataAll.filter((each) => each.id === id);
    this.setState({ details: id, sendSingleData: topData[0] });
    console.log(topData[0]);
  };

  onclickButton = (id) => {
    this.setState({ nameFilter: id, activeTabId: id }, this.dataFilter);
  };
  dataFilter = () => {
    const { nameFilter, dataAll } = this.state;
    let num = 0;
    const updatedData = dataAll.map((result) => {
      num = num + 1;
      return {
        id: num,
        ...result,
      };
    });
    this.setState({ dataAll: updatedData });
    if (nameFilter === "All") {
      this.setState({ filterData: updatedData });
      const topData = updatedData.filter((each) => each.trending === true);
      console.log(topData);

      this.setState({ trendingData: topData, heading: "Top Songs" });
    } else {
      const filteredData = updatedData.filter(
        (each) => each[nameFilter] === true
      );
      console.log(filteredData);

      this.setState({ filterData: filteredData });
      this.setState({ trendingData: [], heading: "" });
    }
  };

  getButtons = () => {
    const { activeTabId } = this.state;
    return songFiltersData.map((each) => (
      <ButtonsGet
        key={each.id}
        givenData={each}
        onclickButton={this.onclickButton}
        isActive={activeTabId === each.id}
      />
    ));
  };

  searchName = (event) => {
    const { dataAll } = this.state;
    this.setState({ inputSearch: event.target.value });
    const searchResults = dataAll.filter((each) =>
      each.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    console.log(searchResults);
    const notfound = searchResults.length === 0 ? true : false;
    console.log(notfound);
    this.setState({ searchedData: searchResults, notFound: notfound });
  };

  render() {
    const {
      filterData,
      trendingData,
      searchedData,
      inputSearch,
      notFound,
      heading,
      details,
      sendSingleData,
      dataAll,
    } = this.state;

    console.log(notFound, sendSingleData);
    if (details === "All Songs") {
      return (
        <div className="cont-home">
          <h1 className="head-music">Music Player</h1>
          <div className="input-cont">
            <input
              className="input-search"
              type="search"
              placeholder="Search Songs"
              onChange={this.searchName}
            />
          </div>
          <div>
            {inputSearch === "" && (
              <>
                <div className="cont-but">{this.getButtons()}</div>
                <Responsive
                  givenData={trendingData}
                  heading={heading}
                  onclickSong={this.onclickSong}
                />
                <Songs givenData={filterData} onclickSong={this.onclickSong} />
              </>
            )}
            {notFound && (
              <div className="cont-notFound">
                <h1>NotFound</h1>
              </div>
            )}
            {inputSearch !== "" && (
              <div className="cont-home-main">
                <Songs
                  givenData={searchedData}
                  onclickSong={this.onclickSong}
                />
              </div>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <DetailsPage
          givenData={sendSingleData}
          dataAll={dataAll}
          onclickSong={this.onclickSong}
          onclickHome={this.onclickHome}
        />
      );
    }
  }
}

export default MainPage;
