var React = require('react')
var classnames = require('classnames')

var YEAR_ABBREV = 2

module.exports = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  , profileURL: React.PropTypes.string
  , location: React.PropTypes.string
  , friendCount: React.PropTypes.number
  , reviewCount: React.PropTypes.number
  , eliteYear: React.PropTypes.string
  }

, render: function render () {
    var friendIconClasses = classnames(
      'userInfo-icon'
    , 'userInfo-icon-common-sprite'
    , 'userInfo-icon-friend'
    )
    var reviewIconClasses = classnames(
      'userInfo-icon'
    , 'userInfo-icon-common-sprite'
    , 'userInfo-icon-star'
    )
    var eliteYear
    if (this.props.eliteYear) {
      eliteYear = 'Elite \'' + this.props.eliteYear.slice(YEAR_ABBREV)
    }

    return (
      <ul className="userInfo">
        <li className="userInfo-name">
          <a href={this.props.profileURL} target="_blank">
            <strong>{this.props.name}</strong>
          </a>
        </li>
        <li>
          <small>
            <strong>{this.props.location}</strong>
          </small>
        </li>
        <li>
          <i className={friendIconClasses}></i>
          <small>
            <strong>{this.props.friendCount}</strong>
            <span>{' friends'}</span>
          </small>
        </li>
        <li>
          <i className={reviewIconClasses}></i>
          <small>
            <strong>{this.props.reviewCount}</strong>
            <span>{' reviews'}</span>
          </small>
        </li>
        <li>
          <a className="userInfo-elite" href="https://www.yelp.com/elite" target="_blank">
            <small>
              <strong>{eliteYear}</strong>
            </small>
          </a>
        </li>
      </ul>
    )
  }
})
