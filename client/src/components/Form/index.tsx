import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useCardsStore } from '../../hooks/useCardsStore';

export const Form = observer(() => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [picture, setPicture] = useState<Blob>();
  const { createCard } = useCardsStore();

  const handleSubmit = () => {
    createCard({ author, title, text, image: picture });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    if (file) {
      const blobFile = new Blob([file], { type: file.type });
      setPicture(blobFile);
    }
  };

  return (
    <Box ml={10} mt={10}>
      <Box display="flex" flexDirection="column" gap={2}>
        <label>
          Author
          <input
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
        </label>
        <label>
          Title
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          Content
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </label>
        <label>
          Picture
          <input name="picture" type="file" onChange={handleFileChange} />
        </label>
      </Box>
      <Button onClick={handleSubmit}>Добавить карточку</Button>
    </Box>
  );
});
