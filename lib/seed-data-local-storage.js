module.exports = function (data, sliceEnd) {
  var DEFAULT_SLICE_END = 0
  window.localStorage.clear()
  data.slice(sliceEnd || DEFAULT_SLICE_END).forEach(function (review) {
    window.localStorage.setItem(review.id, JSON.stringify(review))
  })
}
