import {mount} from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';
import {LoadingComponent} from './loading.component';

describe('<TodoComponent />', () => {

  let wrapper;

  beforeEach(() => {

    wrapper = mount(<MuiThemeProvider><LoadingComponent /></MuiThemeProvider>);
  });

  it('should display a loading message', () => {
    wrapper.find('div[children="Loading..."]').should.have.length(1);
  });

});
