// THIS COMPONENT IS ONLY USED FOR THE DOCS
var React = require('react')

module.exports = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  , propList: React.PropTypes.arrayOf(React.PropTypes.string)
  , children: React.PropTypes.node
  }

, getDefaultProps: function getDefaultProps () {
    return {
      propList: []
    }
  }

, render: function render () {
    var propList = this.props.propList.map(function map (prop, idx) {
      return <li key={idx}>{prop}</li>
    })

    return (
      <div className="documentation-componentContainer">
        <h2>{this.props.name}</h2>
        <div className="documentation-componentContainer-container">{this.props.children}</div>
        <h3>{'Props'}</h3>
        <ul className="documentation-componentProps">
          {propList}
        </ul>
      </div>
    )
  }
})
