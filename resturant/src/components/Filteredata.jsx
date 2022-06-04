

import React from 'react'
 const Filteredata = ({mapdata,userdata}) => {
  return (
  
            <div class="cards">
                { mapdata.map((el,index)=>(
                 <div key={el.index}>
                       <div class="card">
                  <img width="270" height="170px" src={el.image} alt="" />
                  <div class="R_title">{el.name}</div>
                  <div class="R_details">
                      
                      {
                          el.categories.map((cat)=>(
                            <div style={{display:"flex"}}class="R_subtitle">{cat}</div>
                          ))
                      }
                      
                  </div>
                  <div class="R_info">
                      <div class="R_ratings">
                          <i class="material_icons star_icon">star</i>{el.star}
                      </div>
                       .<div class="R_delivery_timings">{(el.PaymentMethod==="a"&&<span>Only Card Accepted</span>)||(el.PaymentMethod==="b"&&<span>Only Cash Accepted</span> )||(el.PaymentMethod==="c" &&<span> Card/Cash Accepted</span>)}</div> .
                      <div class="R_cost_for_two">{el.cost}</div>
                  </div>
                  <div class="offer_banner">
                      <span class="material_icons"> local_offer </span>
                      <span class="offer_
                      
                      text">20% off | Use TRYNEW</span>
                  </div>
                 </div>
                 
              </div>
              ))}
                
            </div>
        
  )
}
export default Filteredata
