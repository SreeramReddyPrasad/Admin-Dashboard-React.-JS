import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Checkbox, FormControlLabel } from "@mui/material";

const PermissionDialog = ({ open, onClose, roleId }) => {
  const permissions = ["Read", "Write", "Delete"];
  const [selectedPermissions, setSelectedPermissions] = React.useState([]);

  const handlePermissionChange = (permission) => {
    setSelectedPermissions((prev) =>
      prev.includes(permission) ? prev.filter((p) => p !== permission) : [...prev, permission]
    );
  };

  const handleSave = () => {
    // Save permissions logic here
    //console.log(Saved permissions for role ${roleId}:, selectedPermissions);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Manage Permissions</DialogTitle>
      <DialogContent>
        {permissions.map((permission) => (
          <FormControlLabel
            key={permission}
            control={
              <Checkbox
                checked={selectedPermissions.includes(permission)}
                onChange={() => handlePermissionChange(permission)}
              />
            }
            label={permission}
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PermissionDialog;