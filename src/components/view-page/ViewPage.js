import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewItem from './ViewItem/ViewItem';



class ViewPage extends Component {
    componentDidMount(){
        //gets the reflections from db
        this.props.dispatch({
            type:'GET_REF'
        })
    }
    render() {
        //loops over array, makes a viewItem for each
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


//gives access to redux store
const mapStateToProps = state => ({
    state,
});

export default connect(mapStateToProps)(ViewPage);