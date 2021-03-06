// REQUIRES
var Twitter = require('twitter');
var dotenv = require('dotenv');

// LOAD ENV VARIABLES
dotenv.load();

// MAKE A TWITTER CLIENT
var client = new Twitter({
  // consumer_key: 'QslkNuaueFXU5leoIodLu6pN5',
  // consumer_secret: 'VKbUM7yBkLyG7WfI6QHeOAYr0NNiyXpJGVlr4ynrrCaE44g8bQ',
  // access_token_key: '1568363912-EkkB9m27GicjJTRf5LpvbH1MO6yoxIzFg1zCG5y',
  // access_token_secret: 'qxsVvL2JeeWjYUzNI1p1hCJ7DKzMD5zcUfrKAXNl4qJlM'

  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

// FUNCTION TO REVERSE A STRING
function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

// GRAB LAST TWEET FROM USER TIMELINE
client.get('statuses/user_timeline', {screen_name: 'twitterapi', count: 1}, function(error, tweets, response) {
  if(error) throw error;
  // console.log(tweets);  // Last tweet object from timeline.
  var lastTweet = tweets[0].text; // Text from last tweet.
  var reverseTweet = reverse(lastTweet); // Last tweet reversed.
  console.log("\nYour last tweet was: " + lastTweet);
  console.log("\nYour last tweet reversed is: " + reverseTweet);

  // client.post('statuses/update', {status: reverseTweet},  function(error, tweet, response) {
  // if(error) throw error;
  // console.log(tweet);  // Tweet body.
  // console.log(response);  // Raw response object.
  // });

});
