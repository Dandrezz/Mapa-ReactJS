import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MapsApp from './MapsApp'
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuZHJlejI1IiwiYSI6ImNrenE4d3FheTB4MHkycXM4NXA1aWV5Y3UifQ.rmRZXvgYvSqPWDrL6KKpxg'

if( !navigator.geolocation ){
  alert('Tu navegador no tiene opción de Geolocation')
  throw new Error('Tu navegador no tiene opción de Geolocation')
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
)
