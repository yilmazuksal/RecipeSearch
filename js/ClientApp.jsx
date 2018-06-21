// @flow

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Perf from 'react-addons-perf'
import Comp from './Comp'

window.Perf = Perf
Perf.start()

const renderApp = () => {
  const container = document.getElementById('app')
  if (container)
    render(<BrowserRouter><Comp /></BrowserRouter>, container)
}

renderApp()

if (module.hot) {
  module.hot.accept('./Comp', () => {
    renderApp()
  })
}



