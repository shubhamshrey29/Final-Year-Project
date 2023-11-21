//components
import NavBar from './NavBar';
import Banner from './Banner';
import {styled,Box} from '@mui/material';

const Component = styled(Box)`
    padding:  10px;
    background: #d3d3d3;
`

const Home = () => {
    return(
        <>
            <NavBar />
            <Component>
                <Banner />
            </Component>
        </>
    )
}

export default Home;