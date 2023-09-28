import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  showText = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchResult = suggestionsList.filter(i =>
      i.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="c1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="i1"
        />

        {/* ???? */}

        <div className="c3">
          <div className="c2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="ii"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
          {/* d1 */}
          <ul>
            {searchResult.map(i => (
              <SuggestionItem details={i} key={i.id} showText={this.showText} />
            ))}
          </ul>
        </div>
        {/* ///// */}
      </div>
    )
  }
}
export default GoogleSuggestions
