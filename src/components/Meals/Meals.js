import React, { useEffect, useState } from 'react';
import Detail from '../Detail/Detail';
import Meal from '../Meal/Meal';
import './Meals.css'
const Meals = () => {
    const [meals, setMeals] =useState([]);
    
    useEffect(()=>[
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
        .then(res=>res.json())
        .then(data=>{
            setMeals(data.meals)
            
        })
       
    ],[])
    const [detail, setDetail] = useState([]);
    
    //load first item by default to show details section
    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52977")
        .then(res => res.json())
        .then(data => setDetail(data.meals[0]))
    },[])

    //if click to the detail button, load the item via id.
    const handleDetailBtn = (id) =>{
        console.log(detail);
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => setDetail(data.meals[0]))
        console.log(detail);
        
    }

    const handleSearch = (e) =>{
        let searchItem = e.target.value;
        console.log(searchItem);
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.meals !== null){
                setMeals(data.meals)
            }
        })
    }


    


    return (
        <div>
            <div className="input-section">
                <input onChange={handleSearch} type="text" placeholder="Search your item" />
            </div>

    
            <div className="meals-container">
            
            
                <div className='meal-section'>
                
                    {
                      meals.map(meal=><Meal key={meal.idMeal} handleDetailBtn={handleDetailBtn} meal={meal}/> )
                    }
            
                </div>
                <div className='meal-deatails'>
                <Detail detail={detail}/>  
                </div>
            
            </div>
        </div>
    );
};

export default Meals;