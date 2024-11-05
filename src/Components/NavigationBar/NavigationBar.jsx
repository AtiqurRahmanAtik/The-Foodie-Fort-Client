import { Link, NavLink } from "react-router-dom";


const NavigationBar = () => {

    const links = <>
         <NavLink to='/'>    <li className="text-2xl font-medium hover:underline"><a>Home</a></li></NavLink>

        <NavLink to='/allUser'>   <li className="text-2xl font-medium hover:underline"><a>All User</a></li></NavLink>
          
        <NavLink to='/about'>   <li className="text-2xl font-medium hover:underline"><a>About</a></li></NavLink>
    </>;

    return (
        <div className="navbar bg-green-500 ">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow bg-orange-500 ">
              
              {links}

            </ul>
          </div>
          <a className=" text-orange-500 text-xl lg:text-3xl lato-black-italic ">The Foodie Fort</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
           
            {links}

          </ul>
        </div>
        
        <div className="navbar-end">
          <Link to='/login' className="btn text-2xl">login</Link>
        </div>
      </div>
    );
};

export default NavigationBar;