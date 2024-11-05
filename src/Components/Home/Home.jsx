import 'animate.css';
import AllFoodItems from '../AllFoodItem/AllFoodItems';

const Home = () => {
    return (
        <div>
           


            <h1 className="animate__animated animate__zoomIn text-center text-4xl text-orange-600 font-bold my-9">Our Latest Items</h1>

           <AllFoodItems></AllFoodItems>
        </div>
    );
};

export default Home;