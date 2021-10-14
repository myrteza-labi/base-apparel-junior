import './Submit.css'; 
import warningLogo from '../images/icon-error.svg'; 
import arrowIcon from '../images/icon-arrow.svg'; 

function Submit(props){
    return (
        <div className="Submit" >

            <input  className="submitInput" name="email" type="email" placeholder="Email Address"/>

            <div className={props.className} >
            </div>
            <button className="submitBtn"><img className="arrowI" src={arrowIcon} alt="icon fleche" /></button>
            
        </div>
    )
}

export default Submit; 

