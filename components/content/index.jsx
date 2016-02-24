var React = require('react')

// components
var Stars = require('../stars/')

// constants
var EMPTY_STRING = 0

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
    // parse text for html <p> tags and convert to <p> elements
    var paragraphs = this.props.text.split(/<p>|<\/p>/)
      .filter(function filter (str) {
      return str.length > EMPTY_STRING
    }).map(function map (str, idx) {
      return <p className="content-paragraph" key={idx}>{str}</p>
    })

    return (
      <div className="content">
        <Stars
          size="xLarge"
          rating={this.props.rating}
          date={this.props.date}
        />
        {paragraphs}
      </div>
    )
  }
})
