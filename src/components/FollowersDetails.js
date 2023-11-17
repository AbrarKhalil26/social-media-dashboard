import React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import { Followers } from "../data/data";
import arrowUp from "../assets/icon-up.svg";
import arrowDown from "../assets/icon-down.svg";

const FollowersDetails = () => {
  return (
    <>
      {Followers.map((follower) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={follower.name}>
          <div
            style={
              follower.name === "instagram"
                ? {
                    backgroundImage: follower.borderColor,
                    height: "5px",
                    width: "100%",
                    borderRadius: "15px 15px 0 0",
                  }
                : {}
            }
          ></div>
          <Box
            className="card followersCard"
            style={{ borderTop: `5px solid ${follower.borderColor}`, minWidth: "250px" }}
          >
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <img src={follower.icon} alt={follower.name} />
              <Typography fontWeight='bold'>
                {follower.username}
              </Typography>
            </div>

            <Typography className="numFollowers">
              {follower.followers}
            </Typography>
            <Typography className="textFollowers">Followers</Typography>

            <div style={{ display: 'flex', alignItems: 'center'}}>
              <img src={follower.today >= 0 ? arrowUp : arrowDown} className="arrowImg" alt="arrowState"/>
              <Typography variant="body2" fontWeight='bold' className={follower.today >= 0 ? 'positive' : 'negative'}>
                {follower.today >= 0? follower.today: -1 * follower.today} Today
              </Typography>
            </div>

          </Box>
        </Grid>
      ))}
    </>
  );
};

export default FollowersDetails;
