import { useState } from 'react';
import { Word } from '../Word/Word.tsx';

const sentenceRegex = /(?<=[.!?])\s+(?=[A-Z][a-z])/g;

export const Paragraph = ({ content }) => {
  const [showTranslation, setShowTranslation] = useState(false);
  const wrapWordsInSpans = (text) => {
    return text.split(/ /).map((word) => <Word word={word} />);
  };

  console.log(content.split(sentenceRegex));

  // const toggleClick = () => {
  //   setShowTranslation(!showTranslation);
  // };

  return (
    <div style={{ display: 'flex' }}>
      <p>{wrapWordsInSpans(content)}</p>
      {showTranslation && <p>{wrapWordsInSpans(content)}</p>}
    </div>
  );
};
