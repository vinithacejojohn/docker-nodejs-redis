var redis = require('redis');
var client = redis.createClient('6379', 'redis');

client.on('connect', function() {
    console.log('connected');

client.set('Name', 'Vinitha Cejo John', function(err, reply) {
  console.log(reply);
});

client.get('Name', function(err, reply) {
    console.log(reply);
});


client.hmset('Author', {
    'Name': 'Vini',
    'Husband Name': 'Cejo John',
    'Place': 'Kottayam'
});

client.hgetall('Author', function(err, object) {
    console.log(object);
});


});
