import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';

const messages = {
  simple: 'Bonjour Monsieur',
  placeholder: 'Bonjour {name}, comment vas-tu?',
  date: 'Bonjour, nous sommes en {date}',
  time: 'Il est actuellement {time} à Paris',
};

const Hello = () => (
  <IntlProvider locale="fr" messages={messages}>
    <>
      <FormattedMessage id="simple" />
      <br />
      <FormattedMessage id="placeholder" values={{ name: 'Tony' }} />
      <br />
      <FormattedMessage id="date" values={{ date: new Date().getFullYear() }} />
      <br />
    </>
  </IntlProvider>
);
export default Hello;
