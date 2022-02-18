import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params:{
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token:'pk.eyJ1IjoiZGFuZHJlejI1IiwiYSI6ImNrenE4d3FheTB4MHkycXM4NXA1aWV5Y3UifQ.rmRZXvgYvSqPWDrL6KKpxg'
    }
})

export default searchApi;