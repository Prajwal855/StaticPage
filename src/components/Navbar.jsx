import "../assets/styles/Main.css";
import react from "../assets/images/react-logo.png";
const NavBar =()=>{
    return(
            <nav>
            <img src={react} className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}

export default NavBar;