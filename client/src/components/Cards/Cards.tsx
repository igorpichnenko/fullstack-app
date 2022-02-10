import { observer } from 'mobx-react';
import React from 'react';
import { useCardsStore } from '../../hooks/useCardsStore';
import { Card } from './components/Card';

import { Box } from '@mui/material';
import { Form } from '../Form';

export const Cards: React.FC = observer(() => {
  const { cards } = useCardsStore();

  return (
    <>
      <Form />
      <Box display="flex" gap={10} pt={10} pl={10}>
        {cards.map((el, i) => (
          <Box key={i}>
            <Card
              title={el.title}
              text={el.text}
              picture={el.picture}
              author={el.author}
            />
          </Box>
        ))}
      </Box>
    </>
  );
});
