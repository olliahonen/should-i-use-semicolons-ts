# Should I use semicolons in TypeScript?

TypeScript is susceptible to [the same](https://standardjs.com/rules.html#semicolons) [issues](https://hackernoon.com/an-open-letter-to-javascript-leaders-regarding-no-semicolons-82cec422d67d) as JavaScript if you simply omit all the end-of-line semicolons (`;`). In short, lines starting with `(`, `[`, or ` may fool you.

This repository provides some examples of how things could go wrong, in TypeScript.

## How to run

* Install Node.js
* `npm install -g tsc`
* `npm run it`
