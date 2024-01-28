import "./HeroStyles.css";
function Hero(props) {
  return (
    <>
      
      <div className={props.cName}>
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
