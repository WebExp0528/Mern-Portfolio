const newLocal = 3000;
module.exports = {
  // Secret key for JWT signing and encryption
  secret: 'super secret passphrase',
  // Database connection information
  database: 'mongodb://root:asd123@ds121099.mlab.com:21099/portfolio',
  // Setting port for server
  port: newLocal,
  // Configuring Mailgun API for sending transactional email
  mailgun_priv_key: 'mailgun private key here',
  // Configuring Mailgun domain for sending transactional email
  mailgun_domain: 'mailgun domain here',
  // Mailchimp API key
  mailchimpApiKey: 'mailchimp api key here',
  // SendGrid API key
  sendgridApiKey: 'sendgrid api key here',
  // Stripe API key
  stripeApiKey: 'stripe api key goes here',
  // necessary in order to run tests in parallel of the main app
  test_port: 3001,
  test_db: 'portolio',
  test_env: 'test'
};
