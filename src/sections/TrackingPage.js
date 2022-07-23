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
  const [Text, setText] = useState('See Stops')
  const [btnColor, setbtnColor] = useState('btnColor-1')


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBLQSJcaTQHHsQ8N6k1takZ-WbvtiW3s98",
    // libraries: ['places']
  })


  const center = { lat: 24.9660, lng: 67.06718 }

  function centerMap() {
    map.panTo(center);

  }

  function mapset(map) {
    return setMap(map);
  }


  const stopsMarkers = stopsCollection?.map((stop) =>
    <Marker animation={2} key={stop.name} position={stop.coord} title={stop.name} label={{ text: stop.name, className: "markerLabel", color: 'black', fontWeight: '600' }} />

  )


  var originMarker = stopsCollection[stopsList.indexOf(origin)]
  var destinationMarker = stopsCollection[stopsList.indexOf(destination)]







  const individualitems = stopsList.map((element) =>
    <option key={element} value={element} >{element}</option>
  )




  const handleChange1 = (e) => {
    e.preventDefault();
    setDistance('')
    setDuration('')
    setOrigin(e.target.value);
    setDirectionResponse(null)
    map.panTo(originMarker.coord)
  };

  const handleChange2 = (e) => {
    e.preventDefault();
    setDistance('')
    setDuration('')
    setDestination(e.target.value);
    setDirectionResponse(null)
    map.panTo(destinationMarker.coord)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    directionOnMap()
  }

  function showStops() {
    if (mrks === true) {
      setText('See Stops')
      setmrks(false);
      setbtnColor('btnColor-1')
    }
    else {
      setText('Hide Stops')
      setbtnColor('btnColor-2')
      setmrks(true);
    }
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

      <div data-aos="zoom-in" data-aos-duration="1000" style={{ height: '100vh', position: 'relative' }}>
        <div id='TrackingPage' className='mapDiv' >
          <GoogleMap
            center={center}
            onClick={directionResponse}
            zoom={12}
            mapContainerStyle={{ position: 'absolute', width: '100%', height: '100vh' }}
            options={{
              zoomControl: false,
              fullscreenControl: false,
              mapTypeControl: false,
            }}
            onLoad={(map => mapset(map))}

          >
            {(originMarker !== destinationMarker) ? <>
              <Marker animation={2} key={originMarker.name} position={originMarker.coord} title={originMarker.name} label={{ text: originMarker.name, className: "markerLabel", color: 'black', fontWeight: '600' }} />
              <Marker animation={2} key={destinationMarker.name} position={destinationMarker.coord} title={destinationMarker.name} label={{ text: destinationMarker.name, className: "markerLabel", color: 'black', fontWeight: '600' }} />
            </> : <Marker animation={2} key={originMarker.name} position={originMarker.coord} title={originMarker.name} label={{ text: originMarker.name, className: "markerLabel", color: 'black', fontWeight: '600' }} />}
            {mrks && stopsMarkers}
            {directionResponse && <DirectionsRenderer directions={directionResponse} />}

          </GoogleMap>
        </div>
        <div style={{ position: 'relative', float: 'right', width: '18rem', marginRight: '3vw' }}>
          <div data-aos="flip-right" data-aos-duration="1500" className='mainDiv'>
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
                  <input className='CalcBtn' value='See Route' type="submit" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }} />
                </div>
              </form>
              <div style={{ width: '15rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <button className={`stopsBtn ${btnColor}`} onClick={showStops} style={{ width: 'max-content', textAlign: 'right', padding: '0.5rem 1.5rem 0 1.5rem' }}>{Text}</button>
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
