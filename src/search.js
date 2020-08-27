import React from "react"


export default function Search(){
    return (
    <div className="Search">
        <input className="Searchbar" type="text" placeholder="Search for a city..." />
        <button className="Searchbutton" type="submit"><i class="fas fa-search-location"></i></button>
        <button className="Searchbutton location"><i class="fas fa-map-marker-alt"></i></button>
    </div>
    )
}