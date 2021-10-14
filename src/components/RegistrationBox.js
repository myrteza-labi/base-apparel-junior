import './RegistrationBox.css'; 
import TextPresentation from './TextPresentation'; 
import SubmitBox from './SubmitBox'; 

function RegistrationBox(props){
    let txtErr = "textError"; 
    let txtErrActive = "textErrorActiv"
    let wrngCtn = "warningContainer"; 
    let wrngCtnActive = "warningContainerActive"; 
    return (
        <section className="RegistrationBox" >
            <TextPresentation/>
            <SubmitBox errorTextClassName={"textErrorActiv"} wrngCtnClassName={"warningContainerActive"}/>
        </section>
    )
}

export default RegistrationBox; 