var React = require('react')
// components
var Sidebar = require('../sidebar/')
var Content = require('../content/')

module.exports = React.createClass({
  propTypes: {
    rating: React.PropTypes.number
  , date: React.PropTypes.number
  , reviewText: React.PropTypes.string
  , user: React.PropTypes.shape({
      avatarURL: React.PropTypes.string
    , name: React.PropTypes.string
    , profileURL: React.PropTypes.string
    , location: React.PropTypes.string
    , reviewCount: React.PropTypes.number
    , friendCount: React.PropTypes.number
    , eliteYear: React.PropTypes.string
    })
  }

, getDefaultProps: function getDefaultProps () {
    return {
      user: {}
    }
  }

, render: function render () {
    var user = this.props.user

    return (
      <li className="review">
        <Sidebar
          avatarURL={user.avatarURL}
          name={user.name}
          profileURL={user.profileURL}
          location={user.location}
          reviewCount={user.reviewCount}
          friendCount={user.friendCount}
          eliteYear={user.eliteYear}
        />
        <Content
          rating={this.props.rating}
          date={this.props.date}
          text={this.props.reviewText}
        />
      </li>
    )
  }
})

