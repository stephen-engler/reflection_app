import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewItem from './ViewItem/ViewItem';



class ViewPage extends Component {
    componentDidMount(){
        this.props.dispatch({
            type:'GET_REF'
        })
    }
    render() {
        let reflection = this.props.state.reflectionList.map((reflection)=>{
            return (
                <ViewItem className ="wrap" key={reflection.id} reflection={reflection}/>
            )
        })
        return (
            <div>
                {reflection}
            </div>
        );
    }
}



const mapStateToProps = state => ({
    state,
});

export default connect(mapStateToProps)(ViewPage);