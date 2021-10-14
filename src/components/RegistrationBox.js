import './RegistrationBox.css'; 
import TextPresentation from './TextPresentation'; 
import SubmitBox from './SubmitBox'; 

function RegistrationBox(props){
    return (
        <section className="RegistrationBox" >
            <TextPresentation/>
            <SubmitBox wrngCtnClassName={"warningContainer"}/>
        </section>
    )
}

export default RegistrationBox; 