import React from "react";
import ReactDOM from "react-dom";

const ArtistSelector = ({artists=[], onChange=null}) => (
  <select onChange={onChange}>
    <option value={null}>Select an artist...</option>
    {
      artists.map(artist =>
        <option value={artist} key={artist}>
          {artist}
        </option>
      )
    }
  </select>
);

export default ArtistSelector;
