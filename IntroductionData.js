import "./Introduction.css";
// import {Components} from "react";
/* The line `import card2Img from "../images/card1Img.jpg";` is importing an image file named
"card1Img.jpg" from the "../images" directory. The imported image can be used in the component for
displaying the image. */
// import card2Img from "../images/card1Img.jpg";
// import Introduction from "../components/Introduction";
function IntroductionData(props) {
    
        return(
        <>
         <div className="first-card">

        <div className={props.className}>
            <div className="contText">
                <h2>{props.heading}</h2>
                <br></br>
                <p>{props.Text}
                </p>
           
            </div>
            <div className="image">
                <img alt="img" src={props.contImg}/>
                </div>
        </div>
        
        </div>
            
            </>
   ) 


}
export default IntroductionData;