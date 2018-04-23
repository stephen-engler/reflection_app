import React, { Component } from 'react';
//redux
import { connect } from 'react-redux';

//material
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Bookmark from '@material-ui/icons/Bookmark'

import SnackBarComponent from '../../SnackBar/SnackBarComponent'

const styles = {
    root: {
        display: 'inline-block',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    card: {
        width: 300,
        height: 200,
        margin: 20
    },
    cardContent:{
        height: 100,
    },

    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    cardActions: {
        position: 'relative',
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'flex-start',
        verticalAlign: 'bottom',
    }
};

class ViewItem extends Component {
    //returns a function for each click type
    handleClickFor=(type)=>{
        return (
            ()=>{
                this.props.dispatch({
                    type: type,
                    payload: this.props.reflection
                })
            }
        )
    }
    //closes the snackbar
    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.props.dispatch({ type: 'CLOSE_SNACKBAR' })
    };

    render() {
        const classes = this.props.classes
        return (
            <div className = {classes.root}>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography className={classes.title}>
                            {this.props.reflection.topic}
                        </Typography>
                        <Typography className={classes.pos}>
                            {this.props.reflection.description}
                        </Typography>
                        
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <Button 
                            variant="raised" 
                            color="primary" 
                            size="small" 
                            onClick={this.handleClickFor('DELETE_REFLECTION')}>
                            Delete
                        </Button>
                        <Button
                            variant="raised"
                            color="primary"
                            size="small"
                            onClick={this.handleClickFor('BOOKMARK_REFLECTION')}>
                            Bookmark
                        </Button>
                        {this.props.reflection.bookmarked && <Bookmark />}
                    </CardActions>
                </Card>
                <SnackBarComponent handleClose={this.handleClose}
                    open={this.props.state.snackBarReducer.bookmarked} type='Bookmarded' />
                <SnackBarComponent handleClose={this.handleClose}
                    open={this.props.state.snackBarReducer.deleted} type='Deleted' />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    state,
});

export default withStyles(styles)(connect(mapStateToProps)(ViewItem));