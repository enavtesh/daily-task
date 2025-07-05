// What’s the difference between Array.prototype.forEach and Array.prototype.map 
// in terms of return value and use-case?





// Difference: forEach vs map

//|---------|----------------|------------------------|
//| Feature |	forEach	     |   map                  |
//|---------|----------------|------------------------|
//|Return   | Valueundefined |	  New transformed     |
//|         |                |    array               |
//|---------|----------------|------------------------|
//|Purpose  | Side-effects	 |  Transforming arrays   |
//|         |(eg,console.log)|                        | 
//|---------|----------------|------------------------|
//|Chainable| No             |	Yes                   |
//|---------|----------------|------------------------|

const a = [1, 2, 3];
a.forEach(x => x * 2);  // does nothing useful

const b = a.map(x => x * 2)