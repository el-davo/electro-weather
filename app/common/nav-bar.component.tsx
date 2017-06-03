import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import AddButtonIcon from 'material-ui/svg-icons/content/add';
import * as React from 'react';

interface Props {
    showSearchOverlay();
}

const style = {
    appBar: {
        background: 'none',
        position: 'absolute',
        boxShadow: 'none'
    }
};

export class NavBarComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this._showSearchOverlay = this._showSearchOverlay.bind(this);
    }

    _showSearchOverlay() {
        this.props.showSearchOverlay();
    }

    render() {
        return (
            <AppBar
                style={style.appBar}
                showMenuIconButton={false}
                iconElementRight={<IconButton onTouchTap={this._showSearchOverlay}><AddButtonIcon /></IconButton>}
            />
        );
    }
}
