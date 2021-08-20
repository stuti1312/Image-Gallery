import React, { useState, useEffect } from "react";
import "./DataFetch.css";

export default function DataFetch(props) {
  //here props is taking url from another component
  const [apidata, setapiData] = useState(null); // null because we dont know the data type

  // fetching data from API using fetch()
  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json()) // converting into json- extra step in fetch()
      .then((data) => setapiData(data.photos.photo));
  }, [props.url]); // to update the changes we pass changed data here

  if (apidata) {
    var url = apidata.map((e) => (
      // Generating the image URL
      <img
        src={`https://farm${e.farm}.staticflickr.com/${e.server}/${e.id}_${e.secret}_m.jpg`}
        key={e.id}
        alt="IMAGES"
      />
    ));
  }

  // console.log("apidata", apidata);
  // console.log("url", url);

  return (
    <div>
      <div className="imageStyle">{url}</div>
    </div>
  );
}
