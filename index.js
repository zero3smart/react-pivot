var css = require('sheetify')
var React = require('react')
var ReactDOM = require('react-dom')

var Report = require('./report.jsx')

css('./style.css', { global: true })

var el = document.createElement('div')
el.classList.add('report')
document.body.appendChild(el)

ReactDOM.render(React.createElement(Report), el)
