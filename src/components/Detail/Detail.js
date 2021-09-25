import React from 'react';
import './Detail.css'

const Detail = (props) => {
    const {strMeal,strMealThumb,strCategory,strArea,idMeal,strYoutube,strInstructions} =props.detail;
    const yt = strYoutube? 'https://www.youtube.com/embed/'+strYoutube.split('=')[1] : ' ';
    return (
        <div className="detail-section">
            <h1 className='title'>{strMeal}</h1>
            <iframe width="450" height="300px"
                src={yt}>
            </iframe>
            <div className='meal-info'>
                <p> <span className="title">Category: </span> {strCategory} </p>
                <p><span className="title">Area: </span> {strArea}</p>
            </div>
            
            <p> <span className="title">Instruction:</span>  {strInstructions}</p>
        </div>
    );
};

// const Detail = (props) => {
//     if(props.detail){
//         return <ShowDetail detail={props.detail} />
//     }else{
//         return <ShowNothing/>
//     }
// };

// const ShowDetail = (props) =>{
//     const {strMeal,strMealThumb,strCategory,strArea,idMeal,strYoutube,strInstructions} =props.detail;
//     // const ytlink = 'https://www.youtube.com/embed/'+strYoutube.split('=')[1];
//     //console.log('https://www.youtube.com/embed/'+strYoutube.split('=')[1]);
//     return (
//         <div>
//             <h1>{strMeal}</h1>
//             <iframe width="500" height="315"
//         src={'https://www.youtube.com/embed/'+strYoutube.split('=')[1]}>
//         </iframe>
//             <p>{strInstructions}</p>
//         </div>
//     );
// }
// const ShowNothing = (props) =>{
//     return(
//         <h1>Nothig</h1>
//     );
// }

export default Detail;