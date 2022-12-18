
import {Navigate} from "react-router-dom"

function PrivateRoute({children}) {
    const token = JSON.parse(localStorage.getItem("token"))
    if(!token){
        return <Navigate to = "/login/student" />
    }
    return children;
}

export default PrivateRoute;