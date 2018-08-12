import React from 'react';
import { shallow } from 'enzyme';
import { EsiSearch } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<EsiSearch />);
  expect(renderedComponent.find('.common-esi-search').length).toBe(1);
});
