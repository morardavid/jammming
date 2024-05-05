import React, { useState, useCallback } from "react";
import Button from "../Button/Button";

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        console.log('Search in Spotify')
      };

    const handleChange = useCallback((event) => {
        setSearchText(event.target.value);
    }, []);

    return (
        <>
            <div className="SearchBar">
             <input 
                type="Text"
                value={searchText}
                onChange={handleChange}
                placeholder="Your research starts here"
             />
                <Button className="Search" onClick={handleSearch}>
                    Search
                </Button>
            </div>
        </>
    );
};

export default SearchBar;
