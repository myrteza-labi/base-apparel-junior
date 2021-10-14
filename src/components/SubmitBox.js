import './SubmitBox.css'; 
import Submit from './Submit'; 


function SubmitBox(props){
    return (
        <form className="SubmitBox" >
            <Submit className={props.wrngCtnClassName}/>
            <p className={props.errorTextClassName} >
                Please provide a valid email
            </p>
        </form>
    )
}

export default SubmitBox; 

/*  warningContainer 

errotText */ 