import OrgCard from "../components/OrgCard";
import "./OrgCardStyles.css";

function OrgCardData(props) {
  return (
    <>
      <div className={props.card}>
        <h2>{props.heading}</h2>
        <br></br><br></br>
        <div className={props.image}>
          <img src={props.cardImg} alt="img" />
        </div>

        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass1}>
          {props.buttonText1}
        </a>
      </div>
    </>
  );
}
export default OrgCardData;
