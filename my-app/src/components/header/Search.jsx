
import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

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
    padding: 8px;
`

const Search = () =>{
    return(
        <SearchContainer>
            <InputSearchbase 
                placeholder="Search for University, College and much more"
            />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
        </SearchContainer>
    )
}

export default Search;