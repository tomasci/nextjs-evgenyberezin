import {NavLink} from "react-router-dom";

function TestNav() {
    return (
        <>
            <NavLink to={"/"}>Index</NavLink>
            <NavLink to={"/test"}>Test</NavLink>
            <br/>
        </>
    )
}

export default TestNav