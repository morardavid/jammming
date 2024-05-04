import React, { useState, useCallback } from "react";
import Button from "../Button/Button";

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        console.log('Search in Spotify')
      }

    const handleChange = useCallback((event) => {
        setSearchText(event.target.value);
    }, []);

    return (
        <>
            <div className="SearchBar">
             <input 
                value={searchText}
                onChange={handleChange}
             />
                <Button className="Search" onClick={handleSearch}>
                    Search
                </Button>
            </div>
        </>
    );
};

export default SearchBar;
