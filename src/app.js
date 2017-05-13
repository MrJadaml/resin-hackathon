const mqtt = require('mqtt')
const client  = mqtt.connect({hostname: '192.168.86.197'})

client.on('connect', () => {
  client.subscribe('presence')

  client.publish('presence', 'Hello mqtt')
})

// client.on('message', (topic, message) => {
//   // buff toString
//
//   console.log(message.toString())
//   client.end()
// })
