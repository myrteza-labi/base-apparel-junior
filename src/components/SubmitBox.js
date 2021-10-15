import './SubmitBox.css'; 
import Submit from './Submit'; 
import React from 'react';




class SubmitBox extends React.Component{
    constructor(props){
        super(props); 
        this.state = { 
            errorTextClassName : "textError",
            wrngCtnClassName: "warningContainer",
            submitClassName : "Submit",
            email: "",
        }
        this.handleClick = this.handleClick.bind(this); 
        this.onChange = this.onChange.bind(this);  
        this.checkEmail = this.checkEmail.bind(this); 
        this.displayErrorUi = this.displayErrorUi.bind(this);
        this.removeErrorUi = this.removeErrorUi.bind(this); 
        this.displayWarningBox = this.displayWarningBox.bind(this);
        this.removeWarningBox = this.removeWarningBox.bind(this);
        this.displayTextError = this.displayTextError.bind(this); 
        this.removeTextError = this.removeTextError.bind(this); 
        this.displaySubmitBorderError = this.displaySubmitBorderError.bind(this); 
        this.removeSubmitBorderError = this.removeSubmitBorderError.bind(this); 
    }

    onChange(){
        let input = document.getElementById('inputEmail'); 
        let value = input.value; 
        this.setState({
            email : value,
        })
        if(this.checkEmail() === true){
            this.removeErrorUi(); 
        } 
        else {
            return
        }
    }

    handleClick(){
        if(this.checkEmail() === true){
            this.removeErrorUi(); 
        } 
        else {
            this.displayErrorUi(); 
        }
    }
    

    /*  This function indicate us if the patern of the input email 
    write bye the user is correct
    */

    checkEmail(){
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(this.state.email.match(regex)){
            return true
        }
        else {
            return false
        }
    }


    /* "text Error" mean the text under the input component */

    displayTextError(){
        this.setState({    
            errorTextClassName : "textErrorActiv", 
        })
    }

    removeTextError(){
        this.setState({    
            errorTextClassName : "textError", 
        })
    }


     /* "Submit" mean the Submit component and this function is to add red border 
     when the patern of the email is not respected */

    displaySubmitBorderError(){
        this.setState({    
            submitClassName : "Submit SubmitError", 
        })
    }

    removeSubmitBorderError(){
        this.setState({    
            submitClassName : "Submit", 
        })
    }

        
    /* "Warning Box" mean the red warning Icon */

    displayWarningBox(){
        this.setState({
            wrngCtnClassName : "warningContainerActive", 
        })
    }
    removeWarningBox(){        
        this.setState({
            wrngCtnClassName : "warningContainer", 
        })
    }


    /* Error Ui mean the "red warning" Icon AND the "error text"*/

    displayErrorUi(){
        this.displayTextError(); 
        this.displayWarningBox(); 
        this.displaySubmitBorderError(); 

    }


    removeErrorUi(){
        this.removeTextError(); 
        this.removeWarningBox(); 
        this.removeSubmitBorderError();
    }

    

    render(){
        return (
            <div className="SubmitBox" >
                <Submit className={this.state.submitClassName}
                        wrnCtnClassName={this.state.wrngCtnClassName} 
                        handleBtnClick={()=> this.handleClick()}
                        onChange={()=> this.onChange()}/>

                <p className={this.state.errorTextClassName} >
                    Please provide a valid email
                </p>
            </div>
        )
    }
}

export default SubmitBox; 

