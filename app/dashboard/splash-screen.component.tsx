import * as React from 'react';
import NavbarContainer from '../common/nav-bar.container';
import SearchOverlayContainer from '../search/overlay/search-overlay.container';

export class SplashScreenComponent extends React.Component<any, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                Loading...
            </div>
        );
    }
}
