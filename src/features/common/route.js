// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import EsiComponents from './EsiComponents'

export default {
  path: 'common',
  name: 'Common',
  childRoutes: [
    { path: 'components', component: EsiComponents }
  ],
};
