import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from '@material-ui/icons/Close';


class SnackBarComponent extends Component {

    render() {
        //destructure props
        const { classes, handleClose, type, open } = this.props;
        return (
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    //tells the snackbar when to open, is either true or false
                    open={open}
                    autoHideDuration={2000}
                    onClose={handleClose}
                    SnackbarContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    //message is passed as a prop
                    message={<span id="message-id">{type}</span>}
                    action={[
                        //button to close snackbar
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={classes.close}
                            onClick={handleClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </div>
        )
    }
}

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4
  }
});

export default withStyles(styles)(SnackBarComponent);