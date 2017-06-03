import * as Loader from 'halogen/ClipLoader';
import { darkWhite } from 'material-ui/styles/colors';
import * as React from 'react';

const style = {
  textAlign: 'center'
};

const SIZE = '25px';

export class LoadingComponent extends React.Component<any, any> {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div style={style}>
        <Loader color={darkWhite} size={SIZE} />
      </div>
    );
  }
}
