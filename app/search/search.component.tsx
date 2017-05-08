import AutoComplete from 'material-ui/AutoComplete';
import * as React from 'react';
import {Search} from './search.state';
import {Place} from './search.state';

interface Props {
  search: Search;
  fetchSearchPlaces(term: string);
  fetchCurrentWeather(place: Place);
}

export class SearchComponent extends React.Component<Props, any> {

  constructor(props, context) {
    super(props, context);

    this._onUpdateInput = this._onUpdateInput.bind(this);
    this._onSelected = this._onSelected.bind(this);
  }

  _onUpdateInput(value) {
    this.props.fetchSearchPlaces(value);
  }

  _onSelected(chosenRequest: string, index: number) {
    this.props.fetchCurrentWeather(this.props.search.places[index]);
  }

  render() {
    return (
      <div>
        <AutoComplete
          floatingLabelText="Search"
          openOnFocus={true}
          dataSource={this.props.search.places.map((place) => place.formatted_address)}
          onUpdateInput={this._onUpdateInput}
          onNewRequest={this._onSelected}
          fullWidth={true}
        />
      </div>
    );
  }
}
