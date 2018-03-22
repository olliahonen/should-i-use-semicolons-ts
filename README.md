# Should I use semicolons in TypeScript?

TypeScript is susceptible to [the same](https://standardjs.com/rules.html#semicolons) [issues](https://hackernoon.com/an-open-letter-to-javascript-leaders-regarding-no-semicolons-82cec422d67d) as JavaScript if you simply omit all the end-of-line semicolons (`;`).

**In short, lines starting with (, [, or ` may fool you.**

This repository provides a brief tour of the situation, with some examples on how things could go wrong, in TypeScript, as well as a good mitigation technique.

If you're not that into the details, you can just **jump to the [conclusions](https://github.com/olliahonen/should-i-use-semicolons-ts#summary).**

---

## Example 1

[Example 1](src/example1.ts) results in a runtime error without the semicolons. Variable `log` does not refer to a function, because the `(new Bike(...` line has already executed it.

With semicolons, the program works as one would most likely expect.

**Output:**

```
EXAMPLE 1
Tue Mar 13 2018 17:09:08 GMT+0200 (EET): [object Object]
I'm riding my green bike...
TypeError: log is not a function
    at Object.example1 (/Users/oahonen/should-i-use-semicolons-ts/example1.js:8:5)
    at Object.<anonymous> (/Users/oahonen/should-i-use-semicolons-ts/index.js:6:16)
    at Module._compile (module.js:649:30)
    at Object.Module._extensions..js (module.js:660:10)
    at Module.load (module.js:561:32)
    at tryModuleLoad (module.js:501:12)
    at Function.Module._load (module.js:493:3)
    at Function.Module.runMain (module.js:690:10)
    at startup (bootstrap_node.js:194:16)
    at bootstrap_node.js:666:3

EXAMPLE 1 WITH SEMICOLONS
I'm riding my green bike...
Tue Mar 13 2018 17:09:08 GMT+0200 (EET): end 1
```

## Example 2

Without semicolons, [example 2](src/example2.ts) does hold a function reference in variable `log`, but the referred function is not the one with the timestamping. Instead, the final `log('end')` statement prints `My fuchsia bike is so end!` from class `Bike`. This sort of mistake could easily be overlooked, depending on the actual impact of calling the wrong function.

Even with semicolons, this program contains a bug: The line with the `.shout()` call does not print out anything because `shout` returns a function, and that function is not called at all.

No errors are thrown either way.

**Output:**

```
EXAMPLE 2
Tue Mar 13 2018 17:09:08 GMT+0200 (EET): [object Object]
My fuchsia bike is so end!

EXAMPLE 2 WITH SEMICOLONS
Tue Mar 13 2018 17:09:08 GMT+0200 (EET): end
```

## Example 3

This example does not pass the TypeScript compilation step, so I will include it inline here:
```
import Bike from './bike';

const bikesForSale = {red: ['Cannondale', 'Focus'], blue: ['Giant']};

export function example3() {
  const mikesGarage = bikesForSale

  ['purple', 'red'].forEach(color => (new Bike(color)).pedal())

  console.log(mikesGarage)
}
```

The `['purple', 'red']` part is interpreted as accessing the `bikesForSale` object, and in this interpretation, `'purple', 'red'` is a [comma expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator). In JavaScript this would fly, and the mistake may go unnoticed.

In TypeScript however, the compiler reports an error for this: `TS2695: Left side of comma operator is unused and has no side effects.`.

Adding semicolons to the end of each line makes the program work as one would expect.

## Linter

Linters are great at catching mistakes in JavaScript, and to a large degree in TypeScript, as well. For instance, with [TSLint's](https://palantir.github.io/tslint/) default configuration, the linter detects an [unused expression](https://palantir.github.io/tslint/rules/no-unused-expression/) in example 3 at `'purple'`.

### How about adding a linter rule which bans starting a line with any of the problematic characters?

Not only is this a great idea, turns out adding it is also very easy with the help of [ESLint rules for TSLint](https://github.com/buzinas/tslint-eslint-rules) and its [no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline) rule! Enabling that rule makes the linter report on all of our little tricks:
```
ERROR: src/example1.ts[9, 15]: unexpected newline between function and ( of function call
ERROR: src/example2.ts[9, 15]: unexpected newline between function and ( of function call
```
and
```
unexpected newline between object and [ of property access
```
in example 3 at the line starting with `['purple', 'red']`.

## Summary

I have not been able to come up with a realistically practical example which would:
  - work just fine with semicolons, and
  - exhibit unexpected behaviour after removing semicolons *without* one of:
    - Linter error (TSLint default configuration), or
    - TypeScript compilation error, or
    - Runtime error

It seems that the issues due to omitted semicolons are quite unlikely to bite you in JavaScript, and even more so in TypeScript, because of the additional safeguards provided by the compiler.

However, some mistakes do slip through (see [example 2](src/example2.ts)), which is why you should **add [this one linter rule](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/noUnexpectedMultilineRule.md) and achieve basically full protection.**

### So, should you use semicolons in TypeScript?

Always using end-of-line semicolons is the absolute safe choice, the downside is that they may be annoying to write and to read.

You can also go without semicolons quite safely, but it isn't completely fool-proof: Even if you add the awesome linter rule, it is still possible to accidentally disable linting or misconfigure the linter later on.

I don't have a universal answer to the question. You need to understand the pros and cons (hopefully this repo helps), and then decide for yourself.

## Running the examples

* Install Node.js
* `npm install -g typescript`
* `npm run it`

### Linting

* `npm install -g tslint typescript`
* `npm install`
* `npm run lint`

---

[License](LICENSE.md)
