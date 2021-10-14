import './SubmitBox.css'; 

function SubmitBox(props){
    return (
        <form className="SubmitBox" >
            
            <p className="errorText" >
                Please provide a valid email
            </p>
        </form>
    )
}

export default SubmitBox; 