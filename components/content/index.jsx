var React = require('react')

// components
var Stars = require('../stars/')

module.exports = React.createClass({
  propTypes: {
    rating: React.PropTypes.number
  , date: React.PropTypes.number
  , text: React.PropTypes.string
  }

, getDefaultProps: function getDefaultProps () {
    return {
      rating: 0
    , text: ''
    }
  }

, render: function render () {
    return (
      <div className="content">
        <Stars
          size="xLarge"
          rating={this.props.rating}
          date={this.props.date}
        />
        <p>{this.props.text}</p>
      </div>
    )
  }
})
