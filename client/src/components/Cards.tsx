import React from 'react';
import { useCardsStore } from '../hooks/useCardsStore';

export const Cards = () => {
  const cards = useCardsStore();
  console.log(cards);
  return <div>hello</div>;
};
