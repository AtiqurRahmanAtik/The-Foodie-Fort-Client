import { useLoaderData } from "react-router-dom";


const SingleItem = () => {
    const singleFood = useLoaderData();
    console.log(singleFood);
    
    const {ProductName,BrandName,ProductImage,Description,Price,Category,Ratings,ProductCreationDateTime} =singleFood;

    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-5">Details Our Latest Item </h1>


            <div className="mx-auto card card-compact bg-gray-300 lg:w-[520px] shadow-xl">

        <div>
            <h1 className="text-center text-2xl font-semibold my-2 text-black">{ProductName}</h1>
        <figure>
    <img className="lg:w-[510px] lg:h-[510px]  will-change-transform animate__animated animate__zoomIn"
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
    <button  className="btn btn-primary">Details</button>

      <button  className="btn bg-red-600 text-white">Remove</button>
    </div>
  </div>
</div>
        
        </div>
    );
};

export default SingleItem;