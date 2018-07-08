'use strict';

const co = require('co');
const Promise = require('bluebird');
const awscred = Promise.promisifyAll(require('awscred'));

let initialized = false;

let init = co.wrap(function* () {
  if (initialized) {
    return;
  }


  process.env.restaurants_api = "https://5ymkmf7cz7.execute-api.us-east-1.amazonaws.com/dev/restaurants";
  process.env.restaurants_table = "restaurants-dev";
  process.env.AWS_REGION = "us-east-1";
  process.env.cognito_client_id = "test_cognito_client_id";
  process.env.cognito_user_pool_id = "us-east-1_BXKvdrj8y";
  process.env.cognito_server_client_id = "5ql91n8ovnbg4cht0a3st9uiqg";
  process.env.AWS_XRAY_CONTEXT_MISSING = "LOG_ERROR";

  let cred = (yield awscred.loadAsync()).credentials;
  process.env.AWS_ACCESS_KEY_ID = cred.accessKeyId;
  process.env.AWS_SECRET_ACCESS_KEY = cred.secretAccessKey;
  if (cred.sessionToken) {
    process.env.AWS_SESSION_TOKEN = cred.sessionToken;
  }

  initialized = true;
});

module.exports.init = init;
