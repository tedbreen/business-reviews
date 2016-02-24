var React = require('react')
// components
var Avatar = require('../avatar/')
var UserInfo = require('../user-info/')

module.exports = React.createClass({
  propTypes: {
    avatarURL: React.PropTypes.string
  , name: React.PropTypes.string
  , profileURL: React.PropTypes.string
  , location: React.PropTypes.string
  , reviewCount: React.PropTypes.number
  , friendCount: React.PropTypes.number
  , eliteYear: React.PropTypes.string
  }

, getDefaultProps: function getDefaultProps () {
    return {
      name: ''
    , profileURL: ''
    , location: ''
    , reviewCount: null
    , friendCount: null
    , eliteYear: ''
    }
  }

, render: function render () {
    return (
      <div className="sidebar">
        <Avatar
          url={this.props.avatarURL}
          profileURL={this.props.profileURL}
        />
        <UserInfo
          name={this.props.name}
          profileURL={this.props.profileURL}
          location={this.props.location}
          reviewCount={this.props.reviewCount}
          friendCount={this.props.friendCount}
          eliteYear={this.props.eliteYear}
        />
      </div>
    )
  }
})

