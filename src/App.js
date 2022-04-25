
import Card from './Card';
import './css/styles.css';
import {data} from './data.json';



function App() {
  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
    {
      data.map(item=>(
        <Card 
        name={item.name}
        dob ={item.dob} 
        technology = {item.stats.technology}
        strength = {item.stats.strength}
        special_powers = {item.stats.special_powers}
        loyalty = {item.stats.loyalty}      
      />
      ))
    }
    </div>
  );
}

export default App;
