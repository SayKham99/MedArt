import * as React from 'react';
import {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Success from "../Alerts/Alert";
import Descline from "../Alerts/Decline";
import Logo from "../../assets/icons/logo.png";
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function FormDialog() {
    const [open, setOpen] = useState(false);

    const [success, setSucces] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCloseSucces = () => {
        setOpen(false);
        setSucces(<Success />)
    };

    const handleCloseDecline = () => {
        setOpen(false);
        setSucces(<Descline />)
    };

    useEffect(() => {
        setTimeout(() => {
            handleClickOpen()
        }, 5000)
    }, []);

    return (
        <div>
            {success}
            <Dialog open={open} onClose={handleCloseDecline} TransitionComponent={Transition}>
                <div className="popup-logo" style={{justifyContent: "center", textAlign: "center"}}>
                    <img src={Logo} style={{width: "150px", paddingTop: "20px"}}/>
                </div>
                <DialogTitle>Biz blan boglaning</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Bepul maslahat olish uchun mutahasislarimiz siz bilan 3 daqidata boglanadi
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Ismingizni kiriting "
                        type="text"
                        fullWidth
                        variant="standard"
                        style={{margin: "20px auto 0 auto", maxWidth: "500px"}}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Tel raqamingizni kirgazing "
                        type="text"
                        fullWidth
                        variant="standard"
                        style={{margin: "20px auto 0 auto", maxWidth: "500px"}}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDecline}>Qaytarish</Button>
                    <Button onClick={handleCloseSucces}>Jo'natish</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
