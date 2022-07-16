import React, { useState } from 'react'
import './TrackingPage.css'
import { useJsApiLoader, GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api'
import { FaLocationArrow } from 'react-icons/fa'
import { stopsCollection, stopsList } from './components/BusStops'

export default function TrackingPage() {
  const [map, setMap] = useState(/** @type google.maps.Map */(null))
  const [directionResponse, setDirectionResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
  const [mrks, setmrks] = useState(false)
  const [origin, setOrigin] = useState('Surjani Town');
  const [destination, setDestination] = useState('Surjani Town');


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "",
    // libraries: ['places']
  })


  function centerMap() {
    map.panTo({ lat: 24.9660, lng: 67.06718 });
  }

  function mapset(map) {
    return setMap(map);
  }


  const stopsMarkers = stopsCollection.map((stop) =>
    <Marker key={stop.name} position={stop.coord} title={stop.name} label={{ text: stop.name, color: 'black', fontWeight: '600' }} />

  )

  const individualitems = stopsList.map((element) =>
    <option key={element} value={element} >{element}</option>
  )




  const handleChange1 = (e) => {
    e.preventDefault();
    setDistance('')
    setDuration('')
    setOrigin(e.target.value);
  };

  const handleChange2 = (e) => {
    e.preventDefault();
    setDistance('')
    setDuration('')
    setDestination(e.target.value);
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
      origin: ((stopsList.indexOf(origin) < stopsList.indexOf(destination)) ? stopsCollection[stopsList.indexOf(destination)].coord : stopsCollection[stopsList.indexOf(origin)].coord),
      destination: ((stopsList.indexOf(origin) > stopsList.indexOf(destination)) ? stopsCollection[stopsList.indexOf(destination)].coord : stopsCollection[stopsList.indexOf(origin)].coord),
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
                  <input className='CalcBtn' value='See Route' type="submit" style={{ paddingLeft: '2rem', paddingRight: '2rem' }} />
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
