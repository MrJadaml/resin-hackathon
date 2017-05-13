const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', () => {
  client.subscribe('presence')

  client.publish('presence', 'Hello mqtt')
})

client.on('message', (topic, message) => {
	// buff toString

	console.log(message.toString())
  client.end()
})
