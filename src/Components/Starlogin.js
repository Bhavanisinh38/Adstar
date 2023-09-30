// Design Files
import Subloader from './Sections/Subloader';
import Loginform from "./Sections/Loginform";

function Starlogin(props) {

    return(
        <>
            <Subloader/>
            <div className="login-page-back-effect"></div>
            <section className="login-page-bx">
                <Loginform screenhed={props.screenhed} startfield={props.startfield}/>
            </section>
        </>
    )
}
export default Starlogin;