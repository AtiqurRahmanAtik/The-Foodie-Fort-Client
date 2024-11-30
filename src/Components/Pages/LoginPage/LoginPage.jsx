import { Link } from "react-router-dom";


const LoginPage = () => {



    return (
       
    

    <div className="hero bg-base-200 ">
  <div className="hero-content w-full flex-col ">
    <div className="text-center w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold text-center my-3">Login now!</h1>

      
      <h1 className="text-5xl font-bold text-center my-3">Login now!</h1>
      
      
    </div>


    {/* form */}
    <div className="card bg-base-100  w-1/2 shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      <div>
        <h1 className="text-2xl text-black text-center my-2">Have an account please 
        <Link to='/register'> <button className="btn btn-active btn-link text-2xl">Register</button></Link>
        
        </h1>
      </div>
    </div>
  </div>

</div>
     
    );
};

export default LoginPage;