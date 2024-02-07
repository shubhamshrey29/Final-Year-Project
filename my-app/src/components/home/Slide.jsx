import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Box, Button, Typography,Divider, styled } from "@mui/material";
import {Link} from 'react-router-dom';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const Component = styled(Box)`
    margin-top: 10px;
    background: #ffffff;

`;

const Deal = styled(Box)`
    padding:15px 20px;
    display:flex;
`;

const ViewAllButton = styled (Button)`
    margin-left: auto;
    background: #808080;
    border-radius: 2px;
    font-size: 13px;
    font-weight: 600;
`;

const Image = styled('img')({
    width: 230,
    height: 150
});

const Text = styled (Typography)`
    font-size: 14px;
    margin-top: 5px;
`;

const Slide = ({ cities, title }) => {
    return (
      <Component>
        <Deal>
          <Typography>{title}</Typography>
          <ViewAllButton variant="contained">View All</ViewAllButton>
        </Deal>
        <Divider />
        {cities && (
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            showDots={false}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            centerMode={true}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {cities && cities.map(city => (
              <Link to = {`city/${city.id}`} style={{textDecoration : 'none'}}>
                <Box textAlign="center" style={{ padding: '25px 15px' }} key={city.id}>
                  <Image src={city.url} alt="city" />
                  <Text style={{ fontWeight: 600, color: '#212121' }}>{city.title} </Text>
                </Box>
              </Link>
            ))}
          </Carousel>
        )}
      </Component>
    );
  };
  
  export default Slide;
  

