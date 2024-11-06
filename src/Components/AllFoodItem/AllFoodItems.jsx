import { useEffect, useState } from "react";
import FoodItemCard from "../FoodItemCard/FoodItemCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const AllFoodItems = () => {

    // const [foodItems, setFoodItems] = useState([]);
    // console.log(foodItems);

    const fetchData = async () => {
        const { data } = await axios.get('http://localhost:5000/foodItems');
        return data;
      };

    
    const {data:foodItems, isLoading, error } = useQuery({
        queryKey: ['foodItem'],
        queryFn: fetchData,



    })

    // console.log(foodItems);


    // data fetch using useEffect
    // useEffect(()=>{
    //     fetch('http://localhost:5000/foodItems',{
    //         method: 'GET'
    //     })
    //     .then(res=> res.json())
    //     .then(data=> setFoodItems(data));

    // },[]);

    if(isLoading){
        return <>
        <span className="loading loading-spinner text-primary"></span>
<span className="loading loading-spinner text-secondary"></span>
<span className="loading loading-spinner text-accent"></span>
<span className="loading loading-spinner text-neutral"></span>
<span className="loading loading-spinner text-info"></span>
        </>
    }

    if(error){
        return <><p> The Error is ${error}</p></>
    }
    return (
        <div className=" grid gap-3 grid-cols-1 lg:grid-cols-3 my-14">
            {
                foodItems?.map(item=> <FoodItemCard key={item._id} item={item}></FoodItemCard>)
            }
        </div>
    );
};

export default AllFoodItems;