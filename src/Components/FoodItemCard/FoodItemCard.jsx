import { Link } from "react-router-dom";
import 'animate.css';
import axios from "axios";

const FoodItemCard = ({item}) => {

    console.log(item);
    const {_id,ProductName,BrandName,ProductImage,Description,Price,Category,Ratings,ProductCreationDateTime} =item;


    // handleDelete 
    const handleDelete = (id)=>{
      console.log(id);
      axios.delete(`http://localhost:5000/foodItems/${id}`)
      .then(res=>console.log(res.data))
      .catch(err=>{
        console.log(err);
      })

     
      // fetch(`http://localhost:5000/foodItems/${id}`,{
      //   method: 'DELETE',
      //   headers: { "Content-Type": "application/json",}

      // })

    }


    // handleAbout 
    // const handleAbout = (id)=>{
    //   console.log(id)
    //   axios.get(`http://localhost:5000/foodItems/${id}`)
    //   .then(res => console.log(res.data))
    //   .catch(err=>{
    //     console.log(err);
    //   })
    // }

    return (
 
<div className="mx-auto card card-compact bg-base-100 w-96 shadow-xl">

        <div>
            <h1 className="text-center text-2xl font-semibold my-2 text-black">{ProductName}</h1>
        <figure>
    <img className="w-96 h-96 p-5 will-change-transform animate__animated animate__zoomIn"
      src={ProductImage}
      alt="Shoes" />
  </figure>
        </div>

  <div className="card-body">
   
    <h2 className="card-title">{BrandName}</h2>
    <p>{Description}</p>

    <div className="flex justify-between">
        <h1>{Category}</h1>
        <h1>{Ratings}</h1>
    </div>

    <div className="card-actions justify-between ">
    <Link to={`/${_id}`}>   <button  className="btn btn-primary">Details</button></Link>

      <button onClick={()=> handleDelete(_id)} className="btn bg-red-600 text-white">Remove</button>
    </div>
  </div>
</div>
        
    );
};

export default FoodItemCard;