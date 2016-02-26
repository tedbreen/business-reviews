var React = require('react')
// components
var Review = require('../review/')
var Button = require('../button/')
// helper function; returns array of reviews, count of remaining reviews in storage/db/cache
var getReviews = require('../../lib/get-reviews-local-storage')

module.exports = React.createClass({
  propTypes: {
    initialReviews: React.PropTypes.arrayOf(React.PropTypes.shape({
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
    })
  )}

, getDefaultProps: function getDefaultProps () {
    return {
      initialReviews: []
    }
  }

, getInitialState: function getInitialState () {
    return {
      reviews: this.props.initialReviews
    , moreReviews: Boolean(window.localStorage.length)
    }
  }

, loadMoreReviews: function loadMoreReviews () {
    var response = getReviews()

    this.setState({
      reviews: this.state.reviews.concat(response.reviews)
    , moreReviews: Boolean(response.reviewsRemaining)
    })
  }

, render: function render () {
    var reviews = this.state.reviews.map(function map (review) {
      return (
        <Review
          key={review.id}
          rating={review.rating}
          date={review.date}
          reviewText={review.reviewText}
          user={review.user}
        />
      )
    })

    return (
      <div className="page">
        <div className="page-leftColumn">
          <ul className="page-reviewList">
            {reviews}
          </ul>
          <div className="page-button">
            <Button
              handleClick={this.loadMoreReviews}
              disabled={!this.state.moreReviews}
            >
              {'Load More'}
            </Button>
          </div>
        </div>
        <div className="page-rightColumn"></div>
      </div>
    )
  }
})
