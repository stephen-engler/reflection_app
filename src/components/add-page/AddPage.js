import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {withStyles} from 'material-ui/styles';
import { connect } from 'react-redux';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: theme.palette.background.paper,

    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
        backgroundColor: theme.palette.background.default,

    },
    menu: {
        width: '100%',

    },
});

class AddPage extends Component {
    constructor(props){
        super(props)
        this.state={
            userInput: {
                topic: '',
                reflection: '',
            }
        }
    }

    handleChangeFor = (type) => {
        return (event) => {
            this.setState({
                userInput: {
                    ...this.state.userInput,
                    [type]: event.target.value
                }
            })
        }
    }

    addNewReflection = ()=>{
        this.props.dispatch({type: 'ADD_REF', payload: this.state.userInput})
        this.setState({
            userInput:{
                topic: '',
                reflection: '',
            }
        })
    }


    render() {
        return (
            <div className={this.props.classes.container}>
                <input 
                    type="text" 
                    value={this.state.userInput.topic} 
                    placeholder="topic"
                    onChange={this.handleChangeFor('topic')}
                />
                <input 
                    type="text" 
                    value={this.state.userInput.reflection} 
                    placeholder="reflection"
                    onChange={this.handleChangeFor('reflection')}
                />
                <button onClick={this.addNewReflection}>
                    Submit
                </button>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    state,
});

export default connect(mapStateToProps)(withStyles(styles)(AddPage));