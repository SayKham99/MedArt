import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from "@mui/material/AlertTitle";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';

export default function BasicAlerts() {

    const [open, setOpen] = React.useState(true);
    return (
        <Stack
            spacing={2}
            style={{position: "fixed", top: "10%", right: "0", maxWidth: "20%", zIndex: "1002"}}
        >
            <Collapse in={open}>

            <Alert severity="success"
                   action={
                       <IconButton
                           aria-label="close"
                           color="inherit"
                           size="small"
                           onClick={() => {
                               setOpen(false);
                           }}
                       >
                           <CloseIcon fontSize="inherit" />
                       </IconButton>
                   }

            >
                <AlertTitle>Rahmat !</AlertTitle>
                Arizangiz qabul qilindi!
            </Alert>
            </Collapse>
        </Stack>
    );
}
