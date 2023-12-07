import { AppBar, Toolbar, Box, InputBase, styled } from '@mui/material';
import {
    Menu as MenuIcon, Tune, HelpOutlineOutlined, SettingsOutlined,
    AppsOutlined, AccountCircleOutlined, Search
} from '@mui/icons-material'
import { useState } from 'react';
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import { gmailLogo } from '../constants/constant';
import { useNavigate } from 'react-router-dom';

const StyledAppBar = styled(AppBar)`
    background: #f5F5F5;
    box-shadow: none;
`;

const SearchWrapper = styled(Box)`
    background: #EAF1FB;
    margin-left: 80px;
    border-radius: 8px;
    min-width: 690px;
    max-width: 720px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    & > div {
        width: 100%
    }
`

const OptionsWrapper = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: end;
    & > svg {
        margin-left: 20px;
    }
`;

const Header = ({ toggleDrawer }) => {
    let navigate = useNavigate()
    const [isCardOpen, setCardOpen] = useState(false);

    return (
        <StyledAppBar position="static">
            <Toolbar>
                <MenuIcon color="action" onClick={toggleDrawer} />
                <img src={gmailLogo} alt="logo" style={{ width: 110, marginLeft: 15, cursor: 'pointer' }} onClick={() => navigate('/routes.emails.inbox')} />
                <SearchWrapper>
                    <Search color="action" />
                    <InputBase />
                    <Tune color="action" />
                </SearchWrapper>

                <OptionsWrapper>
                    <HelpOutlineOutlined color="action" />
                    <SettingsOutlined color="action" />
                    <AppsOutlined color="action" />
                    <AccountCircleOutlined color="action" onClick={() => setCardOpen(!isCardOpen)} style={{ cursor: 'pointer' }} />
                    {isCardOpen && (
                        <div className='admin' style={{  padding: '15px', marginTop: '25px', position:'fixed' }}>
                            <Button style={{marginLeft:'50px'}} variant="outline-info" onClick={()=>navigate('/signup')}  >SignUp</Button>
                            <Button style={{marginLeft:'50px'}} variant="outline-info" onClick={()=>navigate('/signin')} >Login</Button>
                            <p >To Access you need to create an account</p>
                        </div>
                    )}
                </OptionsWrapper>
            </Toolbar>
        </StyledAppBar >

    )
}

export default Header;





