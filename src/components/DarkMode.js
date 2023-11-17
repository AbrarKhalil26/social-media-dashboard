import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const DarkMode = () => {
  const [currentMode, setCurrentMode] = useState(false);

  const setMode = () => {
    setCurrentMode((prevMode) => !prevMode);
    const selectedTheme = currentMode ? 'light' : 'dark';
    document.querySelector('body').setAttribute('data-theme', selectedTheme);
    localStorage.setItem('selectedTheme', selectedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      setCurrentMode(savedTheme === 'dark');
      document.querySelector('body').setAttribute('data-theme', savedTheme);
    }
  }, []);

  return (
    <div className="parentMode">
      <Typography fontWeight="bold" className="text-mode">
        Dark Mode
      </Typography>
      <Stack className="bg-Mode" onClick={setMode}>
        <div className="btn-Mode"></div>
      </Stack>
    </div>
  );
};

export default DarkMode;
