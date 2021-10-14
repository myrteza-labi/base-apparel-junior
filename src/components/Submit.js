import './Submit.css'; 
import warningLogo from '../images/icon-error.svg'; 

function Submit(props){
    return (
        <div className="Submit" >

            <input  className="submitInput" name="email" type="email" placeholder="Email Adress"/>

            <div className="warningContainer" >
                <img className="warningImg" src={warningLogo} alt={"icon attention"} />
            </div>
            <input className="submitBtn" type="submit" value={"click"}/>

        </div>
    )
}

export default Submit; 