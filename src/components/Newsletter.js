import './Newsletter.css'; 
import Logo from './Logo'; 
import Banner from './Banner'; 
import RegistrationBox from './RegistrationBox'; 

function Newsletter(props){
    return (
        <div className="Newsletter" >
            <Logo/>
            <Banner/>
            <RegistrationBox/>
        </div>
    )
}

export default Newsletter; 