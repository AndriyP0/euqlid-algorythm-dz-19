arr1 = [11,7.22, 43, 77,533, 87,2, 40.5, 1.223, 90];
arr2 = [7.22,31.95,533,21,2,90,43,1]

function getIntersection(arr1, arr2) { 
    return arr1.
    filter(item => arr2.indexOf(item) !== -1).
    filter((item, index, array) => array.indexOf(item) === index).
    filter(num => Number.isInteger(num)).
    filter(num => num < 100)  
}


console.log(getIntersection(arr1, arr2)); 




