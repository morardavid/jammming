import React from "react";
import Track from "../Track/Track";

const Playlist = () => {
    const handleSave =() => {
        
        console.log('Add Playlist to Spotify')
      }
    return (
        <>
        <div className="Playlist">
            <input onChange={handleChangeName} defaultValue={"Name it or you loose it"}/>
                <Track/>
        </div>
        </>
    );
};
export default Playlist;