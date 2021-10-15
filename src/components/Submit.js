import './Submit.css'; 
import arrowIcon from '../images/icon-arrow.svg'; 

function Submit(props){
    
    return (
        <div className={props.className} >

            <input id="inputEmail" onChange={props.onChange} className="submitInput" name="email" type="email" placeholder="Email Address" />

            <div id="warningContainer" className={props.wrnCtnClassName} >
            </div>

            <button className="submitBtn" onClick={props.handleBtnClick}>
                <img className="arrow" src={arrowIcon} alt="icon fleche" />
            </button>
            
        </div>
    )
}

export default Submit; 

