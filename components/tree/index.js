// THIS COMPONENT IS ONLY USED FOR THE DOCS
var React = require('react')
var ReactDOM = require('react-dom')

module.exports = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  }

, render: function render () {
    return (
      <ul className="documentation-tree">
        <li>
          {this.props.title}
          {this.props.children}
        </li>
      </ul>
    )
  }
})
