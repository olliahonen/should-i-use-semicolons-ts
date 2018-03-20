import Bike from './bike';

const bikesForSale = {red: ['Cannondale', 'Focus'], blue: ['Giant']};

export function example3() {
  const mikesGarage = bikesForSale

  ['purple', 'red'].forEach(color => (new Bike(color)).pedal())

  console.log(mikesGarage)
}

export function example3WithSemis() {
  const mikesGarage = bikesForSale;

  ['purple', 'red'].forEach(color => (new Bike(color)).pedal());

  console.log(mikesGarage);
}
