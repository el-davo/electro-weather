import * as React from "react";
import {Search} from "../search.state";

interface Props {
    search: Search;
    hideSearchOverlay();
}

export class SearchOverlayComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this._hideSearchOverlay = this._hideSearchOverlay.bind(this);
    }

    _hideSearchOverlay() {
        this.props.hideSearchOverlay();
    }

    render() {
        return (
            <div className={this.props.search.showSearchOverlay ? 'morphsearch open' : 'morphsearch'}>
                <form className="morphsearch-form">
                    <input ref="searchInput"
                           className="morphsearch-input"
                           type="search"
                           placeholder="Search..."/>
                </form>
                <div className="morphsearch-content">

                </div>
                <span className="morphsearch-close" onClick={this._hideSearchOverlay}/>
            </div>
        );
    }
}
