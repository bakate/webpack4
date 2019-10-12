import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const AppStyles = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(2, 1fr);
  background-color: #aca;
  padding: 20px;
  place-items: stretch;
  h3 {
    font-weight: 800;
    font-style: italic;
    color: crimson;
  }
  button {
    background-color: #222;
    height: 50px;
    padding: 20px;
    color: white;
    border-radius: 20px;
  }
`;

function Page() {
  const { t, i18n } = useTranslation('common');
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <AppStyles>
      <div>
        <button type="button" onClick={() => changeLanguage('de')}>
          DE
        </button>
        <button type="button" onClick={() => changeLanguage('en')}>
          EN
        </button>
        <button type="button" onClick={() => changeLanguage('fr')}>
          FR
        </button>
        <button type="button" onClick={() => changeLanguage('ch')}>
          CH
        </button>
        <button type="button" onClick={() => changeLanguage('sp')}>
          SP
        </button>
        <h3>{t('description.part1')}</h3>
      </div>
      <div>
        <h1>{t('hello')}</h1>
        <h2>{t('title')}</h2>
      </div>
    </AppStyles>
  );
}

// loading component for suspense fallback
const Loader = () => (
  <AppStyles>
    <div>loading...</div>
  </AppStyles>
);

// here app catches the suspense from page in case translations are not yet loaded
export default function Bonjour() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}
