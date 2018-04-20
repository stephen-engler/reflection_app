import React, { Component } from 'react';
import { connect } from 'react-redux';



class ViewPage extends Component {
    componentDidMount(){
        this.props.dispatch({
            type:'GET_REF'
        })
    }
    render() {
        return (
            <div className="App">
                <p>view page</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    state,
});

export default connect(mapStateToProps)(ViewPage);