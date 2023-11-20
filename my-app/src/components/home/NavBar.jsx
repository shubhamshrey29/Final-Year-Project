// NavBar.jsx
import { Box } from "@mui/material";
import { navData } from "../../constants/data";

const NavBar = () => {
    console.log(navData);
    return (
        <Box>
            {navData.map(data => (
                <Box key={data.text}>
                    <img src={data.img} alt={data.text} />
                    <p>{data.text}</p>
                </Box>
            ))}
        </Box>
    );
}

export default NavBar;
