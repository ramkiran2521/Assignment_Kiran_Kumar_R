import "./Card.css";

const Card = (props) => {
  let isburner = false;
  if(props.cData.card_type === "burner"){
    isburner = true;
  }
  return (
    <div className="card" style={isburner ? {"backgroundColor":"#e1bfe5"}:{"backgroundColor":"#a9c8d1"}}>
      <div>{props.cData.card_type}</div>
      <p>Name : {props.cData.name}</p>
      {props.cData.card_type === "burner" && (
        <p>Expiry date : {props.cData.expiry}</p>
      )}
      {props.cData.card_type === "subscription" && (
        <p>Limit : {props.cData.limit}</p>
      )}
    </div>
  );
};

export default Card;
