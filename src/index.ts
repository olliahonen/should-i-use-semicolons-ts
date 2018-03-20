import {example1, example1WithSemis} from './example1';
import {example2, example2WithSemis} from './example2';

console.log('\nEXAMPLE 1');
try {
  example1();
} catch (e) {
  console.error(e);
}

console.log('\nEXAMPLE 1 WITH SEMICOLONS');
example1WithSemis();

console.log('\nEXAMPLE 2');
example2();

console.log('\nEXAMPLE 2 WITH SEMICOLONS');
example2WithSemis();
