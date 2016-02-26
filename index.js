var React = require('react')
var ReactDOM = require('react-dom')

// components
var Page = require('./components/page/')

// constants
var SLICE_BEGIN = 0
var SLICE_END = 3

// seed data since we are not using a server
var data = require('./data/reviews.json')
var seedData = require('./lib/seed-data-local-storage')
var initialReviews = data.slice(SLICE_BEGIN, SLICE_END)
seedData(data, SLICE_END)

// render the page of reviews
ReactDOM.render(
  <Page initialReviews={initialReviews}/>
, document.getElementById('react')
)
