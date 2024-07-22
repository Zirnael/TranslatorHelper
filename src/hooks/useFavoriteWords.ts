import { useEffect, useState } from 'react';

export const useFavoriteWords = () => {
  const [currentWords, setCurrentWords] = useState([]);

  useEffect(() => {
    const words: string[] = JSON.parse(
      localStorage.getItem('favoriteWords') || '[]'
    );
    setCurrentWords(words);
  }, []);

  const addWord = (word: string): void => {
    const words: string[] = JSON.parse(
      localStorage.getItem('favoriteWords') || '[]'
    );

    if (!words.includes(word)) {
      words.push(word);
      setCurrentWords(words);
      localStorage.setItem('favoriteWords', JSON.stringify(words));
    }
  };

  const removeWord = (word: string): void => {
    let words: string[] = JSON.parse(
      localStorage.getItem('favoriteWords') || '[]'
    );
    words = words.filter((w) => w !== word);
    setCurrentWords(words);
    localStorage.setItem('favoriteWords', JSON.stringify(words));
  };

  const isWordFavorite = (word: string): boolean => {
    return currentWords.includes(word);
  };

  const toggleWord = (word: string): void => {
    if (isWordFavorite(word)) {
      removeWord(word);
    } else {
      addWord(word);
    }
  };

  return { isWordFavorite, toggleWord };
};
