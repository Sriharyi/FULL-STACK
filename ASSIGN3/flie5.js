str = 'In space, no one can hear you code.'
console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split(''));





let s = ['B', 'n', 'n', 5];
console.log(s.join()); 
console.log(s.join('a'));
console.log(s.join(' ')); 
console.log(s.join('')); 

console.log(str.split(',').sort().join(','));

let alpha = "water,space suits,food,plasma sword,batteries";
let arr = alpha.split(',');
arr.sort();
console.log(arr.join(" "));