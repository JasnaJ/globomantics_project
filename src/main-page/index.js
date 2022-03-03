import {useEffect, useState, useMemo} from 'react';
import './main-page.css';
import Header from './header';

function App() {
  const [allHouses, setAllHouses]= useState([]);

  useEffect(()=>{
    const fetchHouses = async () =>{
      const rsp = await fetch("/heoses.json");
      const houses = rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  },[]);

  const featuredHouse = useMemo(()=>{
    if(allHouses.lenght){
      const randomIndex = Math.floor(Math.random()* allHouses.lenght);
      return allHouses[randomIndex]
    }
  },[allHouses]);
  return (
          <div className='container'>
            <Header subtitle="Providing houses all over the world"/>
          </div>
  );
}

export default App;
