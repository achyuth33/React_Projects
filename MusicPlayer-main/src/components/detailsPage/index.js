import Songs from "../listTheSongs";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
//...

import "./index.css";

const DetailsPage = (props) => {
  const { givenData, dataAll, onclickSong, onclickHome } = props;
  const { name, artist, cover, description, source } = givenData;
  const filteredArtistSongs = dataAll.filter((each) => each.artist === artist);
  console.log(filteredArtistSongs);

  return (
    <div className="cont-detail">
      <div className="home-cont">
        <button type="button" className="home-but" onClick={onclickHome}>
          Home
        </button>
      </div>
      <div className="cont-song">
        <img className="song-cover" src={cover} alt={name} />
        <div className="description-cont">
          <h1 className="head-cont">{name}</h1>
          <p className="para-cont">{artist}</p>
          <p className="para-cont">{description}</p>
        </div>
      </div>
      <div>
        <Songs givenData={filteredArtistSongs} onclickSong={onclickSong} />
      </div>
      <div className="audio-play">
        <AudioPlayer
          autoPlay
          src={source}
          showSkipControls={true}
          showJumpControls={true}
          onPlay={(e) => console.log("onPlay")}
        />
      </div>
    </div>
  );
};
export default DetailsPage;
