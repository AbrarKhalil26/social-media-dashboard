import React from 'react'
import { Followers, overview } from "../data/data";
import { Box, Card, Grid, Typography } from '@mui/material';
import arrowUp from "../assets/icon-up.svg";
import arrowDown from "../assets/icon-down.svg";

const Overview = () => {
  return (
    <>
      {overview.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Box
            className="card"
          >
            <div style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: 'space-between' }}>
              <Typography sx={{ fontWeight: "bold" }}>
                {item.title}
              </Typography>
              <img src={item.icon} alt={item.name} />
            </div>



            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.7rem'}}>
              <Typography variant='h4' fontWeight='bold'>{item.count}</Typography>
              <div style={{ display: 'flex', alignItems: 'center'}}>
                <img src={item.today >= 0 ? arrowUp : arrowDown} className="arrowImg" alt="arrowState"/>
                <Typography variant="body2" className={item.today >= 0 ? 'positive' : 'negative'} fontWeight='bold'>
                  {item.today >= 0? item.today: -1 * item.today} %
                </Typography>
              </div>
            </div>

          </Box>
        </Grid>
      ))}
    </>
  )
}

export default Overview
