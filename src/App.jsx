import React from 'react'
import '_sass/_main.scss'

const App = () => {
    return (
        <div>
            <p>React here3!</p>
            <img className="test-img" src={require('_img/image.jpeg')} alt="" />
        </div>
    )
}

export default App