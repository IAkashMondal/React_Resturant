import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Offers from './components/offers';
import offerimages from "./components/offerimages.json"
import Filters from './components/filters';
import Restaurents from './components/restaurents';
import data from "./components/data.json"
function App() {
  let [userdata,setUserdata]=React.useState(data)
  let [x,setX]=React.useState(0)
  let[newarr,setNewarr]=React.useState([])
  let  handlesortstar=(val)=>{
    setX(val)
    let newarr=userdata.filter((el)=>(el.star>val))
     setNewarr(newarr)
  }
  let  handlecash=(val)=>{
    setX(val)
    let newarr=userdata.filter((el)=>(el.payment_method===val))
     setNewarr(newarr)
  }
  let  handleall=()=>{
    setX(x="all")
    let newarr=userdata
     setNewarr(newarr)
  }
  let handlelowtohigh=()=>{
    setX(x="hl")
    userdata.sort((a,b)=>(a.costfor_two-b.costfor_two))
    console.log(userdata)
    setUserdata(userdata)
  }
  let handlehightolow=()=>{
    setX(x="lh")
    console.log(userdata)
    userdata.sort((a,b)=>(b.costfor_two-a.costfor_two))
    setUserdata(userdata)
  }

return (
    <div>
      <Navbar/>
      <Offers offerimages={offerimages}/>
      <Filters handleall={handleall} handlesortstar={handlesortstar} handlecash={handlecash} handlelowtohigh={handlelowtohigh} handlehightolow={handlehightolow} userdata={userdata}/>
      <Restaurents newarr={newarr} x={x}   userdata={userdata}/>
    </div>
  );
}

export default App;
