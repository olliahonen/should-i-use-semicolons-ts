import Bike from './bike'

function logWithTimestamp(data: any) {
  console.log(`${new Date()}: ${data}`)
}

function compilerError() {
  const log = logWithTimestamp;

  (new Bike('green')).pedal()

  log('the end')
}

const rgb = ['red', 'green', 'blue',]

function runtimeError() {
  const bikeColors = rgb

  ['purple', 'pink'].forEach(color => (new Bike(color)).pedal())

  logWithTimestamp(bikeColors)
}

compilerError()

runtimeError()
