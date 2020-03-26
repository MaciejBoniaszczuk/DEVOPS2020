const express = require('express');
const redis = require('redis');
const app = express();

//var client = redis.createClient();

const client = redis.createClient({
    port: 6379,
    host: 'redis-server'
});
client.on('connect', function () {
    console.log('connected');
});
client.set('visits', 0);
app.get('/', (req, resp) => {
    client.get('visits', (err, visits) => {
        resp.send("visits: " + visits);
        client.set('visits', +parseInt(visits) + 1);
    });
});
app.listen(8080, () => {
    console.log('Server is listening on port 8080')
})