import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/market/DefaultPage';

describe('market/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      market: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.market-default-page').length
    ).toBe(1);
  });
});
