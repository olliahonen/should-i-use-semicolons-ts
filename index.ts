import Bike from './bike'

function logWithTimestamp(data: any) {
  console.log(`${new Date()}: ${data}`)
  return data
}

function thisHasUnexpectedBehaviourDueToSimpleProgrammerError() {
  const log = logWithTimestamp

  (new Bike('fuchsia')).shout()

  log('end')
}

function thisIsRuntimeError1() {
  const log = logWithTimestamp

  (new Bike('green')).pedal()

  log('end 1')
}

const rgb = ['red', 'green', 'blue',]

function thisIsRuntimeError2() {
  const bikeColors = rgb

  ['purple', 'pink'].forEach(color => (new Bike(color)).pedal())

  logWithTimestamp(bikeColors)
}

console.log('EXAMPLE 1')
try {
  thisHasUnexpectedBehaviourDueToSimpleProgrammerError()
} catch (e) {
  console.error(e)
}

console.log('EXAMPLE 2')
try {
  thisIsRuntimeError1()
} catch (e) {
  console.error(e)
}

console.log('EXAMPLE 3')
try {
  thisIsRuntimeError2()
} catch (e) {
  console.error(e)
}
