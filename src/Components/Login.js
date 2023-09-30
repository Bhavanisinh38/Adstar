// Design Files
import Subloader from './Sections/Subloader';
import Loginform from "./Sections/Loginform";

function Login() {

    return(
        <>
            <Subloader/>
            <div className="login-page-back-effect"></div>
            <section className="login-page-bx">
                <Loginform />
            </section>
        </>
    )
}
export default Login;