function findMinValue(arr){
    let min = arr[0];
    for (i = 0; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  }
  
  function sortArray(arr) {
    let sortedArray = [];
    while (arr.length > 0) {
      let minValue = findMinValue(arr);
      sortedArray.push(minValue);
      arr.splice(arr.indexOf(minValue), 1);
    }
    return sortedArray;
  }
  //Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.
  function sortArray(arr) {
    let sortedArray = arr.slice();
    sortedArray.sort(function(a,b){
        return a - b;
    })
    return sortedArray
  }
  

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
console.log(sortArray(nums1));
console.log(sortArray(nums2));
console.log(sortArray(nums3));

//Sort each array in decending order.
function sortArray(arr) {
    let sortedArray = arr.slice();
    sortedArray.sort(function(a,b){
        return b - a;
    })
    return sortedArray
  }
  console.log(sortArray(nums1));
  console.log(sortArray(nums2));
  console.log(sortArray(nums3));
  