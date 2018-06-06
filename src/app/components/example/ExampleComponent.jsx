import React from 'react'
import '_sass/components/example/exampleComponent.scss'

class ExampleComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <button className="btn">ToggleStatus</button>
            </div>
        )
    }
}
export default ExampleComponent