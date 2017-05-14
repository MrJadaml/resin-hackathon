const mqtt = require('mqtt')
const os = require('os').networkInterfaces()
const { RPS } = require('./rps');
const resin = require('resin-sdk')({
  apiUrl: "https://api.resin.io/",
})

const client  = mqtt.connect({ hostname: os.wlan0[0].address })
const game = new RPS();

//uuid.local:port

resin.token.set('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTkxMDEsInVzZXJuYW1lIjoiZ2hfbXJqYWRhbWwiLCJlbWFpbCI6Im1yamFkYW1sQGdtYWlsLmNvbSIsImNyZWF0ZWRfYXQiOiIyMDE3LTA1LTEzVDE2OjQxOjE0LjI0N1oiLCJmaXJzdF9uYW1lIjoiamFkYW0iLCJsYXN0X25hbWUiOiJsIiwiY29tcGFueSI6IiIsImFjY291bnRfdHlwZSI6InBlcnNvbmFsIiwic29jaWFsX3NlcnZpY2VfYWNjb3VudCI6W3siY3JlYXRlZF9hdCI6IjIwMTctMDUtMTNUMTY6NDE6MTQuMjQ3WiIsImlkIjo1MjUxLCJ1c2VyIjp7Il9fZGVmZXJyZWQiOnsidXJpIjoiL3Jlc2luL3VzZXIoMTkxMDEpIn0sIl9faWQiOjE5MTAxfSwicHJvdmlkZXIiOiJnaXRodWIiLCJyZW1vdGVfaWQiOiI1MDY3NTcxIiwiZGlzcGxheV9uYW1lIjoiTXJKYWRhbWwiLCJfX21ldGFkYXRhIjp7InVyaSI6Ii9yZXNpbi9zb2NpYWxfc2VydmljZV9hY2NvdW50KDUyNTEpIiwidHlwZSI6IiJ9fV0sImhhc19kaXNhYmxlZF9uZXdzbGV0dGVyIjpmYWxzZSwiand0X3NlY3JldCI6IllLUjYyTUNBT0VOSzRZUkdZVEM0TUNFSUdWRkNOWUhPIiwiaGFzUGFzc3dvcmRTZXQiOmZhbHNlLCJuZWVkc1Bhc3N3b3JkUmVzZXQiOmZhbHNlLCJwdWJsaWNfa2V5Ijp0cnVlLCJmZWF0dXJlcyI6W10sImludGVyY29tVXNlck5hbWUiOiJnaF9tcmphZGFtbCIsImludGVyY29tVXNlckhhc2giOiJlMjQyMzU1MzBmYTQ0YTQ3MjdiMjdiNGQwYTMwMWU5NWVjNGQyZTczY2MwY2Q3MzExM2RjOWY2NWIwZmZjZmRhIiwicGVybWlzc2lvbnMiOltdLCJhY3RvciI6MTIxODM3NCwiaWF0IjoxNDk0NzEzODc2LCJleHAiOjE0OTUzMTg2NzZ9.Gk5u3SyQ1w2hU4ZfnYrXqAGvTg8XqRaBb0AHSQ6mFvE')
  .then(() => {
    resin.models.device.getAllByApplication(397213)
      .then(devices => {
//console.log('Devicesssssssss:', devices);

        game.addPlayer(devices[0])
        game.addPlayer(devices[1])
      })
      .catch(err => {
        console.log(`ERR: ${err}`);
      });
  });


client.on('connect', () => {
  client.subscribe('init')
  client.publish('init', `Player online.`)
})

client.on('message', (topic, message) => {
  console.log(message.toString());

  game[topic](message);
  client.end()
})


