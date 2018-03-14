# Should I use semicolons in TypeScript?

TypeScript is susceptible to [the same](https://standardjs.com/rules.html#semicolons) [issues](https://hackernoon.com/an-open-letter-to-javascript-leaders-regarding-no-semicolons-82cec422d67d) as JavaScript if you simply omit all the end-of-line semicolons (`;`).

**In short, lines starting with (, [, or ` may fool you.**

This repository provides some examples on how things could go wrong, in TypeScript.

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

[Example 3](src/example3.ts) works as you would expect with semicolons. It prints out a message from the `Bike` class for 'purple' and 'red'.

After removing the semicolons, the program prints out the words 'Cannondale' and 'Focus' in place of 'purple' and 'red'. In this case, `'purple', 'red'` is a [comma expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator).

No errors are thrown either way.

**Output:**

```
EXAMPLE 3
I'm riding my Cannondale bike...
I'm riding my Focus bike...
undefined

EXAMPLE 3 WITH SEMICOLONS
I'm riding my purple bike...
I'm riding my red bike...
{ red: [ 'Cannondale', 'Focus' ], blue: [ 'Giant' ] }
```

## Summary

**There are some programming mistakes that may turn from easy to detect to very hard to spot if you don't use semicolons.** See [example 2](src/example2.ts).

**Some realistically practical programs which work perfectly fine, exhibit unexpected and incorrect behaviour after removing the semicolons. Without any compile or runtime errors.** See [example 3](src/example3.ts).

So, should you use semicolons in TypeScript? I don't have an answer. You have to understand the pros and cons, and then decide for yourself.

## How to run

* Install Node.js
* `npm install -g tsc`
* `npm run it`

## How to lint

* `npm install -g tslint typescript`
* `npm run lint`
