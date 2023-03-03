    import { useNavigate } from "react-router-dom";

    import { useDispatch, useSelector } from 'react-redux/es/exports';

    import {login, logUser, logPass} from '../../store/loginSlice'

    import {Box, TextField, Button,  Typography, FormControl } from '@mui/material';

    import { styled } from '@mui/material';

    import { useTranslation } from 'react-i18next';

    const Form = styled(FormControl)({
        width: '500px',
        rowGap: '30px',
        padding: '50px 50px 70px',
        borderRadius: '4px',
        boxShadow: '0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%)',
    }) as typeof FormControl;

    const FormLogin: React.FC = () => {
        const { t } = useTranslation();
        const user = useSelector((state: any) => state.initialState.userName);
        const pass = useSelector((state: any) => state.initialState.password);


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
                alert(`${t("login.error")}`)
            }
        }


        return (
            <Box 
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh">
                <Form component="form" onSubmit={handleLogin}>
                <Typography variant="h3" textAlign='center' color='#ef5350'>{t("form.title")}</Typography>
                    <TextField type="text" value={user} label={t('login.username')} variant="outlined" sx={{  width: '100%' }} 
                    onChange={handleUsernameChange}/>
                    <TextField type="password" value={pass} label={t('login.password')} variant="outlined" sx={{  width: '100%' }} 
                    onChange={handlePassnameChange}/>
                <Button type="submit" variant="contained" color="primary">
                    {t('login.submit')}
                </Button>
                </Form>
            </Box>
        );
    };

    export default FormLogin;