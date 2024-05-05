import React,{} from "react";
import "../Track/Track.css";

const Track = ({track}) => {
    

    return(
    <>  
        <div className="Track">
            <div className="Track-Info">
                <h3>{track.name}</h3>
                <p>{track.artist} · {track.album}</p>
            </div>
            
        </div>
    </>
    );
};
export default Track;