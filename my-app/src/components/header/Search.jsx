import React, { useState, useEffect } from "react";
import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import { useSelector, useDispatch } from "react-redux";
import { getCities } from "../../redux/actions/cityActions";

import { Link } from "react-router-dom";

const SearchContainer = styled(Box)`
    background: #fff;
    width: 50%;
    border-radius: 5px;
    margin-left: 15px;
    display: flex;
`;

const InputSearchbase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
    color: #808080;
    padding: 5px;
    display: flex;
`;

const ListWrapper = styled(List)`
    position: absolute;
    background: #ffffff;
    color: #000000;
    margin-top: 35px;
`;


const Search = () => {
    const [text, setText] = useState('');

    const {cities} = useSelector(state => state.getCities);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getCities())
    }, [dispatch])

    const getText = (text) => {
        setText(text);
    };

    return (
        <SearchContainer>
            <InputSearchbase 
                placeholder="Search for Universities and Colleges"
                onChange={(e) => getText(e.target.value)}
                value={text}
            />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            {
                text && 
                    <ListWrapper>
                        {
                            cities.filter(city => city.title.toLowerCase().includes(text.toLowerCase())).map(city => (
                                <ListItem>
                                    <Link
                                        to = {`/city/${city.id}`}
                                        onClick = {()=> setText('')}
                                        style={{textDecoration: 'none', color:'inherit'}}
                                    >
                                        {city.title}
                                    </Link>
                                </ListItem>
                            ))
                        }
                    </ListWrapper>
            }
        </SearchContainer>
    );
};

export default Search;
