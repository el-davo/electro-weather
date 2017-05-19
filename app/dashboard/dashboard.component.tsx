import { Dashboard } from './dashboard.state';
import * as React from 'react';
import NavbarContainer from '../common/nav-bar.container';
import SearchOverlayContainer from '../search/overlay/search-overlay.container';
import WeatherContainer from '../weather/weather.container';
import { SplashScreenComponent } from './splash-screen.component';

interface Props {
    dashboard: Dashboard
}

export class DashboardComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                {
                    !this.props.dashboard.isInitializingApp ? (
                        <div>
                            <NavbarContainer />
                            <SearchOverlayContainer />
                            <WeatherContainer />
                        </div>
                    ) : (
                            <SplashScreenComponent />
                        )
                }
            </div>
        );
    }
}
