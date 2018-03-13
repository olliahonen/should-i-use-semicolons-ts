# Should I use semicolons in TypeScript?

TypeScript is susceptible to [the same](https://standardjs.com/rules.html#semicolons) [issues](https://hackernoon.com/an-open-letter-to-javascript-leaders-regarding-no-semicolons-82cec422d67d) as JavaScript if you simply omit all the end-of-line semicolons (`;`).

**In short, lines starting with (, [, or ` may fool you.**

This repository provides some examples on how things could go wrong, in TypeScript.

## Example 1

[Example 1](example1.ts) results in a runtime error without the semicolons. Variable `log` does not refer to a function, because the `(new Bike(...` line has already executed it.

With semicolons, the program works as one would most likely expect.

## Example 2

[Example 2](example2.ts) *does* hold a function reference in variable `log`, but the referred function is not the one with the timestamping. Instead, the final `log('end')` statement prints `My fuchsia bike is so end!` from class `Bike`.

Even with semicolons, this program contains a small bug: The line with the `.shout()` call does not print out anything because `shout` returns a function, and that function is not called at all. It's a subtle mistake, and could easily be overlooked.

No errors are thrown either way.

## Summary

**There are some programming mistakes that turn from easy to detect to very hard to spot if you don't use semicolons.** See [example 2](example2.ts).

**Some realistically practical programs which work perfectly fine, exhibit unexpected and incorrect behaviour after removing the semicolons. Without any compile or runtime errors.** See [example 3](example3.ts).

So, should you use semicolons in TypeScript? I don't have an answer. You have to understand the pros and cons, and then decide for yourself.

## How to run

* Install Node.js
* `npm install -g tsc`
* `npm run it`
