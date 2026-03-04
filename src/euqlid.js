'use strict';

const euqlid = (val1,val2) =>{
    if(val1 !== 0 && val2 !== 0){
        val1 = Math.round(val1);
        val2 = Math.round(val2);
       
    if((val1 % val2) === 0){
            return val2
    }
    if((val1 % val2) > 0){
       
       return euqlid(val2 ,val1 % val2)
    }
    else re
}}
// =============TEST=============
console.log(euqlid(20, 6))
console.log(euqlid(111, 17));
console.log(euqlid(2044, 60));
console.log(euqlid(10003, 99));
console.log(euqlid(20, 4));
