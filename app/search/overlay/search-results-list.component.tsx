import * as React from "react";
import { Place, Search } from '../search.state';
import { List, ListItem } from 'material-ui/List';

interface Props {
    search: Search;
    hideSearchOverlay();
    fetchCurrentWeather(place: Place);
}

export class SearchResultsListComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this._hideSearchOverlay = this._hideSearchOverlay.bind(this);
        this._fetchCurrentWeather = this._fetchCurrentWeather.bind(this);
    }

    _hideSearchOverlay() {
        this.props.hideSearchOverlay();
    }

    _fetchCurrentWeather(place: Place) {
        this.props.fetchCurrentWeather(place);
        this.props.hideSearchOverlay();
    }

    render() {
        return (
            <List>
                {
                    this.props.search.places.map((place, key) => {
                        return <ListItem
                            key={key}
                            onTouchTap={() => this._fetchCurrentWeather(place)}
                            primaryText={place.formatted_address}
                            secondaryText={place.geometry.viewport.northeast.lat} />
                    })
                }
            </List>
        );
    }
}
