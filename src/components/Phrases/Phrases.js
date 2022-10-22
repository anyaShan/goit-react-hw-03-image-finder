import { PhraseWrap } from './Phrases.styled';

export const StartPhrase = () => {
  return (
    <PhraseWrap>
      <p>Please enter something!</p>
    </PhraseWrap>
  );
};

export const ErrorPhrase = () => {
  return (
    <PhraseWrap>
      <p>Error</p>
    </PhraseWrap>
  );
};
