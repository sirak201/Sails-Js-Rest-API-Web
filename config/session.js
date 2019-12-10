/**
 * Session Configuration
 * (sails.config.session)
 *
 * Use the settings below to configure session integration in your app.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For all available options, see:
 * https://sailsjs.com/config/session
 */

module.exports.session = {


  cookie: {
    _expires: 365 * 24 * 60 * 60 * 1000
  },
  /***************************************************************************
  *                                                                          *
  * Session secret is automatically generated when your new app is created   *
  * Replace at your own risk in production-- you will invalidate the cookies *
  * of your users, forcing them to log in again.                             *
  *                                                                          *
  ***************************************************************************/
  secret: '90760145df72c7c87a565f8ce89932dd',



  adapter: 'connect-mongo',
  url:   'mongodb://fullstackadmin:Sara719322@ds233288.mlab.com:33288/heroku_2d6v6ns6',
  //'mongodb://sirak101:sirak719322@cluster-shard-00-00-rrrks.mongodb.net:27017,cluster-shard-00-01-rrrks.mongodb.net:27017,cluster-shard-00-02-rrrks.mongodb.net:27017/test?ssl=true&replicaSet=Cluster-shard-0&authSource=admin&retryWrites=true&w=majority',


  collection: 'sessions',

  /***************************************************************************
  *                                                                          *
  * Customize when built-in session support will be skipped.                 *
  *                                                                          *
  * (Useful for performance tuning; particularly to avoid wasting cycles on  *
  * session management when responding to simple requests for static assets, *
  * like images or stylesheets.)                                             *
  *                                                                          *
  * https://sailsjs.com/config/session                                       *
  *                                                                          *
  ***************************************************************************/
  // isSessionDisabled: function (req){
  //   return !!req.path.match(req._sails.LOOKS_LIKE_ASSET_RX);
  // },

};
