import './Newsletter.css'; 
import Logo from './Logo'; 
import Banner from './Banner'; 
import RegistrationBox from './RegistrationBox'; 

function Newsletter(props){
    return (
        <div className="Newsletter" >
            <div className="bgShape1" ></div>
            <div className="bgShape2" ></div>
            <Logo/>
            <Banner/>
            <RegistrationBox/>
        </div>
    )
}

export default Newsletter; 