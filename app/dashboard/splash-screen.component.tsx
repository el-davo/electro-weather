import * as React from 'react';
import { LoadingComponent } from '../common/loading.component';
import NavbarContainer from '../common/nav-bar.container';
import SearchOverlayContainer from '../search/overlay/search-overlay.container';

const style = {
    paddingTop: 200
};

export class SplashScreenComponent extends React.Component<any, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div style={style}>
                <LoadingComponent />
            </div>
        );
    }
}
