import { darkWhite } from 'material-ui/styles/colors';
import * as React from 'react';

const style = {
    container: {
        textAlign: 'center',
        paddingTop: 200
    },
    text: {
        color: darkWhite,
        fontSize: 20
    }
};

export class CurrentLocationErrorComponent extends React.Component<any, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div style={style.container}>
                <div style={style.text}>
                    We were unable to retrieve your current location
                </div>
            </div>
        );
    }
}
