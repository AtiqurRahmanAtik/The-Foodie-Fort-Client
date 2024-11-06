import { useEffect, useState } from "react";
import FoodItemCard from "../FoodItemCard/FoodItemCard";


const AllFoodItems = () => {

    const [foodItems, setFoodItems] = useState([]);
    // console.log(foodItems);

    useEffect(()=>{
        fetch('http://localhost:5000/foodItems')
        .then(res=> res.json())
        .then(data=> setFoodItems(data));

    },[]);



    return (
        <div className=" grid gap-3 grid-cols-1 lg:grid-cols-3 my-14">
            {
                foodItems.map(item=> <FoodItemCard key={item._id} item={item}></FoodItemCard>)
            }
        </div>
    );
};

export default AllFoodItems;