var React = require('react')
var noop = function noop () {
  return
}

module.exports = React.createClass({
  propTypes: {
    children: React.PropTypes.string
  , handleClick: React.PropTypes.func
  , disabled: React.PropTypes.bool
  }

, getDefaultProps: function getDefaultProps () {
    return {
      handleClick: noop
    , disabled: true
    }
}

, render: function render () {
    return (
      <button
        className="button"
        onClick={this.props.handleClick}
        disabled={this.props.disabled}
      >
        {this.props.children}
      </button>
    )
  }
})
