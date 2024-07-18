//version 1
// import Card from './Components/Card';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Card/>
//       <Card/>
//       <Card/>
//       <Card/>
//       <Card/>
      
//     </div>
//   );
// }

// export default App;

// -------------------------------------------------------------------------------


// parents to child data transfer
// version2 

import Card from './Components/Card';
import './App.css';
import img1 from './Components/images/img1.png';
import img2 from './Components/images/img2.png';
import img3 from './Components/images/img3.png';
import img4 from './Components/images/img4.png';
import img5 from './Components/images/img5.png';
function App() {
  return (
  
<div className="App">
      <Card name={'Snehal'} imgP={img1} />
      <Card name={'Rakesh'} imgP={img2} />
      <Card name={'Manjumal'}  imgP={img3} />
      <Card name={'Shruti'} imgP={img4} />
      <Card name={'Salman'}  imgP={img5} />
  </div>
    
  );
}

export default App;
