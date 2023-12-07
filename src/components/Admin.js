import React, { useState } from 'react'
import { Dialog, styled, Typography, Box, InputBase, TextField, Button } from '@mui/material'; 
import { Close, DeleteOutline } from '@mui/icons-material';

function Admin({open}) {
    
const dialogStyle = {
    height: '90%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0',
}

const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    background: #f2f6fc;
    & > p {
        font-size: 14px;
        font-weight: 500;
    }
`;


const Footer = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    align-items: center;
`;
    // const ViewEmail = () => {


    //     const { state } = useLocation();
    //     const { email } = state;
    return <>
        <Dialog
            open={open}
            PaperProps={{ sx: dialogStyle }}
        >
            <Header>
                <Typography>New Message</Typography>
            </Header>

            <TextField 
                multiline
                rows={15}
                sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
                name="body"
            />
            <Footer>
                {/* <SendButton onClick={(e) => sendEmail(e)}>Send</SendButton>
                <DeleteOutline onClick={() => setOpenDrawer(false)} /> */}
            </Footer>
        </Dialog>
    </>
}

export default Admin
