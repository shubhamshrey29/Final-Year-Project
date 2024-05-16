import React, { useState, useContext } from 'react';
import { Box, Dialog, TextField, Typography, Button, styled } from '@mui/material';
import { authenticateSignup, authenticateLogin } from '../../sevice/api';
import { DataContext } from '../../context/DataProvider';
import { StateCategory, CityCategory } from './Category';

const Component = styled(Box)`
    height: 80vh;
    width: 75vh;
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
    secondaryresult: '',
    jeepercentile: '',
    mhtcetresult: '',
    statepreference: '',
    citypreference:'',
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
    const [stateCategoryOpen, setStateCategoryOpen] = useState(false);
    const [cityCategoryOpen, setCityCategoryOpen] = useState(false);
    const { setAccount } = useContext(DataContext);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountIntitialvalues.login);
        setError(false);
    };

    const toggleSignup = () => {
        toggleAccount(accountIntitialvalues.signup);
    };

    const onInputChange = (name, value) => {
        setSignup({ ...signup, [name]: value });
    };

    const validateFields = () => {
        // Required input fields
        const requiredInputFields = ['firstname', 'lastname', 'username', 'email', 'secondaryresult', 'jeepercentile', 'password'];
        
        // Check if any required input field is empty
        for (const field of requiredInputFields) {
            if (!signup[field]) {
                setError(`Please fill in the ${field === 'secondaryresult' ? '12th Percentage' : field} field.`);
                return false;
            }
        }

        // Check if state preference is selected
        if (!signup['statepreference']) {
            setError('Please select your state preference.');
            return false;
        }

        // Check if city preference is selected
        if (!signup['citypreference']) {
            setError('Please select your city preference.');
            return false;
        }

        // Validate data types
        const { firstname, lastname, secondaryresult, jeepercentile, mhtcetresult } = signup;
        const nameRegex = /^[a-zA-Z]+$/;
        const numberRegex = /^\d+$/;

        if (!nameRegex.test(firstname)) {
            setError('First name should contain only letters.');
            return false;
        }

        if (!nameRegex.test(lastname)) {
            setError('Last name should contain only letters.');
            return false;
        }

        if (!numberRegex.test(secondaryresult)) {
            setError('12th percentage should contain only numbers.');
            return false;
        }

        if (parseInt(secondaryresult) > 100) {
            setError('12th percentage should not exceed 100.');
            return false;
        }

        if (!numberRegex.test(jeepercentile)) {
            setError('JEE percentile should contain only numbers.');
            return false;
        }

        if (parseInt(jeepercentile) > 100) {
            setError('JEE percentile should not exceed 100.');
            return false;
        }

        if (mhtcetresult && !numberRegex.test(mhtcetresult)) {
            setError('MHT-CET percentile should contain only numbers.');
            return false;
        }

        if (mhtcetresult && parseInt(mhtcetresult) > 100) {
            setError('MHT-CET percentile should not exceed 100.');
            return false;
        }

        // Clear error if all fields are filled and valid
        setError('');
        return true;
    };

    const handleStateSelect = (state) => {
        setSignup({ ...signup, statepreference: state }); // Update state preference
        setStateCategoryOpen(false);
    };

    const handleCitySelect = (city) => {
        setSignup({ ...signup, citypreference: city }); // Update city preference
        setCityCategoryOpen(false);
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
        if (response.status === 200) {
            handleClose();
            const formattedFirstName = response.data.data.firstname.charAt(0).toUpperCase() + response.data.data.firstname.slice(1);
            setAccount(formattedFirstName);
        } else {
            setError(true);
        }
    };

    return (
        <Dialog
        open={open}
        onClose={(e) => (stateCategoryOpen || cityCategoryOpen) ? e.stopPropagation() : handleClose()}
        PaperProps={{ sx: { maxWidth: 'unset' } }}
    >
        <Component>
            <Box style={{ display: 'flex', height: '100%' }}>
                {account.view === 'login' ? (
                    <Wrapper>
                        <Box>
                            <Typography style={{
                                fontFamily: 'Times New Roman',
                                fontSize: '40px',
                                fontWeight: '800',
                                color: '#616161',
                                textAlign: 'center'
                            }}>
                                LOGIN
                            </Typography>
                        </Box>
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
                        <Box>
                            <Typography style={{
                                fontFamily: 'Times New Roman',
                                fontSize: '40px',
                                fontWeight: '800',
                                color: '#616161',
                                textAlign: 'center'
                            }}>
                                Sign UP
                            </Typography>
                        </Box>
                        <EnterField variant='standard' onChange={(e) => onInputChange('firstname', e.target.value)} name='firstname' label='Enter First Name *' />
                        <EnterField variant='standard' onChange={(e) => onInputChange('lastname', e.target.value)} name='lastname' label='Enter Last Name *' />
                        <EnterField variant='standard' onChange={(e) => onInputChange('username', e.target.value)} name='username' label='Enter Username *' />
                        <EnterField variant='standard' onChange={(e) => onInputChange('email', e.target.value)} name='email' label='Enter Email *' />
                        <EnterField variant='standard' onChange={(e) => onInputChange('secondaryresult', e.target.value)} name='secondaryresult' label='Enter 12th Percentage  *' />
                        <EnterField variant='standard' onChange={(e) => onInputChange('jeepercentile', e.target.value)} name='jeepercentile' label='Enter JEE Percentile*' />
                        <EnterField variant='standard' onChange={(e) => onInputChange('mhtcetresult', e.target.value)} name='mhtcetresult' label='Enter MHT-CET Percentile' />
                        <StateCategory onSelect={handleStateSelect} setOpen={setStateCategoryOpen} />
                        <CityCategory onSelect={handleCitySelect} setOpen={setCityCategoryOpen} />
                        <EnterField variant='standard' onChange={(e) => onInputChange('password', e.target.value)} name='password' label='Enter Password *' />
                        {error && <Error>{error}</Error>}
                        <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                        <Box>
                            <Typography style={{ color: '#fff' }}>
                                .
                            </Typography>
                        </Box>
                    </Wrapper>
                )}
            </Box>
        </Component>
    </Dialog>
);
};

export default LoginDialog;
