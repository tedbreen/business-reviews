var React = require('react')

module.exports = React.createClass({
  propTypes: {
    url: React.PropTypes.string
  , width: React.PropTypes.number
  , height: React.PropTypes.number
  , alt: React.PropTypes.string
  }

, getDefaultProps: function getDefaultProps () {
    return {
      url: 'http://res.cloudinary.com/tedbreen/image/upload/v1456247144/user_60_square_omxwrb.png'
    , width: 60
    , height: 60
    , alt: 'avatar'
    }
  }

, render: function render () {
    return (
      <div className="avatar">
        <img
          className="avatar-image"
          src={this.props.url}
          width={this.props.width}
          height={this.props.height}
          alt={this.props.alt}
        />
      </div>
    )
  }
})
