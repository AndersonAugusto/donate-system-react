import React from 'react';
import './navbar.scss';
import Logo from '../../assets/img/logo.png'
import { yellow } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

 const Navbar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <header>
        <div className='logoImg'>
            <img src={ Logo } alt="logo" width='90px' />
        </div>
        
        <ul className='list'>
            <li>Inicio</li>
            <li>Sobre nós</li>
            <li>Produtos</li>
        </ul>

        <div className='person'>

            <NotificationsIcon sx={{ color: yellow[500], marginLeft: '50px' }} fontSize="large" />
            <p className='nameUser'> Anderson </p>
            
            <div className=''>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <AccountCircleOutlinedIcon sx={{ fontSize: 50 , color: '#5A5A5A;'}} />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            width: '200px'
                        }
                    }}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Perfil</MenuItem>
                    <MenuItem onClick={handleClose}>Minhas doações</MenuItem>
                    <MenuItem onClick={handleClose}>Minhas solicitações</MenuItem>
                    <MenuItem onClick={handleClose}>Meus troféus</MenuItem>
                </Menu>
            </div>
        </div>
    </header>
  );
}

export default Navbar