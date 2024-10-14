import { Box, Drawer, Container } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";

const PageLayout = ({ children }: any) => {
    
    return (
      <Box sx={{ display: 'flex' }}>
        <Drawer variant="permanent" open={true} className="drawer">
          <Navigation />
        </Drawer>
        <Box component="main" className="main-wrapper">
          <Header />
          <Container>{children}</Container>
        </Box>
      </Box>
    );
  };
  
  export default PageLayout;
  