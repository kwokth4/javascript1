var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
// write your code here...
var total = 0;
for(f in fruit) {
    total += fruit[f]; 
}
console.log(total)