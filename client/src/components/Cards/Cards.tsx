import React from 'react';
import { useCardsStore } from '../../hooks/useCardsStore';
import { Card } from './components/Card';

const mockData = [
  {
    title: 'card',
    text: 'Nemo enim ipsam voluptatem, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Et harum quidem rerum facilis est et expedita distinctio, consectetur adipiscing elit, qui dolorem eum fugiat, quo voluptas nulla pariatur!',
  },
  {
    title: 'card2',
    text: 'Sed ut perspiciatis, quis nostrum exercitationem ullam corporis suscipit laboriosam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat! Sed ut perspiciatis, unde omnis iste natus e',
  },
];

export const Cards: React.FC = () => {
  const cards = useCardsStore();
  console.log(cards);
  return (
    <div>
      {mockData.map((el, i) => (
        <div key={i}>
          <Card title={el.title} text={el.text} />
        </div>
      ))}
    </div>
  );
};
