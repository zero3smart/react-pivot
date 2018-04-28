var React = require('react')
var ReactDOM = require('react-dom')
var ReactPivot = require('react-pivot')
var createReactClass = require('create-react-class')
var data = require('./data.json')

var dimensions = [
  {value: 'date', title: 'Date'},
  {value: 'host', title: 'Host'}
]

var reduce = function (row, memo) {
  if (row.type === "impression")
    memo.impressions = (memo.impressions || 0) + 1
  else if (row.type === "load")
    memo.loads = (memo.loads || 0) + 1
  else if (row.type === "display")
    memo.displays = (memo.displays || 0) + 1

  return memo
}

var calculations = [
  {
    title: 'Impressions',
    value: 'impressions',
    className: 'alignRight'
  },
  {
    title: 'Loads',
    value: 'loads',
    className: 'alignRight'
  },
  {
    title: 'Displays',
    value: 'displays',
    className: 'alignRight'
  },
  {
    title: 'Load Rate',
    value: function (row) {
      return row.loads / row.impressions * 100
    },
    template: function (val, row) {
      return val.toFixed(1) + '%'
    },
    className: 'alignRight'
  },
  {
    title: 'Display Rate',
    value: function (row) {
      return row.displays / row.loads * 100
    },
    template: function (val, row) {
      return val.toFixed(1) + '%'
    },
    className: 'alignRight'
  }
]

var Demo = createReactClass({
  render: function () {
    return (
      <div className='demo'>
        <ReactPivot rows={data}
          dimensions={dimensions}
          calculations={calculations}
          reduce={reduce}
          activeDimensions={['Date', 'Host']}
          nPaginateRows={20} />
      </div>
    )
  }
})

module.exports = Demo
