import React from 'react';
import { Admin, Resource, Login } from 'react-admin';
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
  FirebaseRealTimeSaga
} from 'react-admin-firebase'

import PostIcon from '@material-ui/icons/Book';
import { createMuiTheme } from '@material-ui/core/styles';

import Dashboard from './Dashboard';

import { LinkList, LinkEdit, LinkCreate } from './links';
import { UserList, UserEdit, UserCreate } from './users';

const firebaseConfig = require('./config.json');

const options = {
  logging: true,
  watch: ['donation-links', 'users']
}

const dataProvider = FirebaseDataProvider(firebaseConfig, options);
const authProvider = FirebaseAuthProvider(firebaseConfig, options);

const MyLoginPage = () => (
  <Login
    backgroundImage="https://donatecovid19.org/img/logo.png"
  />
);

const theme = createMuiTheme({
  palette: {
    type: 'light', // Switching the dark mode on is a single property value change.
  },
});

const App = () => (
  <Admin theme={theme}
    loginPage={MyLoginPage}
    dashboard={Dashboard}
    dataProvider={dataProvider}
    authProvider={authProvider}>
    <Resource name="donation-links" options={{ label: 'Donation Links' }} list={LinkList} edit={LinkEdit} create={LinkCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
  </Admin>
);

export default App;