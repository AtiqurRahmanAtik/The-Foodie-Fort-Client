import axios from "axios";
import { Link } from "react-router-dom";

const RegisterPage = () => {

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


    return (
          <div className="hero bg-base-200 ">
  <div className="hero-content w-full flex-col ">
    <div className="text-center w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold text-center my-3">Registration Here</h1>
     
    </div>


    {/* form */}
    <div className="card bg-base-100  w-1/2 shrink-0 shadow-2xl">

      <form onSubmit={handleRegister} className="card-body">

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
          <button className="btn btn-primary text-2xl">Register</button>
        </div>
      </form>

      <div>
        <h1 className="text-2xl text-black text-center my-2">Don't  an account please 
        <Link to='/login'> <button className="btn btn-active btn-link text-2xl">Login</button></Link>
        
        </h1>
      </div>
    </div>
  </div>

</div>
    );
};

export default RegisterPage;