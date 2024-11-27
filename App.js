import React from "react";
import { Container, Typography, Tab, Tabs, Box } from "@mui/material";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";

const App = () => {
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleTabChange = (event, newValue) => setCurrentTab(newValue);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Admin Dashboard
      </Typography>
      <Tabs value={currentTab} onChange={handleTabChange} centered>
        <Tab label="User Management" />
        <Tab label="Role Management" />
      </Tabs>
      <Box mt={4}>
        {currentTab === 0 && <UserManagement />}
        {currentTab === 1 && <RoleManagement />}
      </Box>
    </Container>
  );
};

export default App;