import React from 'react';

const FoodDetailPage = async({params}) => {
    const {foodId} = await params;

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    const {dish_name, image_link, origin_and_popularity } = data.data;

    return (
        <div>
            <h2>Food Details: {foodId} </h2>
            <div>
                <h3>{dish_name}</h3>
                {/* <img src={image_link} alt={dish_name} /> */}
                <p>{origin_and_popularity}</p>
            </div>
        </div>
    );
};

export default FoodDetailPage;