import React from "react";
import TrackList from "../TrackList/TrackList";

const SearchResults = ({tracks, onAddToPlaylist}) => {
    return (
        <>
        <div className="SearchResult">
            <h2 className="Results">Results</h2>
            <TrackList tracks={tracks} onAddToPlaylist={onAddToPlaylist}/>
        </div>
        </>
    );
};
export default SearchResults;