import './Submit.css'; 
import warningLogo from '../images/icon-error.svg'; 

function Submit(props){
    return (
        <div className="Submit" >

            <input  className="submitInput" name="email" type="email"/>

            <div className={props.className} >
            </div>
            <input className="submitBtn" type="submit" value={"click"}/>

        </div>
    )
}

export default Submit; 

