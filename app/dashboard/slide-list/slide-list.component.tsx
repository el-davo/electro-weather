import * as React from 'react';
import ReactSlick from 'react-slick';
import IconButton from 'material-ui/IconButton';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import { LoadingComponent } from '../../common/loading.component';
import { Place } from '../../search/search.state';
import { Dashboard, Places } from '../dashboard.state';
import WeatherContainer from './weather.container';

interface Props {
    dashboard: Dashboard;
}

function NextArrow(props) {
    const { className, style, onClick } = props

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
    const { className, style, onClick } = props

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

        this.state = {};
    }

    render() {
        return (
            <div>
                <ReactSlick ref={slider => this.state.slider = slider} {...sliderSettings}>
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
