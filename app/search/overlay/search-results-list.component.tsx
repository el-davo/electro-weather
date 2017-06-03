import { List, ListItem } from 'material-ui/List';
import { darkWhite } from 'material-ui/styles/colors';
import * as React from 'react';
import { LoadingComponent } from '../../common/loading.component';
import { Place, Search } from '../search.state';

interface Props {
    search: Search;
    selectPlace(place: Place);
}

const style = {
    results: {
        background: darkWhite
    },
    noResults: {
        textAlign: 'center',
        color: darkWhite,
        paddingTop: 100
    },
    loading: {
        paddingTop: 100
    }
};

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
            <div>
                {
                    this.props.search.isFetchingSearch ? (
                        <div style={style.loading}>
                            <LoadingComponent />
                        </div>
                    ) : (
                            this.props.search.places.length > 0 ? (
                                <List className="morphsearch-content">
                                    {
                                        this.props.search.places.map((place, key) => {
                                            return <ListItem
                                                key={key}
                                                onTouchTap={() => this._selectPlace(place)}
                                                primaryText={place.formatted_address}
                                                secondaryText={place.geometry.viewport.northeast.lat} />;
                                        })
                                    }
                                </List>
                            ) : (
                                    <div style={style.noResults}>No results match your search</div>
                                )
                        )
                }
            </div>
        );
    }
}
