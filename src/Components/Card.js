//version 1
// import React from 'react';
// import './Card.css';
// import pic from './images/img1.png;
// export default function Card() {
//   return (
//     <div className='card'>
//         <img src={pic} alt='no-img' className='profileImg'/><br/>
//         <label>Snehal</label>
//      <button className='btn'>Follow</button>
//     </div>
//   )
// }

// -----------------------------------------------------------------------
// Receive data from parents
//version 2
// import React from 'react';
// import './Card.css';
// export default function Card(props) {
//   return (
//     <div className='card'>
//         <img src={props.imgP} alt='no-img' className='profileImg' /><br/>
//        <label>{props.name}</label>

//      <button className='btn'>Follow</button>

        
//     </div>
//   )
// }




// ----------------------------Event handler----------------------------
// version 3

import React, { useState } from 'react';
import './Card.css';
export default function Card(props) {

  const [follow, setFollow]=useState('Follow')
  function clickHandler(){


    // if(follow==='Follow'){
    //   setFollow('Requested')
    // }
    // else{
    //   setFollow('Follow')
    // }


    //using terary operator
    let status = follow==='Follow'?'Requested':"Follow";
    setFollow(status)
  }
  
  return (
    <div className='card'>
        <img src={props.imgP} alt='no-img' className='profileImg' /><br/>
        <label>{props.name}</label>
        <button className='btn' onClick={clickHandler}>{follow}</button>
    </div>
  )
}




// ----------------------------------------------------------------------

//Short circuiting
