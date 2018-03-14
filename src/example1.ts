import Bike from './bike';

function logWithTimestamp(data: any) {
  console.log(`${new Date()}: ${data}`);
  return data;
}

export function example1() {
  const log = logWithTimestamp

  (new Bike('green')).pedal()

  log('end 1') // TypeError: log is not a function
}

export function example1WithSemis() {
  const log = logWithTimestamp;

  (new Bike('green')).pedal();

  log('end 1');
}
