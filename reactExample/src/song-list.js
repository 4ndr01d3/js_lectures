import React from "react";
import ReactDOM from "react-dom";

const SongList = ({songs=[], onClick=null}) => (
  <React.Fragment>
    {
      songs.map(song =>
        <div key={song}>
          <a onClick={onClick}>{song}</a>
        </div>
      )
    }
  </React.Fragment>
);

export default SongList;
