import { Link, useRouteError } from "react-router-dom";


const ErrorPages = () => {
    const error = useRouteError();
  console.error(error);

    return (
        <div className="text-center my-11 text-3xl text-black">

        <h1 className="text-red-700 font-bold">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>

        <div className="my-3">
           <Link to='/'>  <button className="btn text-2xl bg-green-500 hover:bg-orange-500 hover:text-2xl">Go To Home Page</button></Link>
        </div>

        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
};

export default ErrorPages;