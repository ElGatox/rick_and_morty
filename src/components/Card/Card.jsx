import React from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom";



export default function Card({id,name, species, gender,image, onClose}) {
   return (
      <div className={style.Card}>
         <button className={style.closebutton} onClick = {() => onClose(id)}> x </button> 
        <div className={style.textos}>
        <Link to={`/detail/${id}`} >
         <h2 >Name:{name}</h2>
         </Link>
         <h2 >Species:{species}</h2>
         <h2 >Gender:{gender}</h2>
         </div>     
         <img className={style.image}src={image} alt=""/>   
      
      </div>
   );
}
