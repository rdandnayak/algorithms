var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function insertionSort(a){
  var len = a.length,
      i, // index of unsorted section
      j, // index of sorted section
      value;
  for(i=1; i<len; i++){ // start from 1 as first element doesnt have any sorted section on its left
    value = a[i]; // store the current value because it may shift later
    for(j = (i-1); j >= 0 && a[j] > value; j--){
      a[j+1] = a[j];
    }
    a[j+1] = value; // this is because j-- happens after loop ends
  }
}


insertionSort(a);
console.log(a);