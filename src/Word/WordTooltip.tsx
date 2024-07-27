import { Favorite, FavoriteBorder, MoreVert } from '@mui/icons-material';
import { useFavoriteWords } from '../hooks/useFavoriteWords.ts';
import { useMemo } from 'react';
import { Button, Divider } from '@mui/material';

type WordTooltipProps = {
  word: string;
};

export const WordTooltip = ({ word }: WordTooltipProps) => {
  const { isWordFavorite, toggleWord } = useFavoriteWords();

  const isFavorite = useMemo(
    () => isWordFavorite(word),
    [word, isWordFavorite]
  );

  const toggleFavorite = () => {
    toggleWord(word);
  };

  return (
    <div
      onClick={(event) => {
        event.stopPropagation();
      }}
      onTouchStartCapture={(event) => {
        event.stopPropagation();
      }}
    >
      <div
        style={{
          minWidth: '10rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {word}
        <div onClick={toggleFavorite}>
          {isFavorite ? <Favorite /> : <FavoriteBorder />}
        </div>
      </div>
      <Divider color={'white'} />
      <div className={'Flex Space-between'}>
        <ul style={{ paddingLeft: '1rem' }}>
          <li>Translation 1</li>
          <li>Translation 3</li>
          <li>Translation 2</li>
        </ul>
      </div>
      <Divider color={'white'} />
      <Button>Translate sentence</Button>
    </div>
  );
};
