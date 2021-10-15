import './Submit.css'; 
import arrowIcon from '../images/icon-arrow.svg'; 

function Submit(props){
    
    return (
        <div className="Submit" >

            <input /*a reetirer*/ id="inputEmail" onChange={props.onChange} className="submitInput" name="email" type="email" placeholder="Email Address" />

            <div className={props.className} >
            </div>

            <button className="submitBtn" onClick={props.handleBtnClick}>
                <img className="arrowI" src={arrowIcon} alt="icon fleche" />
            </button>
            
        </div>
    )
}

export default Submit; 

