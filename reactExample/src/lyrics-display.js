import React from "react";
import ReactDOM from "react-dom";

const api = "https://api.lyrics.ovh/v1";

const STATUS = {
  LOADING: 0,
  READY: 1,
  FAILED: -1,
  EMPTY: -2,
}
class LyricsDisplay extends React.Component {
  constructor(){
    super();
    this.state = {
      status: STATUS.EMPTY,
      text: null,
    }
  }
  render(){
    const {artist, song} = this.props;
    const {status, text} = this.state;
    return (
      <section className="lyrics">
        <header>
          {song} by {artist}
        </header>
        <div>
          {status===STATUS.EMPTY && ''}
          {status===STATUS.LOADING && 'Loading...'}
          {status===STATUS.FAILED && 'ERROR: There was aproblem loading your file'}
          {status===STATUS.READY && <pre>{text}</pre>}
        </div>
      </section>
    );
  }
  componentDidMount() {
    const {artist, song} = this.props;
    this._uploadLyrics(artist, song);
  }
  componentDidUpdate(prevProps) {
    const {artist, song} = this.props;
    const {artist:oldArtist, song:oldSong} = prevProps;
    if (artist!==oldArtist || song!==oldSong)
      this._uploadLyrics(artist, song);
  }
  _uploadLyrics = (artist, song)=> {
    if (artist && song) {
      fetch(`${api}/${artist}/${song}/`)
        .then(r=>{
          if (!r.ok) throw Error(response.statusText);
          return r.json();
        })
        .then(r=>{
          this.setState({status:STATUS.READY, text:r.lyrics});
        })
        .catch(r=>{
          this.setState({status:STATUS.FAILED});
        });
    }else if(!song){
      this.setState({status:STATUS.EMPTY});
    }
  }
}

export default LyricsDisplay;
