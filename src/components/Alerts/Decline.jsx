import * as React from 'react';
import {useEffect} from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Collapse from '@mui/material/Collapse';

export default function DescriptionAlerts() {

    const [open, setOpen] = React.useState(true);

    useEffect(() => {

    }, []);

    return (
        <Stack spacing={2}
               style={{position: "fixed", top: "10%", right: "0", maxWidth: "20%", zIndex: "1002"}}
        >
            <Collapse in={open}>
            <Alert severity="info"
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
                <AlertTitle>Ma'lumot</AlertTitle>
                Sizning sorovingiz qaytarildi !
            </Alert>
            </Collapse>
        </Stack>
    )
}
