import React from 'react';
import { render } from 'react-dom';
import { I18nProvider } from '@lingui/react';
import Hello from './components/Hello';
import catalogFr from './locales/fr/messages';

const catalogs = { fr: catalogFr };

const App = () => (
  <I18nProvider language="fr" catalogs={catalogs}>
    <Hello />;
  </I18nProvider>
);

render(<App />, document.getElementById('hi'));
