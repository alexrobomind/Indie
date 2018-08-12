import React from 'react';
import { shallow } from 'enzyme';
import { EsiComponents } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<EsiComponents />);
  expect(renderedComponent.find('.common-esi-components').length).toBe(1);
});
