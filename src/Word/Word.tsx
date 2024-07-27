import { useState } from 'react';

import { ClickAwayListener, Tooltip } from '@mui/material';
import { WordTooltip } from './WordTooltip.tsx';

type WordProps = {
  word: string;
};

export const Word = ({ word }: WordProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!word) {
    return;
  }

  let trimmedText = word.replace(/[.,/#!$%^&*;:{}=\-_`~”“"()]/g, '');
  trimmedText = trimmedText.charAt(0).toUpperCase() + trimmedText.slice(1);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ClickAwayListener
        onClickAway={() => setIsOpen(false)}
        touchEvent={'onTouchStart'}
      >
        <Tooltip title={<WordTooltip word={trimmedText} />} open={isOpen}>
          <span
            onClick={handleClick}
            className={`Word ${isOpen ? 'Word-open' : ''}`}
          >
            {word}
          </span>
        </Tooltip>
      </ClickAwayListener>{' '}
    </>
  );
};
