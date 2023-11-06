
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({children}) => {
 const {user, loading} = useContext(AuthContext);
 const location = useLocation()
 console.log(user);
 if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>
   }

     if (!user) {
        return <Navigate to='/login' 
        // state={ { from: location } }
        state={location.pathname}
        replace></Navigate>
    }
    return children;
};

export default PrivateRoute;