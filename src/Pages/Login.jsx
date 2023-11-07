import { useContext, useState } from "react";
import { AuthContext } from "../Routes/PrivateRoute/AuthProvider";
import { Link, useLocation } from "react-router-dom";

const Login = () => {
  const [loginError, setLoginError] = useState('') || []
 const {signIn, googleSignIn} = useContext(AuthContext)

 const location = useLocation();
  console.log(location);
    // const from = location.state?.from?.pathname || "/";

const handleLoginForm = e =>{
 
 e.preventDefault();
 const email = e.target.email.value;
 const password = e.target.password.value;
setLoginError('')


 signIn(email, password)
 .then(result =>{
  console.log(result.user);

  const user ={
   email,
   lastLoggedAt: result.user?.metadata?.lastSignInTime
  }
  
  fetch('https://server-two-gules.vercel.app/user',{
    method: 'PATCH',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)})
 })
 .catch(error =>{
 setLoginError('email or password is not valid');
 })
}

const handleGoogle = () => {
  googleSignIn().then((result) => {
    console.log(result.user);
  })
}

 return (
  <div>
   <div className="hero  bg-blue-200">
  
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-300">
      <form onSubmit={handleLoginForm} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          {
            loginError && <p className="text-red-600">{loginError}</p>
          }
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="form-control mt-6">
          <button onClick={handleGoogle} className="btn btn-primary">Login with Google</button>
        </div>
        <p>New User? Please <Link to ='/signup'><button className="btn btn-active btn-link">Signup Here</button></Link></p>
      </form>
    </div>
  </div>
</div>
  
 );
};

export default Login;