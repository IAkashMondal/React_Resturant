import React from 'react'
import Filteredata from "./Filteredata"

 const Restaurents = ({userdata,newarr,x,y,z}) => {
 
  return (
    <section class="near-you">
      
        <div class="container divider">
            {    
                ( 
                  (x==="lh" &&  <Filteredata mapdata={userdata}/>)||
                  (x==="hl" &&<Filteredata  mapdata={userdata}/>)||
                  (x===0 &&  <Filteredata mapdata={userdata}/>)||
                  (x===1 &&  <Filteredata mapdata={newarr}/>)||
                  (x===2 &&  <Filteredata mapdata={newarr}/>)||
                  (x===3 &&  <Filteredata mapdata={newarr}/>)||
                  (x===4 &&  <Filteredata mapdata={newarr}/>)||
                  (x==="ca" &&  <Filteredata mapdata={newarr}/>)||
                  (x==="co" &&  <Filteredata mapdata={newarr}/>)||
                  (x==="all" &&  <Filteredata mapdata={newarr}/>)
                )
            }
            
        </div>
    </section>
  )
}
export default Restaurents
