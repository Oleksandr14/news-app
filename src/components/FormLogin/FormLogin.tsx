    import { useNavigate } from "react-router-dom";
    import { useDispatch, useSelector } from 'react-redux/es/exports';
    import {login, logUser, logPass} from '../../store/loginSlice'


    import {Box, TextField, Button,  Typography, FormControl } from '@mui/material';
    import { styled } from '@mui/material';

    const Form = styled(FormControl)({
        width: '500px',
        rowGap: '30px',
        padding: '50px 50px 70px',
        borderRadius: '4px',
        boxShadow: '0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%)',
    }) as typeof FormControl;

    interface IUser {
        initialState: {
            userName: string
        }
    }
    
    interface IPass {
        initialState: {
            password: string
        }
    }

    const FormLogin: React.FC = () => {
        const user = useSelector<IUser>((state) => state.initialState.userName)
        const pass = useSelector<IPass>(state => state.initialState.password)

        const navigate = useNavigate()
        const dispatch = useDispatch()

        const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(logUser(e.target.value));
          };

          const handlePassnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(logPass(e.target.value));
          };

          const clearField = () => {
            dispatch(logPass(''))
            dispatch(logUser(''))
          }

        const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()

            if(user === 'admin' && pass === '12345') {
                dispatch(login())
                navigate("/profile", { replace: true })
                clearField()
                
            } else {
                alert('The user name or password is incorrect')
            }
        }


        return (
            <Box 
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh">
                <Form component="form" onSubmit={handleLogin}>
                <Typography variant="h3" textAlign='center' color='#ef5350'>Log in to News App</Typography>
                    <TextField type="text" value={user} label="username" variant="outlined" sx={{  width: '100%' }} 
                    onChange={handleUsernameChange}/>
                    <TextField type="password" value={pass} label="password" variant="outlined" sx={{  width: '100%' }} 
                    onChange={handlePassnameChange}/>
                <Button type="submit" variant="contained" color="primary">
                    Log In
                </Button>
                </Form>
            </Box>
        );
    };

    export default FormLogin;