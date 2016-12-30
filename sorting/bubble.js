var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function bubbleSort(a){
  var swapped;
  do {
    swapped = false;
    for(let i =0; i < a.length-1; i++){
      if(a[i] > a[i+1]){
        let temp = a[i];
        a[i] = a[i+1];
        a[i+1] = temp;
        temp = null;
        swapped = true;
      }
    }
  } while(swapped);
}

bubbleSort(a);
console.log(a);
