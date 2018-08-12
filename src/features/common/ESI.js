const axios = require('axios');

const base_url = 'https://esi.evetech.net/latest';

const debug_catch_handler = (error) => {
        // Error
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            console.log(error.request);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
};

const api_debug = false;

const api_get = (endpoint, params) => {
  var result = axios.get(base_url + endpoint, params).then((x) => x.data);

  if(api_debug) {
    console.log('Request on ' + endpoint);
    console.log(params);
    result = result.then((x) => {console.log(x); return x;}).catch(debug_catch_handler);
  }

  return result;
}

const get_solar_system = (id) => {
  return api_get('/universe/systems/' + id);
};

const get_station = (id) => {
  return api_get('/universe/stations/' + id);
}

/** Finds all objects in the given list of categories and returns them grouped by categories (ESI Wrapper)  */
const search = (categories, search_string) => {
  const search_params = {
    categories : categories.join(","),
    search : search_string
  };

  return api_get('/search/', {params: search_params});
};

const find_objects = (category, handler, search_string) => {
  return search([category], search_string).then((result) => {
    if(result[category])
      return Promise.all(result[category].map(handler));
    else
      return Promise.resolve([]);
  })
}

const find_solar_systems = (search_string) => {
  return find_objects("solar_system", get_solar_system, search_string);
}

const find_stations = (search_string) => {
  return find_objects("station", get_station, search_string);
}

export {find_solar_systems, find_stations};

const sort_by_name = (data) => {
  return data.concat().sort((a, b) => a.name > b.name);
}

export {sort_by_name};