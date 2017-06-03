import IconButton from 'material-ui/IconButton';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import * as React from 'react';
import ReactSlick from 'react-slick';
import { LoadingComponent } from '../../common/loading.component';
import CurrentLocationContainer from '../../current-location/current-location.container';
import { Place } from '../../search/search.state';
import { Dashboard, Places } from '../dashboard.state';
import { EmptyListComponent } from './empty-list.component';
import WeatherContainer from './weather.container';

interface Props {
    dashboard: Dashboard;
}

function NextArrow(props) {
    const { className, style, onClick } = props;

    return (
        <div
            className={className}
            style={{ ...style, position: 'absolute', top: 75, right: 0 }}
            onClick={onClick}
        >
            <IconButton tooltip="Next">
                <ArrowRight />
            </IconButton>
        </div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;

    return (
        <div
            className={className}
            style={{ ...style, position: 'absolute', top: 75, left: 0 }}
            onClick={onClick}
        >
            <IconButton tooltip="Previous">
                <ArrowLeft />
            </IconButton>
        </div>
    );
}

const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

export class SlideListComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <ReactSlick {...sliderSettings}>
                    <div>
                        <CurrentLocationContainer />
                    </div>
                    {
                        Object.keys(this.props.dashboard.places).map((key) => {
                            return <div key={key}>
                                <WeatherContainer
                                    place={this.props.dashboard.places[key]} />
                            </div>;
                        })
                    }
                </ReactSlick>
            </div>
        );
    }
}
