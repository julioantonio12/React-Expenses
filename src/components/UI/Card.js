import "./Card.css";

const Card = (props) => {
  //props.className contains the classes from the children
  const classes = "card " + props.className;
  return (
    //props.children is the content of the card (between the open and close tag).
    <div className={classes}>{props.children}</div> 
  );
}

export default Card;