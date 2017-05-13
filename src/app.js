const mqtt = require('mqtt')
const os = require('os').networkInterfaces()
const client  = mqtt.connect({ hostname: os.wlan0[0].address })

client.on('connect', () => {
  client.subscribe('presence')

  client.publish('presence', 'Hello mqtt')
})

client.on('message', (topic, message) => {
  // buff toString

  console.log(message.toString())
  client.end()
})
