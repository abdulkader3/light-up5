import { useState } from 'react'
import './App.css'
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";


function App() {

  const[data,dataSet]=useState(0)
  const handelADD = ()=>{
    dataSet(data +1)
  };
  
  const handelREMOVE = ()=>{
    dataSet(data -1)
  }

  return (
    <>
          <h3 className=" font-black text-white text-2xl absolute top-28 right-60">How much do you want ? let us know. we shall give you the amount you select. </h3>

    <div  className="flex gap-10 ml-40 mb-20">
      <button onClick={handelREMOVE} className=' p-4 border-2 border-solid border-purple-800 rounded-sm hover:bg-red-600 transition-all '> <AiFillMinusCircle className='text-purple-800'/></button>
      <h1 className=' text-purple-800 text-6xl font-sans'> {data} </h1>
      <button onClick={handelADD} className=' p-4 border-2 border-solid border-purple-800 rounded-sm hover:bg-green-400 transition-all '> <AiFillPlusCircle className='text-purple-800'/></button>
    </div>
<h3 className=" absolute bottom-10 left-5 text-white">
  <span className=' text-xl'>Notice:</span> we all my assume that everyone will preass the <span className=' text-black'>plus button so they can get money. But just in case if you press</span> minus button the amount you select you have to pay us. for your information we will not use that money for our self ,we assure you that your money will used <span className=' text-black'>for helping poor.</span>
</h3>






    </>
  )
}

export default App
