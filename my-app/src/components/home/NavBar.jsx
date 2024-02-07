// NavBar.jsx
import { Box, Typography, styled } from "@mui/material";
import { navData } from "../../constants/data";

const Component = styled(Box)(({theme}) => ({
    display: "flex",
    margin: "70px 130px 0 130px",
    justifyContent: "space-between",
    [theme.breakpoints.down('lg')]:{
        margin:0 
    }
}));

const Container = styled(Box)({
    padding: "12px 8px",
    textAlign: "center",
});

const Text = styled(Typography)({
    fontSize: "14px",
    fontWeight: 500,
    fontFamily: "inherit",
});

const NavBar = () => {
    return (
        <Component>
            {navData.map((data) => (
                <Container key={data.text}>
                    <img
                        src={data.img}
                        alt="nav"
                        style={{
                            height: 64,
                            width: 64,
                            borderRadius: "50%",
                        }}
                    />
                    <Text>{data.text}</Text>
                </Container>
            ))}
        </Component>
    );
};

export default NavBar;
