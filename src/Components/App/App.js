import React, {useState} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

const App = () => {
  const trackSample = [
      {id:1, name: 'song 1', artist:'artist 1', album:'ablum 1'},
      {id:2, name:'song 2', artist:'artist 2', album:'album 2'},
  ];

  const [playlistTracks, setPlaylistTracks] = useState([]);
  const addToPlaylist = track => {
    setPlaylistTracks(prevTracks => [...prevTracks, track]);
  };
  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
      </header>
      <SearchBar/>
      <SearchResults tracks={trackSample} onAddToPlaylist={addToPlaylist} />
      <Playlist
      tracks={playlistTracks} />
    </div>
    </>
  );
};

export default App;
