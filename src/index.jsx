import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from '_app/store'

import App from '_src/App.jsx'

render(
    <Provider store={Store}>
        <App />
    </ Provider>,
    document.getElementById('app')
)