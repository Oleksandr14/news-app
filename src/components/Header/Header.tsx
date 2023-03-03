import { useEffect } from 'react';

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';

import {logout} from '../../store/loginSlice'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

import { Link, useLocation } from "react-router-dom";

import { IIsLogin } from '../../types/types';

import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {

  const navigate = useNavigate()

  const isLogin = useSelector<IIsLogin>(state => state.initialState.isAutheticated)

  const dispatch = useDispatch()

  const location = useLocation();

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  }

  useEffect(() => {
    if (!isLogin && location.pathname === '/profile') {
      navigate('/')
    }
  }, [isLogin, location.pathname, navigate])

  const activeColor = (path: string) => location.pathname === path ? 'secondary' : 'inherit'
  
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          News App
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: '#ec6f6f', borderRadius: '20px' }}>
          <IconButton color='inherit'  aria-label="EN" size="small" onClick={() => changeLanguage('en')}>
            <Typography variant="button">EN</Typography>
          </IconButton>
          <IconButton  color='inherit' aria-label="UK" size="small" onClick={() => changeLanguage('uk')}>
            <Typography variant="button">UK</Typography>
          </IconButton>
        </Box>

        <Button 
          color={activeColor('/')} 
          component={Link} 
          to="/">
          {t('menu.home')}
        </Button>

        <Button 
          color={activeColor('/news')} 
          component={Link} 
          to="/news">
          {t('menu.news')}
        </Button>

        <Button 
          color={activeColor('/profile')} 
          component={Link} 
          to="/profile"
          >
          {t('menu.profile')}
        </Button>

        {!isLogin ? (<Button 
          color={activeColor('/login')} 
          component={Link} 
          to="/login">
          {t('menu.login')}
        </Button>)
        :
        <Button
        type='button'
        color='inherit'
        onClick={() => {dispatch(logout())}} 
        >
          {t('menu.logout')}
        </Button>}
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;