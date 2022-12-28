import React from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
const AlertComponent = (props) => {
    return (
        <>
            <div className="alert-container">
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Collapse in={props.open}>
                        <Alert onClose={() => { props.setOpen(false); }}>
                            <AlertTitle>Success</AlertTitle>
                            Your Order has been placed — check it out!</Alert>
                    </Collapse>
                </Stack>
            </div>
        </>
    )
}

export default AlertComponent