import Header from "../shared/header/Header"
import LeftSideNav from "../shared/leftSideNav/LeftSideNav"
import Navbar from "../shared/navbar/Navbar"
import RightSideNav from "../shared/rightSideNav/RightSideNav"
import BreakingNews from "./BreakingNews"

function Home() {
    return (
        <div>
            <Header/>
            <BreakingNews/>
            <Navbar/>
            <div className="grid grid-cols-4">
                <div>
                    <LeftSideNav/>
                </div>
                <div className="col-span-2"></div>
                <div>
                    <RightSideNav/>
                </div>
            </div>
        </div>
    )
}

export default Home
