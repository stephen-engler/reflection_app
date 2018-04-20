import React, { Component } from 'react';
//redux
import { connect } from 'react-redux';

//material
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent } from 'material-ui/Card';

const styles = {
    card: {
        minWidth: 275,
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
    
    render() {
        const classes = this.props.classes
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title}>
                            {this.props.reflection.topic}
                        </Typography>
                        <Typography className={classes.pos}>
                            {this.props.reflection.description}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    state,
});

export default withStyles(styles)(connect(mapStateToProps)(ViewItem));