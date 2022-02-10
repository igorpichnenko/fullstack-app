import React from 'react';
import { Card as MuiCard } from '@mui/material';

interface Props {
  title: string;
  text: string;
}

export const Card: React.FC<Props> = ({ title, text }) => {
  return (
    <MuiCard>
      <h1>{title}</h1>
      <p>{text}</p>
    </MuiCard>
  );
};
