import * as React from "react";
import {Place, Search} from "../search.state";
import {List, ListItem} from "material-ui/List";

interface Props {
    search: Search;
    selectPlace(place: Place);
}

export class SearchResultsListComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this._selectPlace = this._selectPlace.bind(this);
    }

    _selectPlace(place: Place) {
        this.props.selectPlace(place);
    }

    render() {
        return (
            <List>
                {
                    this.props.search.places.map((place, key) => {
                        return <ListItem
                            key={key}
                            onTouchTap={() => this._selectPlace(place)}
                            primaryText={place.formatted_address}
                            secondaryText={place.geometry.viewport.northeast.lat}/>
                    })
                }
            </List>
        );
    }
}
