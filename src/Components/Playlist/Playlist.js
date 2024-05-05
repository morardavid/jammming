import React, { useState, useCallback } from "react";
import Button from "../Button/Button";

const Playlist = () => {
    const [playlistName, setPlaylistName] = useState('');

    const handleSave = () => {
        console.log('Save To Spotify');
    };
    const handleChangeName = useCallback((event) => {
        setPlaylistName(event.target.value);
    }, []);

    return (
        <div className="Playlist">
            <input 
                type="text"
                value={playlistName}
                onChange={handleChangeName} 
                placeholder="Name it or loose it" 
            />
            <Button className="SaveToSpotify" onClick={handleSave}>Save To Spotify</Button>
        </div>
    );
};

export default Playlist
