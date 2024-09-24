import moment from "moment/moment"
import logo from "../../../assets/logo.png"
function Header() {
    return (
        <div className="text-center">
            <img
            className="mx-auto"
             src={logo} alt="" />
             <p>Journalism Without Fear Or Favour</p>
             <p>{moment().format("dddd, D MMMM, YYYY")}</p>
        </div>
    )
}

export default Header
