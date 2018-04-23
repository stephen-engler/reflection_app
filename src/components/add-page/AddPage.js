import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {withStyles} from 'material-ui/styles';
import { connect } from 'react-redux';
import { Button } from 'material-ui';


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

const mapStateToProps = state => ({
    state,
});

export default connect(mapStateToProps)(withStyles(styles)(AddPage));