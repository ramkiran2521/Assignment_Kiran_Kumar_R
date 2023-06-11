import Card from "../Card";

let cardData = require("../../models/cardData.json");

const BLocked = () => {
  let data = cardData.data;

  return (
    <div className="g-container">
      {data
        .filter((ele) => ele.status === "blocked")
        .map((ele, index) => {
          return <Card key={index} cData={ele} />;
        })}
    </div>
  );
};

export default BLocked;
