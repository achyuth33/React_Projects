import { Component } from "react";

import "./index.css";

class Songs extends Component {
  imgContainer = (dataList) => {
    const { onclickSong } = this.props;
    return dataList.map((each) => {
      const clickSong = () => {
        onclickSong(each.id);
      };
      return (
        <div
          onClick={clickSong}
          key={each.id}
          style={{
            backgroundImage: `url(${each.cover})`,
            backgroundSize: "auto",
          }}
          className="cont-size"
        >
          <h1 className="heading-songs">{each.name}</h1>
        </div>
      );
    });
  };

  render() {
    const { givenData } = this.props;

    return <div className="cont-pop">{this.imgContainer(givenData)}</div>;
  }
}

export default Songs;
