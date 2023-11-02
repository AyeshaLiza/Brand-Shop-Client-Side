import { useContext } from 'react';
// import { AuthContext } from '../../firebase/AuthProvider';
import { AuthContext } from '../Routes/PrivateRoute/AuthProvider';
import { useState } from 'react';
// import login from '../../assets/login.jpg'

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getStorage, uploadBytes } from 'firebase/storage';
import app from '../Routes/PrivateRoute/firebase.init';
// import swal from 'sweetalert';


const Signup = () => {

  // const storage = getStorage(app);
  const { signUp, googleSignIn } = useContext(AuthContext)

  // const [proPicture, setProPicture] = useState({}) || []
  // const [email, setEmail] = useState('') || []
  // const [password, setPassword] = useState('') || []
  const [sigupError, setSignupError] = useState('') || []

  const handleFormSubmit = e => {

    e.preventDefault();
    const displayName  = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photo.value;
    console.log(displayName , photoURL, email, password);
    setSignupError('')

    if (!/(?=.*[A-Z])(?=.*\W)(?!.* ).{6,}/.test(password)) {
      setSignupError(' provide an Uppercase, a special chatacter & atleast 6 digit password')
      return
    } 
    else {
      signUp(displayName, photoURL, email, password).then(result => {
        // const userInfo = (result.user);

        // userInfo.updateProfile({
        //   displayName: name,
        //       photo: photo
        // })

        const createdAt = result.user?.metadata?.creationTime;
        const user = { displayName , photoURL, email, createdAt: createdAt }
        console.log(user);

        fetch('http://localhost:4000/user', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            
            if (data.insertedId) {
              Swal.fire({
                title: 'success!',
                text: 'Data Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
          })

      })
        .catch((error) => {
          setSignupError(error)
        })

        // const storageRef = ref(storage, 'email');
        // uploadBytes(storageRef, file).then((snapshot) => {
        //   console.log('Uploaded a blob or file!');
        // });
    }
  }

  const handleGoogle = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
    })
  }

  return (
    <div>

      <div className="hero bg-blue-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-300">
            <form onSubmit={handleFormSubmit} className="card-body">

                {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text" >Name</span>
                </label>
                <input type="text" placeholder=" name" name='name' className="input input-bordered input-primary w-full max-w-xs" required/>
              </div>

                {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered input-primary w-full max-w-xs " required />

              </div>

              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered input-primary w-full max-w-xs" required />

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>

              {/* photo */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                {/* <input type="file" name='photo' placeholder="Upload your Photo" className="input input-bordered input-primary w-full max-w-xs" required /> */}
                <input type="file" name="photo" id="photo" placeholder="Upload your Photo" required/>
              </div>
              <img src="" alt="" id='myImg' />

              {
                sigupError &&
                <span className='text-red-700'>{sigupError}</span>
                
              }

              <div className="form-control mt-6">
                <button className="btn bg-blue-500">Signup</button>
              </div>

              <div className="form-control mt-2">
                <button type='button' onClick={handleGoogle} className="btn bg-blue-500">Login with Google</button>
              </div>
              <p> Already have an account?<Link to='/login'><button className="btn btn-active btn-link">Login Here</button></Link></p>
            </form>
            <div>
              <img src="" alt="" />
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Signup;