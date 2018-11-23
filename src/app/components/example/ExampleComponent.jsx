import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeStatusExample } from '_actions/example/exampleAction'
import '_sass/components/example/exampleComponent.scss'

class ExampleComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.stateExample)
        return (
            <div>
                <button onClick={() => this.props.changeStatusExample(!this.props.stateExample)} className="btn">ToggleStatus</button>
                <span>{ `${this.props.stateExample} oi` }</span>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    stateExample: state.example.exampleState
})

const mapDispatchToProps = dispatch => bindActionCreators({ changeStatusExample }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent)
