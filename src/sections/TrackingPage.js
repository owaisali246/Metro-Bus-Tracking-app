import React, { useState } from 'react'
import './TrackingPage.css'
import { useJsApiLoader, GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api'
import { FaLocationArrow } from 'react-icons/fa'

export default function TrackingPage() {
  const [map, setMap] = useState(/** @type google.maps.Map */(null))
  const [directionResponse, setDirectionResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
  const [mrks, setmrks] = useState(false)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAjW58mqM8jUeslmyJvfLWjYNarqDWzaCs",
    // libraries: ['places']
  })


  function centerMap() {
    map.panTo({ lat: 24.9660, lng: 67.06718 });
  }

  function mapset(map) {
    return setMap(map);
  }

  const stopsList = ['Surjani Town', '4K Chowrangi', 'PowerHouse Chowrangi', 'U.P. More', 'Nagan Chowrangi', 'Sakhi Hassan Chowrangi', '5-Star Chowrangi', 'KDA Chowrangi', 'Board Office Stop', 'Nazimabad 7 Number Stop', 'Nazimabad Petrol Pump Stop', 'Golimar Chowrangi', 'Gulbahar Stop', 'Lasbela Chowk', 'Guru Mandir Chowrangi', 'Numiash Chowrangi']

  const stopsCollection = [
    { name: 'Surjani Town', coord: { lat: 25.0251, lng: 67.0631 } },
    { name: '4K Chowrangi', coord: { lat: 25.0061, lng: 67.064159 } },
    { name: 'PowerHouse Chowrangi', coord: { lat: 24.9844, lng: 67.0661 } },
    { name: 'U.P. More', coord: { lat: 24.9728, lng: 67.0667 } },
    { name: 'Nagan Chowrangi', coord: { lat: 24.9660, lng: 67.0673 } },
    { name: 'Sakhi Hassan Chowrangi', coord: { lat: 24.9540, lng: 67.0575 } },
    { name: '5-Star Chowrangi', coord: { lat: 24.9424, lng: 67.0470 } },
    { name: 'KDA Chowrangi', coord: { lat: 24.9314, lng: 67.0369 } },
    { name: 'Board Office Stop', coord: { lat: 24.9247, lng: 67.0317 } },
    { name: 'Nazimabad 7 Number Stop', coord: { lat: 24.9185, lng: 67.0311 } },
    { name: 'Nazimabad Petrol Pump Stop', coord: { lat: 24.9107, lng: 67.03108 } },
    { name: 'Golimar Chowrangi', coord: { lat: 24.9013, lng: 67.0301 } },
    { name: 'Gulbahar Stop', coord: { lat: 24.8958, lng: 67.0304 } },
    { name: 'Lasbela Chowk', coord: { lat: 24.8873, lng: 67.0329 } },
    { name: 'Guru Mandir Chowrangi', coord: { lat: 24.8805, lng: 67.0388 } },
    { name: 'Numiash Chowrangi', coord: { lat: 24.8723, lng: 67.0352 } }
  ]


  const stopsMarkers = stopsCollection.map((stop) =>
    <Marker key={stop.name} position={stop.coord} title={stop.name} label={{ text: stop.name, color: 'black', fontWeight: '600' }} />

  )

  const individualitems = stopsList.map((element) =>
    <option key={element} value={element} >{element}</option>
  )

  const [value1, setValue1] = useState('Surjani Town');
  const [value2, setValue2] = useState('Surjani Town');


  const handleChange1 = (e) => {
    e.preventDefault();
    setDistance('')
    setDuration('')
    setValue1(e.target.value);
  };

  const handleChange2 = (e) => {
    e.preventDefault();
    setDistance('')
    setDuration('')
    setValue2(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    directionOnMap()
  }



  if (!isLoaded) {
    return <p>Hi I'm Loading!</p>
  }

  async function directionOnMap() {
    // eslint-disable-next-line no-undef 
    const direction = new google.maps.DirectionsService();
    const result = await direction.route({
      origin: (stopsCollection[stopsList.indexOf(value1)].coord),
      destination: (stopsCollection[stopsList.indexOf(value2)].coord),
      // eslint-disable-next-line no-undef 
      travelMode: google.maps.TravelMode.DRIVING

    })

    setDirectionResponse(result)
    setDistance(result.routes[0].legs[0].distance.text)
    setDuration(result.routes[0].legs[0].duration.text)
  }


  return (
    <>

      <div style={{ height: '100vh', position: 'relative' }}>
        <div id='TrackingPage' className='mapDiv'>
          <GoogleMap
            center={{ lat: 24.9660, lng: 67.06718 }}
            onClick={directionResponse}
            zoom={14}
            mapContainerStyle={{ position: 'absolute', width: '100%', height: '100vh' }}
            options={{
              zoomControl: false,
              fullscreenControl: false,
              mapTypeControl: false,
            }}
            onLoad={map => mapset(map)}
          >
            {/* <Marker position={{lat: 24.9660, lng: 67.0673}} title='Nagan Chowrangi' label='Nagan Chowrangi' /> */}
            {mrks && stopsMarkers}
            {directionResponse && <DirectionsRenderer directions={directionResponse} />}
          </GoogleMap>
        </div>
        <div style={{ position: 'relative', float: 'right', width: '18rem', marginRight: '3vw' }}>
          <div className='mainDiv'>
            <div className='firstChild'>
              <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSubmit}>
                <select defaultValue='Numaish Chowrangi' id='locations1' onChange={handleChange1} name="locations1" className='locInput'>
                  {individualitems}
                </select>
                <h3 style={{ padding: '0.8rem 0.5rem 0 0.5rem', fontSize: '1.5rem' }}> <b>to</b> </h3>
                <select id='locations2' onChange={handleChange2} name="locations2" className='locInput'>
                  {individualitems}
                </select>
                <div style={{ width: '10rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                  <input className='CalcBtn' type="submit" style={{paddingLeft:'2rem',paddingRight:'2rem'}} />
                </div>
              </form>
              <div style={{ width: '15rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <button className='CalcBtn' onClick={() => setmrks(true)} style={{ width: 'max-content', textAlign: 'right', padding: '0.5rem 2rem 0 2rem' }}>See Stops</button>
                <button onClick={centerMap} title='Back to Center' className='goBtn'><FaLocationArrow /></button>
              </div>
            </div>
            <div className='secondChild'>
              <p className='textClass'>Estimated Distance: {distance} </p>
              <p className='textClass'>Estimated Duration: {duration} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
