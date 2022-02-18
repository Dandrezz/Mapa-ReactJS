import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params:{
        limit:4,
        access_token:'pk.eyJ1IjoiZGFuZHJlejI1IiwiYSI6ImNrenE4d3FheTB4MHkycXM4NXA1aWV5Y3UifQ.rmRZXvgYvSqPWDrL6KKpxg'
    }
})

export default searchApi;