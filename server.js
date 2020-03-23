const app = require('./app');
var consul = require('consul')();

// const port = Math.floor(Math.random() * 3000) + 4000;
consul.agent.service.register({
    name: 'example',
    address: 'localhost',
    port: 3000
}, function(err) {
    if (err) throw err;
});

app.listen(3000, () => {console.log("runnin on 3000")});
