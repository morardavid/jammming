import React from "react";
import TrackList from "../TrackList/TrackList";

const SearchResults = ({tracks}) => {
    return (
        <>
        <div className="SearchResult">
            <h2 className="Results">Results</h2>
            <TrackList tracks={tracks}/>
        </div>
        </>
    );
};
export default SearchResults;