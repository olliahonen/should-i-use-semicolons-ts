# Should I use semicolons in TypeScript?

TypeScript is susceptible to [the same](https://standardjs.com/rules.html#semicolons) [issues](https://hackernoon.com/an-open-letter-to-javascript-leaders-regarding-no-semicolons-82cec422d67d) as JavaScript if you simply omit all the end-of-line semicolons (`;`).

**In short, lines starting with (, [, or ` may fool you.**

This repository provides some examples on how things could go wrong, in TypeScript.

## Summary

I have not been able to come up with a practical example which would a) work just fine with semicolons, *and* b) exhibit unexpected behaviour *without throwing an error* after only removing the semicolons. Code that breaks without semicolons usually seems so broken that it throws.

However, it is clear that **there are some programming mistakes that turn from easy to detect to very hard to spot if you don't use semicolons.**

So, should you use semicolons in TypeScript? I don't have an answer. You have to understand the pros and cons, and then decide for yourself.

## How to run

* Install Node.js
* `npm install -g tsc`
* `npm run it`
