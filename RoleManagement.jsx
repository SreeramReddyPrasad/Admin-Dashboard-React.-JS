import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import DataTable from "./DataTable";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Inactive" },
  ]);

  const handleAddUser = () => {
    // Add user logic here
    console.log("Add User");
  };

  const handleEditUser = (userId) => {
    // Edit user logic here
    //console.log(Edit User: ${userId});
  };

  const handleDeleteUser = (userId) => {
    // Delete user logic here
    //console.log(Delete User: ${userId});
  };

  return (
    <div>
      <Typography variant="h5">User Management</Typography>
      <Button variant="contained" color="primary" onClick={handleAddUser} style={{ margin: "10px 0" }}>
        Add User
      </Button>
      { <DataTable
        rows={users}
        columns={[
          { field: "name", headerName: "Name", width: 200 },
          { field: "email", headerName: "Email", width: 250 },
          { field: "role", headerName: "Role", width: 150 },
          { field: "status", headerName: "Status", width: 150 },
        ]}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      /> }  
    </div>
  );
};

export default UserManagement;