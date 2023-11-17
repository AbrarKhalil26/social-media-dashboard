import { Box, Grid, Stack, Typography } from "@mui/material";
import "./App.css";
import FollowersDetails from "./components/FollowersDetails";
import Overview from "./components/Overview";
import DarkMode from "./components/DarkMode";

function App() {


  return (
    <Stack sx={{ padding: {xs: '4rem 1.5rem 0 1.5rem', md: '4rem 3rem 0 3rem'} }}>
      <Stack
        className="header"
        px="10px"
      >
        <Box className="title">
          <Typography variant="h4" fontWeight='bold'>
            Social Media Dashboard
          </Typography>
          <Typography variant="body1" fontWeight='bold'>
            Total Followers: 23,004
          </Typography>
        </Box>

        <DarkMode/>
      </Stack>

      <Stack mb={5}>
        <Grid container spacing={3}>
          <FollowersDetails />
        </Grid>
      </Stack>

      <Stack>
        <Typography variant="h5" fontWeight='bold' my={3}>Overview - Today</Typography>
        <Grid container spacing={3}>
          <Overview />
        </Grid>
      </Stack>

      <Typography textAlign='center' my={4}className="nameCoder">Coded by <span>Abrar</span></Typography>
    </Stack>
  );
}

export default App;
