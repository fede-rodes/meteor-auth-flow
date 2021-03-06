// Obs: in the following, 'domain' refers to a specific module in your app,
// for instance domain could be 'posts'.

// Import your server-side configs
import './config.js';

// Import all your server-side collections
// import '../../api/domain/both/collection.js';

// Import all your server-side methods
// import '../../api/domain/both/methods.js
import '../../api/email-system/server/methods.js';

// Import all your publications
// import '../../api/domain/server/publications.js';

import { Meteor } from 'meteor/meteor';
import { Users } from '../../api/users/namespace.js';
import '../../api/users/api.js'; // Users.api

Meteor.startup(() => {
  console.log('SERVER STARTUP');
  // Setup default users
  Users.api.init();

  // Setup email provider service
  const username = Meteor.settings.mailgun.username; // ex. mg.sitename.com
  const password = Meteor.settings.mailgun.password;
  const server = 'smtp.mailgun.org';
  const port = '587';
  process.env.MAIL_URL = `smtp://postmaster%40${username}:${password}@${server}:${port}`;
});
