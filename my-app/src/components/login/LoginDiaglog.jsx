import React, { useState, useContext } from 'react';
import { Box, Dialog, TextField, Typography, Button, styled } from '@mui/material';
import { authenticateSignup, authenticateLogin } from '../../sevice/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
    height: 80vh;
    width: 70vh;
`;

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const EnterField = styled(TextField)`
    width: 85%;
    text-align: center;
    margin: 0 auto;
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #757575;
    color: #fff;
    height: 48px;
    width: 70%;
    border-radius: 2px;
    text-align: center;
    margin: 0 auto;
    transition: background 0.3s ease;

    &:hover {
        background: #616161;
    }
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #ffff;
    color: #757575;
    height: 48px;
    border-radius: 2px;
    width: 70%;
    text-align: center;
    margin: 0 auto;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
    font-size: 16px;
    color: #878787;
    text-align: center;
`;

const CreateAccount = styled(Typography)`
    font-size: 16px;
    text-align: center;
    color: #878787;
    font-weight: 600;
    cursor: pointer;
`;

const Error = styled(Typography)`
    font-size: 12px;
    color: #ba000d;
    line-height: 0;
    width: 85%;
    text-align: center;
    margin: 0 auto;
    margin-top: 10px;
    font-weight: 600;
`;

const accountIntitialvalues = {
    login: {
        view: 'login',
    },
    signup: {
        view: 'signup',
    },
};

const signupIntitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    primaryresult: '',
    secondaryresult: '',
    jeepercentile: '',
    mhtcetresult: '',
    statepreference: '',
    password: '',
};

const loginInitialValues = {
    username: '',
    password: '',
};

const LoginDialog = ({ open, setOpen }) => {
    const [account, toggleAccount] = useState(accountIntitialvalues.login);
    const [signup, setSignup] = useState(signupIntitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState(false);

    const { setAccount } = useContext(DataContext);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountIntitialvalues.login);
        setError(false);
    };

    const toggleSignup = () => {
        toggleAccount(accountIntitialvalues.signup);
    };

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    };

    const validateFields = () => {
        const requiredFields = ['firstname', 'lastname', 'username', 'email', 'primaryresult', 'secondaryresult', 'jeepercentile','statepreference', 'password'];

        for (const field of requiredFields) {
            if (!signup[field]) {
                setError(`Please fill in the ${field === 'primaryresult' ? '10th Percentage' : field === 'secondaryresult' ? '12th Percentage' : field} field.`);
                return false;
            }
        }

        setError('');
        return true;
    };

    const signupUser = async () => {
        if (validateFields()) {
            let response = await authenticateSignup(signup);
            if (!response) return;
            handleClose();
            setAccount(signup.firstname);
        }
    };

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        console.log(response);
        if (response.status === 200) {
            handleClose();
            const formattedFirstName = response.data.data.firstname.charAt(0).toUpperCase() + response.data.data.firstname.slice(1);
            setAccount(formattedFirstName);
        } else {
            setError(true);
        }
    };

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    {account.view === 'login' ? (
                        <Wrapper>
                            <EnterField variant='standard' onChange={(e) => onValueChange(e)} name='username' label='Enter Username' />

                            {error && <Error>Please Enter Valid Username or Password</Error>}
                            <EnterField variant='standard' onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                            <Text>By continuing, you agree to our Terms of Use and Privacy Policy.</Text>
                            <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                            <Typography style={{ textAlign: 'center' }}>OR</Typography>
                            <RequestOTP>Request OTP</RequestOTP>
                            <CreateAccount onClick={() => toggleSignup()}>New? Create an account</CreateAccount>
                        </Wrapper>
                    ) : (
                        <Wrapper>
                            
                            <EnterField variant='standard' onChange={(e) => onInputChange(e)}  name ='firstname' label = 'Enter First Name *' />
                            <EnterField variant='standard' onChange={(e) => onInputChange(e)}  name ='lastname' label = 'Enter Last Name *'/>
                            <EnterField variant='standard' onChange={(e) => onInputChange(e)}  name ='username' label = 'Enter Username *'/>
                            <EnterField variant='standard' onChange={(e) => onInputChange(e)}  name ='email' label = 'Enter Email *'/>
                            <EnterField variant='standard' onChange={(e) => onInputChange(e)}  name ='primaryresult' label = 'Enter 10th Percentage *'/>
                            <EnterField variant='standard' onChange={(e) => onInputChange(e)}  name ='secondaryresult' label = 'Enter 12th Percentage  *'/>
                            <EnterField variant='standard' onChange={(e) => onInputChange(e)}  name ='jeepercentile' label = 'Enter JEE Percentile*'/>
                            <EnterField variant='standard' onChange={(e) => onInputChange(e)}  name ='mhtcetresult' label = 'Enter MHT-CET Percentile'/>
                            <EnterField variant='standard' onChange={(e) => onInputChange(e)}  name ='statepreference' label = 'Enter Your State Preference *'/>
                            <EnterField variant='standard' onChange={(e) => onInputChange(e)} name='password' label='Enter Password *' />
                            {error && <Error>{error}</Error>}
                            <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                        </Wrapper>
                    )}
                </Box>
            </Component>
        </Dialog>
    );
};

export default LoginDialog;
