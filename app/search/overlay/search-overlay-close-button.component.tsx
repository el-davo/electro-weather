import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import StopIcon from 'material-ui/svg-icons/navigation/close';
import { darkWhite } from 'material-ui/styles/colors';
import { Place, Search } from '../search.state';
import { SearchResultsListComponent } from './search-results-list.component';

interface Props {
    hideSearchOverlay();
}

const style = {
    closeButton: {
        position: 'absolute',
        top: 8,
        right: 8,
        zIndex: 9999
    },
    closeIcon: {
        width: 25,
        height: 25
    }
}

export class SearchOverlayCloseButtonComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this._hideSearchOverlay = this._hideSearchOverlay.bind(this);
    }

    _hideSearchOverlay() {
        this.props.hideSearchOverlay();
    }

    render() {
        return (
            <IconButton style={style.closeButton}
                iconStyle={style.closeIcon}
                onClick={this._hideSearchOverlay}>
                <StopIcon color={darkWhite} />
            </IconButton>
        );
    }
}
