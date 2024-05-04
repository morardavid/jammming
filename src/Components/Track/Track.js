import React from "react";
import "../Track/Track.css";

const Track = ({track, isRemovable, onTogglePlaylist}) => {
    const handleTogglePlaylist = () =>{
        if(isRemovable){
            onTogglePlaylist(track,'remove')
        } else{
            onTogglePlaylist(track,'add')
        }
    };
    return(
    <>
         <div className="Track">
            <h3>{track.name}</h3>
            <p>{track.artist} · {track.album}</p>
            <button className="togglePlaylsit" onClick={handleTogglePlaylist}>
                {isRemovable ? '-' : '+'}
            </button>
        </div>
    </>
    );
};
export default Track;