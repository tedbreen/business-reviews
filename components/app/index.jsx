var React = require('react')

module.exports = React.createClass({
  render: function render () {
    return (
      <div className="app">
        <div className="app-leftColumn">
          <ul className="app-reviewList">
          </ul>
        </div>
        <div className="app-rightColumn"></div>
      </div>
    )
  }
})
