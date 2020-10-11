# JavaScript Loops

##  `for...in` loop
Iterates over property names.

```js
const arr = [3, 5, 7];
arr.foo = 'hello';
```

```js
for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}
```

##  `for...of` loop
Iterates over property values.

```js
for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}
```
