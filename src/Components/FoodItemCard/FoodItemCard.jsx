

const FoodItemCard = ({item}) => {

    console.log(item);
    const {ProductName,BrandName,ProductImage,Description,Price,Category,Ratings,ProductCreationDateTime} =item;

    return (
 
<div className="card card-compact bg-base-100 w-96 shadow-xl">

        <div>
            <h1 className="text-center text-2xl font-semibold my-2 text-black">{ProductName}</h1>
        <figure>
    <img
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
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        
    );
};

export default FoodItemCard;