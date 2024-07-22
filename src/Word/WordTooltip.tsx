import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useFavoriteWords } from '../hooks/useFavoriteWords.ts';
import { useMemo } from 'react';

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
      style={{
        minWidth: '10rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      onClick={(event) => {
        event.stopPropagation();
        console.log('click inside');
      }}
      onTouchStartCapture={(event) => {
        event.stopPropagation();
        console.log('touch inside');
      }}
    >
      {word}
      <div onClick={toggleFavorite}>
        {isFavorite ? <Favorite /> : <FavoriteBorder />}
      </div>
    </div>
  );
};
