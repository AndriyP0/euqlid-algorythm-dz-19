'use strict';
let arrNumb = [];
let arrSortNumb = [];
let value = 5000;

const createArr = (limit =1e7) =>{
let start = Date.now();
for (let i = 0; i <limit; i++) {
    arrNumb.push(Math.round(Math.random()*value))
    }
    console.log(`Create an array for ${Date.now() - start}ms `)
    arrSortNumb = arrNumb.sort((a, b) => a - b);
    console.log(`Native sort`);
    console.log(`Sort an array for ${Date.now() - start}ms `);
    return arrNumb;
    
}
createArr()

const linearFind = (arr, value)=>{
    let start = Date.now();
    for(let i = 0;i<arr.length;i++){
        if(value===arr[i]){
                console.log('Liner find');
                console.log(`Find value for ${Date.now() - start}ms `);
                return i;
        }
    }
    return -1;
}
// console.log(linearFind(arrNumb,1000));
const findMax = (arr)=>{
  let start = Date.now();
  let max =arr[0]
   for(let i = 1;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i]
        }
   }
    console.log(`Find max value for ${Date.now() - start}ms `);
    return max;

}
console.log(findMax(arrNumb))