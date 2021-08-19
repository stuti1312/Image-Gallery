import React, { useState } from "react";
import DataFetch from "./DataFetch";
import "./SearchImage.css";

export default function SearchImage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [passTerm, setpassTerm] = useState("Mountain");

  // storing the API into variable, so as to use API at multiple places without writing the whole Api again and again
  const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${passTerm}&per_page=24&format=json&nojsoncallback=1`;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (searchTerm !== "") {
      setpassTerm(searchTerm);
    }
    console.log("searchTerm", searchTerm);
    console.log("passTerm", passTerm);
  };

  return (
    <div>
      <div>
        <h1>WELCOME to SNAPSHOT</h1>
      </div>

      <form onSubmit={handleSubmit} className="searchBar">
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button type="submit" className="submitBtn">
            {/* Using font awesome class to get search icon */}
            <i class="fas fa-search"></i>
          </button>
        </div>
      </form>

      <div className="all-btn">
        <button
          type="button"
          className="btn-M"
          onClick={(e) => setSearchTerm("Mountain")}
        >
          Mountain
        </button>

        <button
          type="button"
          className="btn-Be"
          onClick={(e) => setSearchTerm("Beach")}
        >
          Beach
        </button>

        <button
          type="button"
          className="btn-Bi"
          onClick={(e) => setSearchTerm("Bird")}
        >
          Bird
        </button>

        <button
          type="button"
          className="btn-F"
          onClick={(e) => setSearchTerm("Food")}
        >
          Food
        </button>
      </div>

      <h2> {passTerm} Images </h2>

      <div>
        <DataFetch url={url}/>
      </div>
    </div>
  );
}
