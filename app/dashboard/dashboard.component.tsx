import * as React from 'react';
import NavbarContainer from '../common/nav-bar.container';
import SearchOverlayContainer from '../search/overlay/search-overlay.container';
import WeatherContainer from '../weather/weather.container';

export class DashboardComponent extends React.Component<any, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <NavbarContainer />
                <SearchOverlayContainer />
                <WeatherContainer />
            </div>
        );
    }
}
