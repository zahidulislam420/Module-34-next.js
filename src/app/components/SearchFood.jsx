'use client';
import React from 'react';

const SearchFood = () => {

const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods');
const data = await res.json();
const foods = data.data;


    return (
        <div>
            <h2>Top Foods: {foods.length} </h2>
        </div>
    );
};

export default SearchFood;