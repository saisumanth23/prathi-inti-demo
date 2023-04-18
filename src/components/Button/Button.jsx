import React from 'react';
import { Button } from '@mui/material';

const LabelButton = ({ label, onClick }) => {
  return (
    <Button onClick={onClick}>
      {label}
    </Button>
  );
};

export default LabelButton;