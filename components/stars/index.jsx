var React = require('react')
var classnames = require('classnames')
var moment = require('moment')

// constants
var WHOLE_VALUE = 1
var ZERO = 0
var MILLISECONDS = 1000

module.exports = React.createClass({
  propTypes: {
    size: React.PropTypes.oneOf(['regular', 'xLarge'])
  , rating: React.PropTypes.number
  , date: React.PropTypes.number
  }

, getDefaultProps: function getDefaultProps () {
    return {
      size: 'regular'
    , rating: 0
    }
  }

, render: function render () {
    var containerClass = 'stars-' + this.props.size

    // convert unix timestamp to string format
    var date = this.props.date ? moment(this.props.date * MILLISECONDS).format('l') : ''

    // determine if rating contains half stars, append suffix accordingly
    var stars = containerClass + '-' + Math.floor(this.props.rating)
    var starClasses

    if (this.props.rating % WHOLE_VALUE !== ZERO) {
      stars += '-half'
    }

    starClasses = classnames('stars-img', stars)

    return (
      <div className="stars">
        <div className={containerClass}>
          <i className={starClasses}></i>
        </div>
        <div className="stars-date">{date}</div>
      </div>
    )
  }
})
