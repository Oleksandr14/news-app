import { useEffect } from 'react';

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux/es/exports';
import {logout} from '../../store/loginSlice'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link, useLocation } from "react-router-dom";

import { IIsLogin } from '../../types/types';

const Header: React.FC = () => {
  const navigate = useNavigate()
   const isLogin = useSelector<IIsLogin>(state => state.initialState.isAutheticated)
  const dispatch = useDispatch()
  const location = useLocation();
  console.log(isLogin)

  useEffect(() => {
    if (!isLogin && location.pathname === '/profile') {
      navigate('/');
    }
  }, [isLogin, location.pathname, navigate]);

  const activeColor = (path: string) => location.pathname === path ? 'secondary' : 'inherit'
  
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>

          News App
        </Typography>
        <Button 
          color={activeColor('/')} 
          component={Link} 
          to="/">
          Home
        </Button>
        <Button 
          color={activeColor('/news')} 
          component={Link} 
          to="/news">
          News
        </Button>

        <Button 
          color={activeColor('/profile')} 
          component={Link} 
          to="/profile"
          >
          Profile
        </Button>

        {!isLogin ? (<Button 
          color={activeColor('/login')} 
          component={Link} 
          to="/login">
          Log In
        </Button>)
        :
        <Button
        type='button'
        color='inherit'
        onClick={() => {dispatch(logout())}} 
        >
          Log Out
        </Button>}
      </Toolbar>
    </AppBar>
  );
};

export default Header;