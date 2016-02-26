module.exports = function getReviewsFromLocalStorage () {
  var SLICE_BEGIN = 0
  var SLICE_END = 3

  var reviews = []
  var keys = Object.keys(window.localStorage).slice(SLICE_BEGIN, SLICE_END)

  keys.forEach(function (key) {
    reviews.push(JSON.parse(window.localStorage.getItem(key)))
    window.localStorage.removeItem(key)
  })

  return {
    reviews: reviews
  , reviewsRemaining: window.localStorage.length
  }
}
