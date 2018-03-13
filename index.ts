import Bike from './bike'

function logWithTimestamp(data: any) {
  console.log(`${new Date()}: ${data}`)
  return data
}

function thisIsRuntimeError1() {
  const log = logWithTimestamp

  (new Bike('green')).pedal()

  log('the end')
}

const rgb = ['red', 'green', 'blue',]

function thisIsRuntimeError2() {
  const bikeColors = rgb

  ['purple', 'pink'].forEach(color => (new Bike(color)).pedal())

  logWithTimestamp(bikeColors)
}

thisIsRuntimeError1()

thisIsRuntimeError2()
