import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUtensils } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Meal.css'

const Meal = (props) => {
    const {strMeal,strMealThumb,strCategory,strArea,idMeal} =props.meal;
    return (
        <div className='meal-container'>
            <img src={strMealThumb}alt="" />
           
            <h2>{strMeal}</h2>
            <div className='meal-info'>
                <p>Category: {strCategory} </p>
                <p>Area: {strArea}</p>
            </div>
            <button onClick={ ()=> props.handleDetailBtn(idMeal)} className='details-btn'>  <FontAwesomeIcon icon={faUtensils} />  Details</button>  
        </div>
    );
};

export default Meal;