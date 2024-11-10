import axios from "axios";
import { useContext } from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { authProvider } from "../../AuthContext/AuthContext";
import Swal from "sweetalert2";

const RegisterPage = () => {

    const { googleSingUP} = useContext(authProvider);
    const navigate = useNavigate();

  // normal registration with register form
    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const registerUser = { name,email};

        console.log(registerUser);

        axios.post('http://localhost:5000/allUser', {registerUser})
        .then(res=> console.log(res.data))


        // fetch('http://localhost:5000/allUser',
        //     {
        //         method: 'post',
        //         headers: {
        //             "Content-Type": "application/json",
        //           },
        //           body: JSON.stringify(registerUser)

        //     }
        // )
        form.reset();

        
    }


    // google SingUp

    const handleGoogle = () =>{
      console.log('google hit');
      googleSingUP()
      .then(res=>{
        console.log(res.user);

        if(res.user){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        }
        // navigate
        navigate('/');

      })
      .catch(err=>{
        console.log(err);
      })

    }


    return (
          <div className="hero  ">
  <div className="hero-content w-full flex-col ">
    <div className="text-center w-1/2 lg:text-left">
      {/* <h1 className="text-5xl font-bold text-center my-3">Registration Here</h1> */}
     
    </div>


    {/* form */}
    <div className="card bg-gray-300  w-1/2 shrink-0 shadow-2xl">

      <form onSubmit={handleRegister} className="card-body">
      <h1 className="text-5xl font-bold text-center my-3">Registration Here</h1>

      <h1 className="text-5xl font-bold text-center my-3">Registration Here</h1>
      
      <div className="form-control">
          <label className="label">
            <span className="label-tex text-xl">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-tex text-xl">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-orange-500 hover:bg-primary hover:text-white border-none text-2xl">Register</button>
        </div>
      </form>

      <div>
        <h1 className="text-2xl text-black text-center my-2">Don't  an account please 
        <Link to='/login'> <button className="btn btn-active btn-link text-2xl">Login</button></Link>
        
        </h1>
      </div>

      {/* google button */}
      <div className="flex space-y-3 flex-col justify-center items-center my-3">
          <button  onClick={handleGoogle} className="btn w-1/2 text-2xl bg-primary hover:bg-orange-500 text-white hover:text-white"> 
          <FcGoogle className="text-4xl"/>
          Google</button>


       {/* facebook login */}
          <button className="btn w-1/2 text-white  text-2xl bg-primary hover:bg-orange-500  hover:text-white"> 
          <BsFacebook  className="text-4xl text-black rounded-full bg-white" > </BsFacebook>
          Facebook</button>
      </div>
    </div>
  </div>

</div>
    );
};

export default RegisterPage;