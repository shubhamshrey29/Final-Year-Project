import { useEffect } from 'react';

//components
import NavBar from './NavBar';
import Banner from './Banner';
import {styled,Box} from '@mui/material';

import {getCities} from '../../redux/actions/cityActions';
import { useDispatch, useSelector } from 'react-redux'
import Slide from './Slide';

const Component = styled(Box)`
    padding:  10px;
    background: #d3d3d3;
`

const Home = () => {

    const {cities} = useSelector(state => state.getCities);
   
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCities())
    }, [dispatch])

    return(
        <>
            
            <NavBar />
            <Component>
                <Banner />
                <Slide cities = {cities} title = "Colleges in Maharashtra"/>
            </Component>
        </>
    )
}

export default Home;