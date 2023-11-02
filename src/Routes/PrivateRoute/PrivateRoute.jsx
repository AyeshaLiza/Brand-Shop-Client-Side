
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({children}) => {
 const {user, loading} = useContext(AuthContext);
 console.log(user);
 if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>
   }

     if (!user) {
        return <Navigate to='/login' state={ { from: location } } replace></Navigate>
    }
    return children;
};

export default PrivateRoute;