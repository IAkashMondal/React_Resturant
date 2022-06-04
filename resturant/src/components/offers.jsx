import React from 'react'
import '../App.css';
 const Offers = ({offerimages}) => {
  return (
    <div>
       <section className="offers">
       <div className="container">
        {offerimages.map((el)=>(
             <img className="offer" src={el} alt=""/>
        ))}
         </div>
    </section>
    </div>
  )
}
export default Offers