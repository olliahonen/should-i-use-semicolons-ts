import Bike from './bike';

function logWithTimestamp(data: any) {
  console.log(`${new Date()}: ${data}`);
  return data;
}

export function example2() {
  const log = logWithTimestamp

  (new Bike('fuchsia')).shout()

  log('end')
}

export function example2WithSemis() {
  const log = logWithTimestamp;

  (new Bike('fuchsia')).shout(); // This is just a function that's never called

  log('end');
}
