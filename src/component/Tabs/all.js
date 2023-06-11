import './all.css'
import { useState } from "react";
import Card from "../Card";

let cardData = require("../../models/cardData.json");

const All = () => {
  let data = cardData.data;

  const [filteredData, setFilterdData] = useState(data);
  const [isfound, setisFound] = useState(true);

  const selectHandlerFunction = (e) => {
    if (e.target.value === "All") {
      setFilterdData(data);
    } else {
      let f = data.filter((ele) => ele.card_type === e.target.value);
      setFilterdData(f);
    }
  };

  const searchHandler = (e) => {
    e.preventDefault();
    setisFound(true);

    let searchValue = e.target[0].value;
    if (searchValue) {
      let searchIndex = data.findIndex(
        (ele) => ele.name.toLowerCase() === searchValue.toLowerCase()
      );

      if (searchIndex > -1) {
        setFilterdData([data[searchIndex]]);
      } else {
        setisFound(false);
      }
    } else {
      setFilterdData(data);
    }
  };

  return (
    <div className="container">
      <div className="search-sec">
        <select onChange={selectHandlerFunction}>
          <option>All</option>
          <option>burner</option>
          <option>subscription</option>
        </select>
        <form onSubmit={searchHandler}>
          <input
            type="text"
            maxLength="50"
            placeholder="SearchByName"
          ></input>
          <button type="submit">Search</button>
        </form>
        {!isfound && <h3>Not found</h3>}
      </div>
      <div className="cards-container">
        {filteredData.map((ele, index) => {
          return <Card key={index} cData={ele} />;
        })}
      </div>
    </div>
  );
};

export default All;
