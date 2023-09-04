import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-yfdmjp3hflxdtznl.us.auth0.com"
    clientId="yQk28uMkQK5FsXbX8k5TStq82d6ZL4vH"
    redirect_uri={ window.location.origin}
  >
    <App />
  </Auth0Provider>,
);