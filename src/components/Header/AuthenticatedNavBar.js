import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {makeStyles} from '@material-ui/core/styles';
import {CREATE_NEW_POST, ROOMS, ROOM} from "../../constant";
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import {signOut} from "../../lib/jsUtils";


const useStyles = makeStyles((theme) => ({
    text: {
        color: 'white'
    }
}));


const AuthenticatedNavBar = () => {
    const classes = useStyles();
    const [showLogoutDialog, setShowLogOutDialog] = useState(false);
    return <div>
        <Button component={Link} to={ROOM} className={classes.text}>
            Enter Room
        </Button>
        <Button component={Link} to={CREATE_NEW_POST} className={classes.text}>
            Create Room
        </Button>
        <Button component={Link} to={ROOMS} className={classes.text}>
            Rooms
        </Button>
        <Button onClick={() => setShowLogOutDialog(true)} className={classes.text}>
            Log Out
        </Button>
        {showLogoutDialog ? <LogOutDialog/> : null}
    </div>
};

const LogOutDialog = () => {
    const [open, setOpen] = useState(true);

    const handleCancel = () => {
        setOpen(false)
    };

    const handleOk = () => {
        setOpen(false);
        signOut();
        window.location.href = '/'
    };

    return (
        <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            fullWidth
            maxWidth="xs"
            open={open}
        >
            <DialogTitle id="confirmation-dialog-title">Log Out Confirmation</DialogTitle>
            <DialogContent dividers>
                Are you sure you want to logout? <span aria-label='sad' role='img'> &#128561;</span>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleCancel} color="default">
                    Cancel
                </Button>
                <Button onClick={handleOk} color="secondary">
                    Log Out
                </Button>
            </DialogActions>
        </Dialog>
    );
};


export default AuthenticatedNavBar;
