//a function can stored in variable
function add(a,b){
    return a+b;
}
var sum=add;
console.log(sum(4,5));
console.log(typeof sum);

//function can store array
var arr =[]
arr.push(add);
console.log(arr);
console.log(arr[0](7,8));

//function can store in object

var obj={
    sum:add
}
console.log(obj)
console.group(obj.sum(7,9))

//we can create function as we need
setTimeout(function(){
    console.log('I have creater....')
} , 100)