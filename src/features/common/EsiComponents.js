import React, { Component } from 'react';

import AsyncSelect from 'react-select/lib/Async';

import {find_stations, find_solar_systems, sort_by_name} from './ESI';

export default class EsiComponents extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="common-esi-components">
        <StationFinder /><br />
        <SystemFinder />
      </div>
    );
  }
}



const StationFinder = () => {
  const loadOptions = (s) => {
    return find_stations(s).then(sort_by_name);
  };

  return (
    <AsyncSelect
      loadOptions={loadOptions}
      getOptionLabel={(station => station.name)}
      getOptionValue={(option)=>option}
      onChange={(x) => console.log(x)}
    />
  );
};

const SystemFinder = () => {
  const load_options = (s) => {
    return find_solar_systems(s).then(sort_by_name);
  }
  return (
    <AsyncSelect
      loadOptions={load_options}
      getOptionLabel={(station => station.name)}
      getOptionValue={(option)=>option}
      onChange={(x) => console.log(x)}
    />
  );
};
