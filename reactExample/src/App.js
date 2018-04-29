import React from "react";
import ReactDOM from "react-dom";
import ArtistSelector from "./artist-selector";
import SongList from "./song-list";
import LyricsDisplay from "./lyrics-display";

class App extends React.Component {
  constructor(){
    super();
    this.state={
      artist:null,
      song:null,
      data:{},
    }
    this.getData();
  }
  getData = () => {
    fetch("./data/songsByArtists.json")
      .then(r=>r.json())
      .then(r=>{
        this.setState({data: r});
      })
  }
  handleChange = (evt) => {
    this.setState({artist:evt.target.value, song:null});
  }
  handleClick = (evt) => {
    this.setState({song:evt.target.text});
  }
  render() {
    const {artist, song, data} = this.state;
    return (
      <div>
        <header>
          <ArtistSelector artists={Object.keys(data)} onChange={this.handleChange}/>
        </header>
        <SongList songs={artist ? data[artist] : []} onClick={this.handleClick}/>
        <LyricsDisplay artist={artist} song={song}/>
      </div>
    );
  }
}

export default App;
