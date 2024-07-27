import { Paragraph } from '../Paragraph/Paragraph.tsx';

type TextProps = {
  paragraphs: string[];
};

export const Text = ({ paragraphs }) => {
  return (
    <>
      {paragraphs.map((str) => (
        <>
          <Paragraph content={str} />
        </>
      ))}
    </>
  );
};
