import React from "react";
import Card from "../Card/Card";
import Style from "../Cards/Cards.module.css"



 function Cards({characters, onClose}){   //es lo mismo  que    //const {character} = props
  return (
        <div className={Style.Cards}>
         {characters.map(({id,name,species,gender,image})=> {
          return <Card
          id={id}
          name={name}
          species={species} 
          gender={gender}
          image={image} 
          onClose={onClose}
                 
          />
      })};
      
      
  </div>
  )
}



export default Cards
