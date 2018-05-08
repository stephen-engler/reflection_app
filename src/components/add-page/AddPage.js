import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {withStyles} from 'material-ui/styles';
import { connect } from 'react-redux';
import { Button } from 'material-ui';



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
    // curried function returns function to be called on click
    //expects the state object parameter as a string
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
    //dispatches the ADD_REF action, sends state.userInput as its payload
    //resets state
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
                {/* Topic Text field */}
                <TextField 
                    id="textarea"
                    label="topic"
                    multiline
                    type="text" 
                    value={this.state.userInput.topic} 
                    placeholder="topic"
                    onChange={this.handleChangeFor('topic')}
                    className={this.props.classes.textField}
                />
                {/* Reflection text field */}
                <TextField 
                    id="textarea"
                    label="description"
                    type="text" 
                    multiline
                    rows='4'
                    value={this.state.userInput.reflection} 
                    placeholder="reflection"
                    onChange={this.handleChangeFor('reflection')}
                    className={this.props.classes.textField}
                />
                {/* Submit button */}
                <Button 
                    onClick={this.addNewReflection}
                    variant='raised'
                    color='primary'
                    >
                    Submit
                </Button>

            </div>
        );
    }
}

// styles for the component
// added to the withStyles higher order component 
//which returns this component with the classes added onto props
const styles = {
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    textField: {
        width: 400,
        marginBottom: 20,     
    },
};

const mapStateToProps = state => ({
    state,
});

export default connect(mapStateToProps)(withStyles(styles)(AddPage));