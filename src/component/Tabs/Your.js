import { useParams } from "react-router-dom";
import Card from "../Card";

let cardData = require("../../models/cardData.json");

const Your = () => {
  let data = cardData.data;
  let { id } = useParams();
  let fData = data.filter((ele) => ele.owner_id === Number(id));

  return (
    <div className="g-container">
      {fData.length > 0 &&
        fData.map((ele, index) => {
          return <Card key={index} cData={ele} />;
        })}
      {fData.length <= 0 && <h2>Not Found</h2>}
    </div>
  );
};

export default Your;
