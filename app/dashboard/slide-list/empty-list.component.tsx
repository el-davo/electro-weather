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

export class EmptyListComponent extends React.Component<any, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div style={style.container}>
                <div style={style.text}>
                    It looks like you have no saved locations
                    <br />
                    You can use the + to add one
                </div>
            </div>
        );
    }
}
