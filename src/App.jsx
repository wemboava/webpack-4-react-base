import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return (
        <div>
            <p>React here3!</p>
            <img className="test-img" src={require('_img/image.jpeg')} alt="" />
        </div>
    )
}

export default App

ReactDOM.render(<App />, document.getElementById('app'))