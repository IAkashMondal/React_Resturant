import React from 'react'

 const Filters = ({handlesortstar,handlecash, handleall,handlelowtohigh,handlehightolow}) => {
   
  return (
    <section class="near_you">
    <div class="container restaurants">
    <h1>1000+ Restaurants</h1>
    <div class="R_options">
        <div onClick={()=>handlehightolow()} class="R_option">
            Cost High to Lost
        </div>

        <div onClick={()=>handlelowtohigh()} class="R_option">
            Cost Low to High
        </div>
        <div onClick={()=>handlesortstar(1)} class="R_option">
            1 Star
        </div>
        <div onClick={()=>handlesortstar(2)} class="R_option">
            2 Star
        </div>
        <div onClick={()=>handlesortstar(3)} class="R_option">
            3 Star
        </div>
        <div onClick={()=>handlesortstar(4)} class="R_option">
            4 Star
        </div>
        <div onClick={()=>handlecash("a")} class="R_option">
           Cash only
        </div>
        <div onClick={()=>handlecash("c")} class="R_option">
            Card Only
        </div>
        <div onClick={()=>handleall()} class="R_option">
            All 
        </div>
        
    </div>
</div>


</section>
    


  )
}
export default Filters
