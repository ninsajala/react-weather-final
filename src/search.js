import React from "react"


export default function Search(){
    return (
    <div className="Search">
        <input className="Searchbar" type="text" placeholder="Search for a city..." />
        <button className="Searchbutton" type="submit" title="Search"><i class="fas fa-search-location"></i></button>
        <button className="Searchbutton location" title="To current location"><i class="fas fa-map-marker-alt"></i></button>
    </div>
    )
}