

import Nav1 from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './card';
import Card2 from './card2';
import Card3 from './card3';
import Card4 from './card4';
import Card5 from './card5';

import  './App.css';
function App() {
  return (
    <div className="App">
   <Nav1/>
   <div className='prt'>
   <Card/>
   <Card2/>
   <Card3/>
   <Card4/>
   <Card5/>
  
   </div>
    </div>
  );
}

export default App;
