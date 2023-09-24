import Loginform from "./Sections/Loginform";

function Starlogin(props) {

    return(
        <>
        <div className="login-page-back-effect"></div>
        <section className="login-page-bx">
            <Loginform screenhed={props.screenhed} startfield={props.startfield}/>
        </section>
        </>
    )
}
export default Starlogin;