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
import img1 from './Components/img1.jpg';
import img2 from './Components/img2.jpg';
function App() {
  return (
  
<div className="App">
      <Card name={'Rakesh'} imgP={img1} />
      <Card name={'Snehal'} imgP={img2} />
      <Card name={'Manjumal'}  imgP={img1} />
      <Card name={'Shruti'} imgP={img2} />
      <Card name={'Salman'}  imgP={img1} />
  </div>
    
  );
}

export default App;
