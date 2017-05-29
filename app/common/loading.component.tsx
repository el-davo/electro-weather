import * as React from 'react';
import { darkWhite } from 'material-ui/styles/colors';

const style = {
  textAlign: 'center',
  color: darkWhite
}

export class LoadingComponent extends React.Component<any, any> {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div style={style}>
        Loading...
      </div>
    );
  }
}
