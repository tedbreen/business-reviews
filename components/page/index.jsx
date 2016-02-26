var React = require('react')

module.exports = React.createClass({
  render: function render () {
    return (
      <div className="page">
        <div className="page-leftColumn">
          <ul className="page-reviewList">
          </ul>
        </div>
        <div className="page-rightColumn"></div>
      </div>
    )
  }
})
