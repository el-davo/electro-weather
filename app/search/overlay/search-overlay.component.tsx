import * as React from 'react';
import {Place, Search} from '../search.state';
import {SearchResultsListComponent} from './search-results-list.component';

interface Props {
    search: Search;
    hideSearchOverlay();
    fetchSearchPlaces(term: string);
    selectPlace(place: Place);
}

export class SearchOverlayComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this._hideSearchOverlay = this._hideSearchOverlay.bind(this);
        this._fetchSearchPlaces = this._fetchSearchPlaces.bind(this);
    }

    _hideSearchOverlay() {
        this.props.hideSearchOverlay();
    }

    _fetchSearchPlaces(event) {
        this.props.fetchSearchPlaces(event.target.value);
    }

    render() {
        return (
            <div className={this.props.search.showSearchOverlay ? 'morphsearch open' : 'morphsearch'}>
                <form className="morphsearch-form">
                    <input ref="searchInput"
                           className="morphsearch-input"
                           type="search"
                           onChange={this._fetchSearchPlaces}
                           placeholder="Search..."/>
                </form>
                <div className="morphsearch-content">
                    <SearchResultsListComponent
                        search={this.props.search}
                        selectPlace={this.props.selectPlace}/>
                </div>
                <span className="morphsearch-close" onClick={this._hideSearchOverlay}/>
            </div>
        );
    }
}
