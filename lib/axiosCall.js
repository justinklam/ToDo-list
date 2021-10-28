const axios = require('axios');

const yelpAxios = axios.create({

  baseURL: 'https://api.yelp.com/v3',
  timeout: 1000,
  headers: {'Authorization': `Bearer ${process.env.YELP_APIKEY}`}

});

module.exports = yelpAxios;
