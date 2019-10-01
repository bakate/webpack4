/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Trans, Plural, DateFormat } from '@lingui/macro';

const Hello = ({ messages, markAsRead }) => {
  // const messagesCount = messages.length;
  const { name, lastLogin } = 'Bakate';
  return (
    <div>
      <h1>
        <Trans>Boite de récéption</Trans>
      </h1>

      {/* <p>
        <Trans>
          Voir tous les <Link to="/unread">messages non-lues</Link>
          {' or '}
          <a onClick={markAsRead}>marquer</a> comme lu.
        </Trans>
      </p> */}

      <p>
        <Plural
          value={5}
          _0="Il n'y a pas de message"
          _1={`Il n'y a pas de messages, ${name}`}
          other={
            <Trans>
              Il y'a <strong>#</strong> messages dans votre boite de réception
              {name}
            </Trans>
          }
        />
      </p>

      <footer>
        <Trans>
          Dernière connexion le <DateFormat value={lastLogin} />
        </Trans>
      </footer>
    </div>
  );
};
export default Hello;
