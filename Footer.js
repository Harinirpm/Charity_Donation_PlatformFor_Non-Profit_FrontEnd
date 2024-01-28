import "./FooterStyles.css";
// import FooterData from "../FooterData";
function Footer(){
    return(
<>
<div className="footer">
<div className="top">
<div>
    <h1>Feedback</h1>
</div>
<div>
    <a href="/">
        <i className="fa-brands fa-facebook-square"></i>
    </a>
    <a href="/">
        <i className="fa-brands fa-instagram-square"></i>
    </a>
    <a href="/">
        <i className="fa-brands fa-twitter-square"></i>
    </a>
</div>
</div>

<div className="bottom">
    <div>
<h4>Visit</h4>
<a href="/about">About</a>
<a href="/service">Serivce</a>
<a href="/contact">Contact</a>
</div>

<div>
<h4>Project</h4>
<a href="/">Status</a>
<a href="/">License</a>
<a href="/">All Versions</a>
</div>

<div>
<h4>Community</h4>
<a href="/">Github</a>
<a href="/">Issues</a>
<a href="/">Twitter</a>
</div>

<div>
<h4>Help</h4>
<a href="/">Support</a>
<a href="/">Troubleshooting</a>
<a href="/">Contact Us</a>
</div>
</div>
{/* <FooterData    


/> */}
</div>

</>


    )
}
export default Footer;