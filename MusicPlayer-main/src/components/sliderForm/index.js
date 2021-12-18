import { Component } from "react";
import Slider from "react-slick";

import "./index.css";

class Responsive extends Component {
  imgContainer = (dataList) => {
    const { onclickSong } = this.props;
    return dataList.map((each) => {
      const clickSong = () => {
        onclickSong(each.id);
      };
      return (
        <div key={each.name} className="cont-size" onClick={clickSong}>
          <img
            className="picture"
            id={each.name}
            src={`${each.cover}`}
            alt={each.name}
          />
          <h1 className="heading-songs-slide">{each.name}</h1>
        </div>
      );
    });
  };

  render() {
    const { givenData, heading } = this.props;

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
    };

    return (
      <div className="container">
        <h2> {heading} </h2>
        <div style={{ width: "90%" }}>
          <Slider {...settings}>{this.imgContainer(givenData)}</Slider>
        </div>
      </div>
    );
  }
}

export default Responsive;
