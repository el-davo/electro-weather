import * as React from 'react';
import ReactSlick from 'react-slick';
import { LoadingComponent } from '../../common/loading.component';
import { Place } from '../../search/search.state';
import { Dashboard, Places } from '../dashboard.state';
import WeatherContainer from './weather.container';

interface Props {
    dashboard: Dashboard;
}

const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

export class SlideListComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <ReactSlick {...sliderSettings}>
                    {
                        Object.keys(this.props.dashboard.places).map((key) => {
                            return <div key={key}><WeatherContainer place={this.props.dashboard.places[key]} /></div>;
                        })
                    }
                </ReactSlick>
            </div>
        );
    }
}
