import React, { Component } from 'react';
//redux
import { connect } from 'react-redux';

//material
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent } from 'material-ui/Card';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    card: {
        width: 300,
        margin: 20
    },

    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

class ViewItem extends Component {
    
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

    render() {
        const classes = this.props.classes
        return (
            <div className = {classes.root}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title}>
                            {this.props.reflection.topic}
                        </Typography>
                        <Typography className={classes.pos}>
                            {this.props.reflection.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
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
                    </CardActions>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    state,
});

export default withStyles(styles)(connect(mapStateToProps)(ViewItem));