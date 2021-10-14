import './Logo.css'; 
import logo from '../images/logo.svg'; 

function Logo(props){
    return (
        <div className="Logo" >
            <img className="imgLogo" src={logo} alt="logo base apparel" />
        </div>
    )
}

export default Logo; 