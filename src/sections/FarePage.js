import React, { useState } from 'react'
import './FarePage.css'
import imagebg from '../Assets/city.jpg'

export default function FarePage() {

  const stopsList = ['Surjani Town', '4K Chowrangi', 'PowerHouse Chowrangi', 'U.P. More', 'Nagan Chowrangi', 'Sakhi Hassan Chowrangi', '5-Star Chowrangi', 'KDA Chowrangi', 'Board Office Stop', 'Nazimabad 7 Number Stop', 'Nazimabad Petrol Pump Stop', 'Golimar Chowrangi', 'Gulbahar Stop', 'Lasbela Chowk', 'Guru Mandir Chowrangi', 'Numiash Chowrangi']

  const [value1, setValue1] = useState('Surjani Town');
  const [value2, setValue2] = useState('Surjani Town');
  const [fare, setFare] = useState(0);
  const [change, setchange] = useState(true)

  const minFare = 15;
  const maxFare = 55;
  // var change = 1;

  const individualitems = stopsList.map((element) =>
    <option key={element} value={element} >{element}</option>
  )

  function CalculateFare() {
    let start = stopsList.indexOf(value1)
    let stop = stopsList.indexOf(value2)
    let res = Math.abs(start - stop);
    setchange(true);
    console.log(change)
    if (res === 0) {
      setFare(0);
    }
    else if (res < 2) {
      setFare(minFare);
    }
    else if (res >= 2 && res < 4) {
      setFare(20);
    }
    else if (res >= 4 && res < 6) {
      setFare(25);
    }
    else if (res >= 6 && res < 7) {
      setFare(30);
    }
    else if (res >= 7 && res < 9) {
      setFare(35);
    }
    else if (res >= 9 && res < 11) {
      setFare(40);
    }
    else if (res >= 11 && res < 13) {
      setFare(45);
    }
    else if (res >= 13 && res <= 14) {
      setFare(50);
    }
    else {
      setFare(maxFare);
    }
  }

  const handleChange1 = (e) => {
    e.preventDefault();
    setchange(false);
    console.log(change)
    setValue1(e.target.value);
  };

  const handleChange2 = (e) => {
    e.preventDefault();
    setchange(false);
    console.log(change)
    setValue2(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // change = true
    // CalculateFare()
  }



  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <div className='farePage' id='FarePage'>
        <img src={imagebg} className='imagebg' alt="" />
        <div className='imgCover'></div>
        <div className='mainDivFare'>
          <div className='DivSecondFare'>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '3rem' }} onSubmit={handleSubmit}>
              <select defaultValue='Numaish Chowrangi' id='locations1' onChange={handleChange1} name="locations1" className='locInput'>
                {individualitems}
              </select>
              <h3 style={{ padding: '0.8rem 0.5rem 0 0.5rem', fontSize: '1.5rem' }}> <b>to</b> </h3>
              <select id='locations2' onChange={handleChange2} name="locations2" className='locInput'>
                {individualitems}
              </select>
              <button title='Press to Calculate Fare' className='CalcBtn' onClick={CalculateFare} style={{ padding: '0.5rem 2rem', marginTop: '1.5rem' }}>Calculate Fare</button>
              <h3 style={{ textAlign: 'center', padding: '1.8rem 0.5rem 0.5rem 1.5rem', marginBottom: '1rem', fontSize: '1.2rem' }}> <b>The Fare from <span style={{ color: '#03fe85' }}>{value1}</span> to <span style={{ color: '#03fe85' }}>{value2}</span> is <span style={{ color: '#03fe85' }}>{(change === true) ? `Rs. ${fare}` : ''}</span></b> </h3>
            </form>

          </div>

        </div>

      </div>
    </div>
  )
}
