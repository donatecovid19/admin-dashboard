import React from 'react';
import { Admin, Resource, Login } from 'react-admin';
import { RestProvider, AuthProvider, base64Uploader } from 'ra-data-firestore-client';

import PostIcon from '@material-ui/icons/Book';
import { createMuiTheme } from '@material-ui/core/styles';

import Dashboard from './Dashboard';

import { LinkList, LinkEdit, LinkCreate } from './links';
import { UserList, UserEdit, UserCreate } from './users';

const firebaseConfig = require('./config.json');

const trackedResources = [{ name: 'donation-links' }, { name: 'users' }];
const dataProvider = base64Uploader(RestProvider(firebaseConfig, { trackedResources }));

const MyLoginPage = () => (
  <Login
    backgroundImage="https://donatecovid19.org/images/logo.png"
  />
);

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

const authConfig = {
  userProfilePath: '/users/',
  userAdminProp: 'isAdmin'
};

const App = () => (
  <Admin theme={theme}
    loginPage={MyLoginPage}
    dashboard={Dashboard}
    dataProvider={dataProvider}
    authProvider={AuthProvider(authConfig)}>
    <Resource name="donation-links" options={{ label: 'Donation Links' }} list={LinkList} edit={LinkEdit} create={LinkCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
  </Admin>
);

export default App;