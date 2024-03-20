
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from "react-router-dom";
import { getCityDetails } from '../../redux/actions/cityActions';

import {Box, Grid, Typography, styled} from '@mui/material';
import ActionItem from './ActionItem';

const Component = styled(Box)`
    background: f2f2f2;
    margin-top: 55px;
`;

const Container = styled(Grid)`
    background: #ffffff;
    display: flex;
`;

const RightContainer = styled(Grid)`
    margin-top: 50px;

`;

const DetailView = () => {
    const dispatch = useDispatch();
    const {id} = useParams();

    const {loading, city} = useSelector(state => state.getCityDetails);

    useEffect (() => {
        if (city &&  id !== city.id)
            dispatch(getCityDetails(id))
    },[dispatch, id, city, loading])

    return(
        <Component>
            {
                city && Object.keys(city).length &&
                <Container container>
                    <Grid item lg ={4} md={4} sm={8} xs={12}>
                        <ActionItem city ={city}/>
                    </Grid>
                    <RightContainer item lg ={8} md={8} sm={8} xs={12}>
                        <Typography>{city.title}</Typography>
                    </RightContainer>
                </Container>
            }
        </Component>
    )
}
export default DetailView;