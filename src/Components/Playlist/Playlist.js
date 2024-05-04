import React, { useState } from "react";
import TrackList from "../TrackList/TrackList";
import Button from "../Button/Button";

const Playlist = ({ searchResults, playlistTracks, onAddToPlaylist }) => {
    const [playlistName, setPlaylistName] = useState("Name it or you lose it");

    const handleChangeName = (event) => {
        setPlaylistName(event.target.value);
    };

    const handleSaveToSpotify = () => {
        console.log('Save To Spotify');
    };

    const filteredSearchResults = searchResults && searchResults.filter(track => 
        !playlistTracks.some(playlistTrack => playlistTrack.id === track.id));

    return (
        <div className="Playlist">
            <input 
                type="text"
                onChange={handleChangeName} 
                defaultValue="Name it or you lose it" 
                value={playlistName}
            />
            <TrackList tracks={filteredSearchResults} onAddToPlaylist={onAddToPlaylist} />
            <Button className="SaveToSpotify" onClick={handleSaveToSpotify}>Save To Spotify</Button>
        </div>
    );
};

export default Playlist;
