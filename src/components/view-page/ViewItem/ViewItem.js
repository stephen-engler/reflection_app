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
    //makes cards wrap and with space between
    root: {
        display: 'inline-block',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    //gives height and width to cards
    card: {
        width: 300,
        height: 200,
        margin: 20
    },
    //set height for content
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
    //position of buttons 
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
    //expects an action string, sends the reflection as payload
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
    //snackbar opening and closing is handled in redux store
    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.props.dispatch({ type: 'CLOSE_SNACKBAR' })
    };

    render() {
        //destructure props
        const {classes, reflection} = this.props;
        const {snackBarReducer}= this.props.state;

        return (
            <div className = {classes.root}>
            {/* Card */}
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        {/* Topic */}
                        <Typography className={classes.title}>
                            {reflection.topic}
                        </Typography>
                        {/* Description */}
                        <Typography className={classes.pos}>
                            {reflection.description}
                        </Typography>
                    </CardContent>

                    <CardActions className={classes.cardActions}>
                    {/* Delete */}
                        <Button 
                            variant="raised" 
                            color="primary" 
                            size="small" 
                            onClick={this.handleClickFor('DELETE_REFLECTION')}>
                            Delete
                        </Button>
                        {/* Bookmark */}
                        <Button
                            variant="raised"
                            color="primary"
                            size="small"
                            onClick={this.handleClickFor('BOOKMARK_REFLECTION')}>
                            Bookmark
                        </Button>
                        {/* Shows Bookmark  if true*/}
                        {reflection.bookmarked && <Bookmark />}
                    </CardActions>
                </Card>
                {/* Snackbars */}
                <SnackBarComponent handleClose={this.handleClose}
                    open={snackBarReducer.bookmarked} type='Bookmarked' />
                <SnackBarComponent handleClose={this.handleClose}
                    open={snackBarReducer.deleted} type='Deleted' />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    state,
});

export default withStyles(styles)(connect(mapStateToProps)(ViewItem));